export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CR_Maker",
  description: "Make reporting great again.",
  navItems: [
    {
      label: "Daily",
      href: "/daily",
    },
    {
      label: "Weekly",
      href: "/weekly",
    },
  ],
  navMenuItems: [
    {
      label: "Daily",
      href: "/Form/Daily",
    },
    {
      label: "Weekly",
      href: "/Form/Weekly",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/corentinsolal123/cr_maker_v2",
    new_cr: "/new-cr",
  },
};
