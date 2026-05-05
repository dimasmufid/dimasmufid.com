import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Dimas Mufid",
  EMAIL: "dimasmoveit@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  BLOG_EXCLUDED_TAG: "reflection",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Dimas Mufid, a data engineer who got tired of watching business teams struggle with bad tools, so I'm building the AI business analyst I wish existed.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "Learn more about Dimas Mufid, a data engineer passionate about building AI-powered solutions.",
};

export const SOCIALS: Socials = [
  {
    NAME: "x",
    HREF: "https://x.com/dimasmufid",
  },
  {
    NAME: "github",
    HREF: "https://github.com/dimasmufid",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/dimasmufid",
  },
];
