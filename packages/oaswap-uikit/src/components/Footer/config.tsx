import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.oaswap.finance/links",
      },
      {
        label: "Blog",
        href: "https://oaswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.oaswap.finance/links",
      },
      {
        label: "OAS",
        href: "https://docs.oaswap.finance/tokenomics/the-oas-token",
      },
      // {
      //   label: "—",
      // },
      // {
      //   label: "Online Store",
      //   href: "https://oaswap.creator-spring.com/",
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.oaswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.oaswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.oaswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/oaswap",
      },
      {
        label: "Documentation",
        href: "https://docs.oaswap.finance",
      },
      // {
      //   label: "Bug Bounty",
      //   href: "https://app.gitbook.com/@oaswap-1/s/oaswap/code/bug-bounty",
      // },
      {
        label: "Audits",
        href: "https://docs.oaswap.finance/help/faq#is-oaswap-safe-has-oaswap-been-audited",
      },
      // {
      //   label: "Careers",
      //   href: "https://docs.oaswap.finance/hiring/become-a-chef",
      // },
    ],
  },
];

export const socials: FooterLinkType[] = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/oaswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/oaswap",
    // items: [
    //   {
    //     label: "English",
    //     href: "https://t.me/oaswap",
    //   },
    //   {
    //     label: "Bahasa Indonesia",
    //     href: "https://t.me/oaswapIndonesia",
    //   },
    //   {
    //     label: "中文",
    //     href: "https://t.me/oaswap_CN",
    //   },
    //   {
    //     label: "Tiếng Việt",
    //     href: "https://t.me/oaswapVN",
    //   },
    //   {
    //     label: "Italiano",
    //     href: "https://t.me/oaswap_ita",
    //   },
    //   {
    //     label: "русский",
    //     href: "https://t.me/oaswap_ru",
    //   },
    //   {
    //     label: "Türkiye",
    //     href: "https://t.me/oaswapturkiye",
    //   },
    //   {
    //     label: "Português",
    //     href: "https://t.me/oaswapPortuguese",
    //   },
    //   {
    //     label: "Español",
    //     href: "https://t.me/oaswapEs",
    //   },
    //   {
    //     label: "日本語",
    //     href: "https://t.me/oaswapjp",
    //   },
    //   {
    //     label: "Français",
    //     href: "https://t.me/oaswapfr",
    //   },
    //   {
    //     label: "Datch",
    //     href: "https://t.me/oaswap_DE",
    //   },
    //   {
    //     label: "Filipino",
    //     href: "https://t.me/oaswap_Ph",
    //   },
    //   {
    //     label: "ქართული ენა",
    //     href: "https://t.me/oaswapGeorgia",
    //   },
    //   {
    //     label: "Announcements",
    //     href: "https://t.me/oaswapAnn",
    //   },
    // ],
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://reddit.com/r/oaswap",
  // },
  // {
  //   label: "Instagram",
  //   icon: "Instagram",
  //   href: "https://instagram.com/oaswap_official",
  // },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/oaswap/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/oaswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
