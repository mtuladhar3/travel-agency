export const navItems = [
  { name: "Home", href: "/", type: "none" },
  {
    name: "Destination",
    href: "/destinations",
    type: "mega",
    items: [
      { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=80&q=80" },
      { name: "Los Angeles", image: "https://images.unsplash.com/photo-1542736667-069246bddd6e?w=80&q=80" },
      { name: "Sapporo", image: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=80&q=80" },
      { name: "Canada", image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=80&q=80" },
      { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=80&q=80" },
      { name: "Switzerland", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=80&q=80" },
      { name: "Greece", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=80&q=80" },
      { name: "Narita", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=80&q=80" },
      { name: "Thailand", image: "https://images.unsplash.com/photo-1528181304800-2f190854850a?w=80&q=80" },
      { name: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=80&q=80" },
      { name: "Osaka", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=80&q=80" },
      { name: "Turkey", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=80&q=80" }
    ]
  },
  { name: "Tour Listing", href: "/tours", type: "none" },
  {
    name: "Blog",
    href: "/blog",
    type: "dropdown",
    items: [
      { name: "Blog", href: "/blog" },
      { name: "Blog Grid", href: "/blog/grid" },
      { name: "Blog List", href: "/blog/list" },
      { name: "Blog Details", href: "/blog/details" },
      { name: "Blog Details 2", href: "/blog/details-2" }
    ]
  },
  { name: "Pages", href: "/pages", type: "none" }
];