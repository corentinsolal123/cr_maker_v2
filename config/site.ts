export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "CR_Maker",
    description: "Make reporting great again.",
    navItems: [
        {
            label: "Daily",
            href: "/Form/Daily"
        },
        {
            label: "Weekly",
            href: "/Form/Weekly"
        }
    ],
    navMenuItems: [
        {
            label: "Daily",
            href: "/Form/Daily"
        },
        {
            label: "Weekly",
            href: "/Form/Weekly"
        }
    ],
    links: {
        github: "https://github.com/corentinsolal123/cr_maker_v2",
        new_cr: "/"
    }
};
