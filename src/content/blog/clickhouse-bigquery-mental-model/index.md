---
title: I Used ClickHouse Like BigQuery. That Was the Mistake.
description: The warehouse architecture lesson I learned after moving from ClickHouse to BigQuery, then back to ClickHouse again.
date: 2026-05-07
tags:
  - omnichannel
  - data
  - clickhouse
  - bigquery
---

![A founder comparing a cloud-scale analytics warehouse with a compact columnar storage engine](./clickhouse-bigquery-cover.png)

## Background

Before working seriously with ClickHouse, most of my analytics warehouse experience was with [BigQuery](https://cloud.google.com/bigquery).

And honestly, BigQuery made me comfortable.

In my previous projects, when I used dbt to transform raw data into analytics-ready tables, the experience was very smooth. Even when I needed to run a full refresh, the whole `dbt build` usually finished in around 5 minutes.

Not only incremental refresh.

Full refresh.

All dates.

All data.

That became my default expectation for an analytics warehouse. I started to think that if the transformation logic is correct, the warehouse should be able to handle the heavy work behind it.

Then I worked on Omnichannel.

For context, Omnichannel is a finance-focused marketplace reconciliation product. The data is not only order data. It has orders, order items, returns, return items, products, variants, warehouses, settlement reports, admin fees, shipping fees, refunds, vouchers, and many other marketplace-specific details.

The shape of the data is much bigger and messier than what I usually handled before.

At first, I did not fully realize that.

## Why I Chose ClickHouse First

For Omnichannel, I decided to use [ClickHouse](https://clickhouse.com/) as the analytics database.

The reason was simple: cost.

ClickHouse is already known as a very fast OLAP database, and it can be much cheaper than BigQuery when the system is designed well. Since Omnichannel needs to store and analyze a lot of marketplace data, choosing a cheaper analytical database felt like the responsible decision.

At that point, my thinking was something like this:

> BigQuery and ClickHouse are both OLAP databases. So if I can run dbt on BigQuery, I should be able to run dbt on ClickHouse too.

Technically, that is true.

But practically, that assumption was too shallow.

I was treating ClickHouse like a cheaper BigQuery.

That was the mistake.

## The First Disaster

The first version of my dbt project was still very BigQuery-shaped.

The model structure made sense from my old mental model:

- raw tables
- staging tables
- latest-state tables
- intermediate tables
- marts

The problem was how those tables were maintained.

Many models depended on rebuild-heavy logic. Some tables needed deduplication. Some tables needed to find the latest row for each business entity. Some models parsed raw JSON repeatedly. Some incrementals were still close to the idea of "just rebuild the result from the source data".

In BigQuery, this kind of approach is often still acceptable.

BigQuery can throw a lot of distributed compute at the problem. It can scan huge tables, shuffle data, regroup rows, and finish the job without me thinking too much about the underlying machine.

In ClickHouse, especially on a smaller instance, that same pattern became dangerous.

Every time I did a full refresh, the instance went down.

Not slow.

Down.

That was the first real warning that I was using the wrong mental model.

## The Bucket Strategy

After that, I tried to make the full refresh safer.

The obvious problem was CPU and memory pressure. If the refresh tried to process too much data at once, ClickHouse could not handle it in the current setup.

So I used a bucket strategy.

Instead of refreshing everything in one big run, I split the work into smaller buckets. The idea was simple: reduce the amount of data processed at the same time, so the instance would stay alive.

And it worked.

The instance no longer went down.

But now the refresh took around 75 minutes.

That number was painful for me.

I was used to BigQuery finishing a full refresh in around 5 minutes. Now the safer ClickHouse version needed more than an hour.

At that moment, ClickHouse felt like the wrong choice.

I started to think:

> Maybe I should just move back to BigQuery.

## The BigQuery Escape

So I did it.

I migrated the warehouse from ClickHouse to BigQuery.

The migration itself was painful. Schema differences, SQL differences, dbt adapter differences, table naming, data loading, orchestration, and all the small details that only appear when you actually move a real project.

But I accepted that pain because I wanted the system to work.

And after the migration, the thing that I expected happened.

The full refresh was fast again.

BigQuery handled the large reshuffle much better. It felt familiar. It felt forgiving. It felt like the warehouse I was used to.

Then the bill came.

For every full refresh, it charged me around Rp 500rb.

And because I was still testing, fixing, and rerunning the migration, I accidentally did it three times.

That was the second disaster.

With ClickHouse, the cost was operational pain.

With BigQuery, the cost was very visible in the bill.

Both hurt.

## The Real Problem

After getting burned on both sides, I realized the problem was not as simple as:

- ClickHouse is bad
- BigQuery is expensive

That would be too easy.

The real problem was this:

> I used BigQuery habits on ClickHouse, then used ClickHouse cost expectations on BigQuery.

In BigQuery, I got used to a warehouse that feels almost unlimited from the developer side. I can write a heavy transformation, run a full refresh, and BigQuery will usually find a way to finish it quickly.

Of course, it is not magic. I still pay for the data processed.

But the developer experience makes heavy reshuffling feel normal.

ClickHouse is different.

ClickHouse can be very fast and very efficient, but it cares much more about how the data is stored, ordered, partitioned, and refreshed.

If the table layout matches the access pattern, it can be amazing.

If the table layout does not match the workload, it can become painful very quickly.

That is the part I missed.

## BigQuery Spoiled Me

The more I think about it, the more I believe BigQuery spoiled me.

In BigQuery, I can often afford to think at the query level:

- write the model
- run dbt
- let the warehouse process it
- optimize later if needed

In ClickHouse, I need to think more at the storage level:

- how is the table partitioned?
- what is the `ORDER BY` key?
- is this table append-heavy or stateful?
- am I forcing mutations?
- am I repeatedly deduping the same raw data?
- am I parsing JSON again and again?
- does this query match how the data is physically arranged?

Both are OLAP databases.

But they do not reward the same architecture.

BigQuery is very good when I want a managed warehouse that can absorb large distributed transformation work.

ClickHouse is very good when I design the data flow to be insert-heavy, partition-aware, and aligned with the MergeTree storage model.

That means the dbt project cannot simply be moved from BigQuery to ClickHouse by changing SQL syntax.

The architecture needs to change too.

## The Marketplace Data Was Bigger Than I Thought

Another mistake was that I underestimated the data.

In my previous projects, even when the data felt large, it was still manageable enough for the warehouse strategy I used.

Marketplace finance data is different.

One order is not just one row.

It can become:

- one order row
- multiple order item rows
- settlement rows
- admin fee rows
- shipping fee rows
- voucher rows
- return rows
- refund rows
- product and variant rows
- warehouse and fulfillment rows

And those records do not all arrive at the same time.

An order can happen today. Settlement can happen later. A return can appear after that. An admin fee correction can come from another report. A marketplace can resend corrected data for the same business key.

So the warehouse needs to handle history, latest state, corrections, and reporting windows.

This is not the same as a simple dashboard where the data is grouped by date and campaign.

It is a finance product.

The number needs to be traceable.

That changes the architecture.

## Why I Went Back to ClickHouse

After the BigQuery bill shock, I decided to go back to ClickHouse.

Yes, that means another painful migration.

But this time, the decision was different.

The first time, I chose ClickHouse because I wanted cheaper BigQuery.

The second time, I chose ClickHouse because I started to understand what ClickHouse needs from the architecture.

That difference matters.

The goal now is not only:

> Run dbt on ClickHouse.

The real goal is:

> Design the warehouse so ClickHouse can do what it is good at.

That means I need to stop treating dbt full refresh as the main solution for every state transition.

## The New Architecture Direction

The new direction is to make the warehouse more ClickHouse-native.

The rough layer should look like this:

```txt
Raw
  |
  v
Core
  |
  v
Mart
  |
  v
Serving
```

The raw layer keeps source-shaped marketplace data.

It should be append-heavy, cheap to load, and useful for replayability. Raw JSON can stay there for audit and debugging.

The core layer is the most important change.

This is where important business fields should become typed columns. It is also where latest-state tables and event tables should be maintained using ClickHouse-native patterns.

For example:

- `core_commerce_orders_latest`
- `core_commerce_order_items_latest`
- `core_commerce_returns_latest`
- `core_finance_order_events`
- `core_finance_return_events`
- `core_finance_admin_fee_events`

Instead of making dbt repeatedly dedupe raw records and rebuild latest-state tables, ClickHouse should own more of that state transition path.

For latest-state entities, that can mean using `ReplacingMergeTree` with a version column such as `synced_at`.

For event tables, that can mean keeping them append-heavy with a clear event date.

For marts, dbt can still be useful.

But dbt should build from already-normalized core tables, not repeatedly parse raw JSON and recompute latest state from scratch.

The mart layer should answer reporting questions:

- order history
- order item history
- daily order metrics
- return metrics
- product daily metrics
- admin fee daily metrics
- dimensions

Then the serving layer should be what the application reads.

The dashboard should not query raw tables.

The API should not need to use `FINAL` in a hot path.

The API should not dedupe latest rows at request time.

The API should not parse raw JSON just to calculate common dashboard metrics.

If the dashboard query is complicated, it probably means the transformation layer has not done its job yet.

## How dbt Should Change

This was one of the biggest lessons for me.

dbt is still useful.

But in ClickHouse, I should be more careful about what job I give to dbt.

In BigQuery, it is tempting to let dbt own almost everything:

- raw cleanup
- staging
- latest-state selection
- deduplication
- history tables
- marts
- serving tables

In ClickHouse, that can become too expensive if the tables are large and the models depend on repeated scans, deletes, inserts, or regrouping.

For this project, dbt should focus more on:

- marts
- dimensions
- semantic SQL
- reporting contracts
- tests
- documentation
- controlled backfills

And dbt should do less of:

- latest-row selection for large entities
- row-level dedupe by business key
- repeated source correction merges
- repeated raw JSON extraction into final business columns

Those parts should move closer to ClickHouse-native core refresh jobs.

## The Operational Lesson

Another lesson is that "cheap" has different shapes.

BigQuery cost is very visible.

When I run a heavy full refresh, I can see the money disappear from the bill. That Rp 500rb per full refresh was painful because the cost was immediate and obvious.

ClickHouse cost is different.

If I use ClickHouse badly, I may not see the cost as one clean invoice line. But I still pay for it through:

- instance downtime
- slow refreshes
- engineering time
- debugging time
- memory spikes
- mutation backlog
- operational stress

So saying "ClickHouse is cheaper" is incomplete.

ClickHouse is cheaper when I design the system properly for ClickHouse.

If I use it with the wrong architecture, the cost just moves from the cloud bill into engineering pain.

## What I Accept Now

For this project, I still choose ClickHouse.

But now I accept the tradeoff more clearly.

I choose ClickHouse because the long-term storage and query cost can be lower for this kind of marketplace analytics product.

I also accept that ClickHouse is not as forgiving as BigQuery when I need a big reshuffle across a large amount of data.

That means I need to design the warehouse differently:

- avoid unnecessary full refreshes
- refresh only affected partitions when possible
- extract important business columns early
- stop repeatedly parsing raw JSON downstream
- use core latest-state and event tables
- keep marts simple and precomputed
- make dashboard reads hit serving tables or final marts only
- treat dbt as the semantic and mart layer, not the whole state engine

This is less flexible than my old BigQuery workflow.

But it is more appropriate for the cost profile I need.

## The Lesson

The lesson is not "ClickHouse is better than BigQuery."

It is also not "BigQuery is too expensive."

Both are good tools.

But they have different assumptions.

BigQuery is excellent when I want a managed warehouse that can process large transformations without managing much infrastructure. It is fast, powerful, and very forgiving. But that forgiveness can become expensive.

ClickHouse is excellent when I want fast and cost-efficient analytics with more control over storage and query patterns. But it expects me to care about partitions, ordering, table engines, insert patterns, and read models.

The expensive part was not BigQuery or ClickHouse.

The expensive part was assuming that one warehouse strategy can move unchanged between systems.

That was my real mistake.

For Omnichannel, I am going back to ClickHouse.

Not because ClickHouse magically solves everything.

But because now I understand that the work is not only migration.

The real work is changing the mental model.
