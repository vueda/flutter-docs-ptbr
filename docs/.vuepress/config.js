module.exports = {
  title: "Documentação do Flutter em pt-BR",
  base: "/flutter-docs-ptbr/",
  dest: "./dist",
  evergreen: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "link",
      { rel: "stylesheet", href: "/fontello/css/flutter-ptbr-docs-icons.css" },
    ],
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 3,
    logo: "/flutter-logo.png",
    sidebar: [
      {
        title: "Introdução",
        path: "/introducao/",
        children: [
          {
            title: "Instalação",
            path: "/introducao/",
            sidebarDepth: 0,
            children: [
              ["/introducao/instalacao/windows/", "Instalação no Windows"],
              ["/introducao/instalacao/macos/", "Instalação no macOS"],
              ["/introducao/instalacao/linux/", "Instalação no Linux"],
            ],
          },
        ],
      },
    ],
    nav: [
      { text: "Início", link: "/" },
      { text: "Créditos", link: "/creditos/" },
      {
        text: "Repositório",
        link: "https://github.com/vueda/flutter-docs-ptbr",
      },
    ],
  },
};
