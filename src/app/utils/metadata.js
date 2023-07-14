export const subPages = () => {
  const data = [
    { name: "About us", link: "about" },
    { name: "Stocklists", link: "stocklist" },
    { name: "Journals", link: "journals" },
    { name: "FAQ", link: "faq" },
  ];

  return data;
};

export const Socials = () => {
  const data = [
    { link: "https://facebook.com" },
    { link: "https://twitter.com" },
    { link: "https://instagram.com" },
  ];
  return data;
};

export const Pages = () => {
  const data = [
    { name: "new", link: "new", pages: [] },
    {
      name: "clothing",
      link: "",
      pages: [
        {
          data: [
            {
              data: [
                { title: "shop all", link: "shop-all" },
                { title: "new arrivals", link: "new-arrivals" },
                { title: "best sellers", link: "best-sellers" },
              ],
            },
            {
              data: [
                { title: "featured" },
                { title: "the dress edit", link: "the-dress-edit" },
                { title: "outwaer", link: "outwear" },
                { title: "conscious choice", link: "conscious-choice" },
                { title: "winter sale", link: "winter-sale" },
              ],
            },
          ],
        },

        {
          data: [
            { title: "dresses", link: "dresses" },
            { title: "tops", link: "tops" },
            { title: "bottoms", link: "bottoms" },
            { title: "skirts", link: "skirts" },
            { title: "knitwear", link: "knitwear" },
            { title: "rompers", link: "rompers" },
            { title: "outerwear", link: "outerwear" },
          ],
        },
      ],
      image: "/assets/spring.webp",
    },
    {
      name: "dresses",
      link: "",
      pages: [
        {
          data: [
            { title: "all dresses", link: "all-dresses" },
            { title: "bodycon", link: "bodycon" },
            { title: "blazer dresses", link: "blazer-dresses" },
            { title: "midis", link: "midis" },
            { title: "minis", link: "minis" },
            { title: "skirts", link: "skirts" },
          ],
        },
      ],
      image: "/assets/bodycon.webp",
    },
    { name: "tops", link: "new", pages: [] },
    { name: "bottoms", link: "new", pages: [] },
    { name: "sales", link: "new", pages: [] },
    { name: "lookbook", link: "new", pages: [] },
  ];

  return data;
};

export const Intro = () => {
  const data = {
    time: "april 1st - may 30th",
    title: "spring sales",
    discount: "Save up to 50%",
    singleshop: { link: "shop-item", title: "shop the sale" },
    allshop: { link: "shop all", title: "shop all" },
  };

  return data;
};

// ===================footer------------------------------------
export const Footer = () => {
  const data = {
    about: {
      image: "/assets/logo-white.png",
      desc: "All product imagery and descriptions belong to and have been graciously provided by BOSKEMPER and are displayed for demonstration purposes only. You can buy their products on their online store.",
    },
    subpages: subPages(),
    pages: Pages(),
    social: Socials(),
  };

  return data;
};
