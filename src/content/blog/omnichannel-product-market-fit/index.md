---
title: I Built Omnichannel for Business Owners. Finance Teams Showed Me the Real Problem
description: The product-market fit lesson I learned after Omnichannel moved from marketplace analytics into finance reconciliation.
date: 2026-05-07
tags:
  - omnichannel
  - product-market-fit
  - founder
---

![Marketplace analytics dashboard shifting into finance reconciliation workflow](./omnichannel-pmf-cover.png)

## Background

Before building [Omnichannel](https://omnichannel.entrefine.com/), most of my work in [Entrefine](https://entrefine.com/) came from custom business solutions.

The pattern was usually similar.

The client already had a business. Many of them sold products through marketplaces like Shopee, Tokopedia, TikTok Shop, or other channels. They already had transactions, customers, products, campaigns, and operational problems.

When they came to us, the request was usually not very complicated to understand.

They wanted to increase sales and profit.

That was the main thing.

Sometimes they needed a dashboard. Sometimes they needed Excel automation. Sometimes they needed marketplace reporting. Sometimes they needed a custom system to make their operation easier.

But under all of that, the business question was still the same:

> How can we sell more and make more profit?

So when I started thinking about Omnichannel as a SaaS product, my first instinct was to build for business owners.

It made sense at that time.

## My First Assumption

Because the user I had in mind was business owner or marketplace manager, I designed Omnichannel as an analytics product.

The idea was to help them see the business clearly across many marketplaces.

Instead of opening many dashboards and downloading many reports, they could open one product and see:

- GMV
- revenue
- profit margin
- marketplace performance
- product performance
- SKU performance
- channel comparison
- trend analysis

I also wanted to build more advanced analytics.

For example:

- RFM analysis
- product with biggest marketplace fee
- product with highest and lowest margin
- bundling strategy
- repeat purchase behavior
- channel-level profitability

In my head, this was the right product.

Business owners care about sales and profit. Omnichannel gives them analytics about sales and profit. So the direction felt obvious.

After that, I built the MVP.

## After the MVP

After the MVP was ready, we started trying to bring traffic into the product.

We made the landing page. We prepared the offer. We started running ads.

At that point, I expected the conversation to mostly happen with business owners or marketplace managers.

But apparently, the people who came to us were often not the exact users I imagined.

Many of them were finance users.

That surprised me at first.

Because I thought the main pain was analytics. I thought the strong hook would be something like:

> Understand your marketplace performance in one dashboard.

But after talking with the people who actually responded, I realized that finance had a much sharper pain.

Their problem was not only:

> How is our sales performance?

Their problem was:

> Can we trust this number?

And also:

> Why is the number in marketplace different from the money we actually receive?

That is a different problem.

## The Finance Problem Was More Painful

The more I listened, the more obvious it became.

For business owners, analytics is useful.

But for finance, reconciliation is urgent.

Finance teams need to close the month. They need to explain revenue. They need to match order data with settlement data. They need to check payouts, fees, refunds, cancellations, adjustments, subsidies, tax, and actual profit after COGS.

When the transaction volume is still small, maybe they can still do it manually.

But when the marketplace transactions start getting bigger, the pain grows very fast.

That is why I put this workflow on the landing page:

```txt
2 jam
export data tiap marketplace
+
3 jam
bersihkan dan gabungkan file Excel
+
4 jam
cocokkan order, payout, settlement
+
3 jam
cek cancel, return, dan adjustment
+
4 jam
breakdown komisi, fee, subsidi, pajak
+
2 jam
hitung profit aktual setelah COGS
+
infinite jam
validasi ulang angka...
+
infinite jam
jawab "kenapa angkanya beda?"
=
18+ jam
sakit kepala
```

This is not only a reporting problem.

This is an operational pain.

Every marketplace has their own report format, their own terms, and their own way to explain the money. One marketplace may call it commission. Another marketplace may call it service fee. Another one may split it into admin fee, payment fee, shipping subsidy, voucher, tax, adjustment, or something else.

Then finance needs to translate all of that into one number that the business can trust.

If the number is wrong, the business owner will ask.

If the payout is different, finance needs to explain.

If the profit looks high in the marketplace dashboard but the bank balance tells another story, someone needs to investigate.

That someone is usually finance.

## The Product Direction Changed

After understanding that, the product direction became clearer.

Omnichannel should not only be a dashboard that shows performance.

It should become a system that helps the business trust the money.

That means the core product should focus more on:

- marketplace data sync
- raw data storage
- standardized marketplace terms
- order and settlement matching
- payout validation
- cancel, return, refund, and adjustment checking
- fee breakdown
- subsidy and tax breakdown
- COGS input
- actual profit calculation
- finance-ready reports

Analytics is still important.

Business owners still need to understand GMV, margin, channel performance, product trend, and strategy.

But the foundation must be trust.

If finance cannot trust the data, then the dashboard is just decoration.

If the numbers cannot be explained, the product fails.

That was the real shift.

The first version of Omnichannel was:

> Help business owners understand marketplace performance.

The new version became:

> Help marketplace businesses reconcile, explain, and trust their money.

That sentence is much sharper.

## What This Taught Me About Product-Market Fit

This is the messy part of product-market fit.

Before experiencing it directly, it is easy to think that product-market fit is a clean process.

You define the persona. You define the problem. You build the MVP. You run ads. The right user comes. The product grows.

But in reality, it is not that clean.

Sometimes the persona you imagined is not the persona who feels the pain most deeply.

Sometimes the feature you are proud of is not the feature that makes people reply.

Sometimes the problem you think is strategic is actually less urgent than the boring operational problem behind it.

For Omnichannel, I started from a true insight:

Business owners want to increase sales and profit.

That is still true.

But I missed one important thing.

Business owners care about profit.

Finance teams live inside the messy process required to prove that profit.

That is where the pain was stronger.

## PMF Is a Pull, Not Only a Plan

I do not think this means Omnichannel already has perfect product-market fit.

That would be too early to say.

Product-market fit should be proven by repeated usage, willingness to pay, retention, and a repeatable way to get customers.

But this was a strong product-market fit signal.

The market pulled the product from general analytics into finance reconciliation.

And when the market pulls the product in a clearer direction, I think the correct response is not to defend the original idea.

The correct response is to listen and adapt fast.

That is why we redesigned the app around finance trust.

More reconciliation.

More fee details.

More payout validation.

More actual profit metrics.

Less "look at this beautiful dashboard."

More "this is why your number is different."

## The Lesson

The lesson for me is that product-market fit is not always about finding a bigger idea.

Sometimes it is about finding the more painful workflow inside the idea.

Omnichannel started as an analytics product for business owners.

But the market showed me that finance teams had the sharper pain, because they were the ones dealing with the messy reality every day.

So now I think about Omnichannel differently.

It is not only a product to help businesses see performance.

It is a product to help them trust their marketplace numbers.

That difference sounds small, but it changes almost everything.

It changes the landing page.

It changes the dashboard.

It changes the data model.

It changes the metrics.

It changes the user we talk to.

And that is probably the most important thing I learned from this phase:

> Product-market fit is messy, unpredictable, and uncomfortable. But if the market shows a sharper pain than the one you imagined, follow the pain.
