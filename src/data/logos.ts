type Logo = {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  date: string;
  link?: [string, string][];
  image?: string;
};

const logos: Logo[] = [
  {
    id: "event-horizon-logo",
    title: {
      en: "Event Horizon",
      zh: "事件视界制作组",
    },
    description: {
      en: "Event Horizon is a group of people doing creative things in the game Star Citizen.",
      zh: "事件视界是一个运用游戏《星际公民》制作各种视频和微电影的制作组。",
    },
    image: "images/event-horizon-logo.svg",
    date: "2024-03",
    link: [["EventHorizon.team", "https://eventhorizon.team/"]],
  },
  {
    id: "bar-citizen-2024-shenzhen-logo",
    title: {
      en: "Bar Citizen Shenzhen",
      zh: "Bar Citizen 深圳",
    },
    description: {
      en: "A logo designed for Bar Citizen Shenzhen held in 2024.",
      zh: "为2024年举办的 Bar Citizen 深圳 设计的标志。",
    },
    image: "images/bar-citizen-2024-shenzhen-logo.svg",
    date: "2024-03",
  },
  {
    id: "bar-citizen-2023-shanghai-logo",
    title: {
      en: "Bar Citizen Shanghai",
      zh: "Bar Citizen 上海",
    },
    description: {
      en: "A logo designed for Bar Citizen Shanghai held in 2023.",
      zh: "为2023年举办的 Bar Citizen 上海 设计的标志。",
    },
    image: "images/bar-citizen-2023-shanghai-logo.svg",
    date: "2023-04",
  },
  {
    id: "pico-logo",
    title: {
      en: "Pico+",
      zh: "Pico+",
    },
    description: {
      en: "Pico+ is a third-part app to manage your hanger in Star Citizen, which is no longer maintained.",
      zh: "Pico+ 是一个用于管理《星际公民》机库的第三方应用，现已不再维护。",
    },
    date: "2024-04",
  },
  {
    id: "snx-logo",
    title: {
      en: "Stanton & Explorers",
      zh: "Stanton & Explorers",
    },
    description: {
      en: "Stanton & Explorers is a project to discover amazing views in the game Star Citizen.",
      zh: "Stanton & Explorers 是一个在《星际公民》游戏中探索美丽风景的项目。",
    },
    date: "2022-06",
  },
  {
    id: "sepl-logo",
    title: {
      en: "Star Citizen Elite Pro League",
      zh: "星际公民职业联赛",
    },
    description: {
      en: "Star Citizen Elite Pro League is a community-driven league for the Chinese community of Star Citizen.",
      zh: "星际公民职业联赛是一个由社区驱动的《星际公民》中文社区联赛。",
    },
    image: "images/sepl-logo.svg",
    date: "2023-02"
  },
  {
    id: "gztime-logo-2021",
    title: { en: "GZTime 2021", zh: "GZTime 2021" },
    description: {
      en: "The third version of GZTime's logo. The shape is inherited from the design in 2019, but gets more flattened. The shadow is removed, and the color palette is simplified. Compared to the previous one, the design is more readable in small size and have more freedom in color choice.",
      zh: "为好友 GZTime 设计的标志系列。",
    },
    date: "2021-01",
    link: [["GZTime's Website", "https://blog.gztime.cc/"]],
  },
  {
    id: "gztime-logo-2019",
    title: { en: "GZTime 2019", zh: "GZTime 2019" },
    description: {
      en: `The second version of GZTime's logo, using the design style of Fluent Design.\n
      The hexagonal shape from the previous version is transformed into a rounded-cornered, Mobius-band-shaped ribbon. The center element T is kept but becomes translucent which is like acrylic material. Moreover, the tilt of T is changed so that some portion of T is covered by the ribbon, making the logo looks more three-dimensinal.`,
      zh: "为好友 GZTime 设计的标志系列。",
    },
    date: "2019-06",
    link: [["GZTime's Website", "https://blog.gztime.cc/"]],
  },
  {
    id: "gztime-logo-2017",
    title: { en: "GZTime 2017", zh: "GZTime 2017" },
    description: {
      en: `A logo for my friend GZTime, using the design style of Material Design 2014.\n
      The shadows indicate a sense of depth, while big chunks of color improve the interestingness of the logo. The reshaped letter T represents the initial letter of Time in the name GZTime. The hexagonal shape builds a sense of technology and tidiness. In response to GZTime's preference, the palette was chosen to be blue-toned.`,
      zh: "为好友 GZTime 设计的标志系列。",
    },
    date: "2017-07",
    link: [["GZTime's Website", "https://blog.gztime.cc/"]],
  },
  {
    id: "bmap-icon",
    title: {
      en: "Bmap",
      zh: "Bmap",
    },
    description: {
      en: "An app icon designed for a map application named Bmap.",
      zh: "为地图应用 Bmap 设计的应用图标。",
    },
    date: "2019-07",
  },
  {
    id: "eaxt-logo",
    title: { en: "Eaxt", zh: "食验 标志" },
    description: {
      en: "The app icon/logo is designed for a student project in my high school. The project is to redesign the meal ordering platform of the school refectory. Therefore, the logo is designed in the skeleton of the Chinese character “食” (Eat), with the center component substituted with the logo of my high school – SZSY. The color palette of the logo is also inherited from the palette of the school.",
      zh: "为高中时期的一个学生项目设计的应用图标兼标志。此项目旨在重新设计学校食堂订餐平台，因此本标志的设计以汉字“食”为骨架，替换中间的部分为高中学校的标志 - SZSY。而色彩则取自高中学校的主题色。",
    },
    date: "2017-01",
  },
  {
    id: "ethan-logo",
    title: { en: "Ethan", zh: "Ethan" },
    description: {
      en: "A logo designed for my friend Ethan.",
      zh: "为好友 Ethan 设计的标志。",
    },
    date: "2018-09",
    link: [["Ethan's Website", "https://ethans.me/"]],
  },
  {
    id: "fragmem-icon",
    title: { en: "FragMem", zh: "碎记" },
    description: {
      en: "An app icon designed for a learning assistance application named FragMem.",
      zh: "为学习辅助应用 碎记 设计的应用图标。",
    },
    date: "2018-09",
  },
  {
    id: "guzhi-studio-logo",
    title: { en: "GuZhi Studio", zh: "崮郅工作室" },
    description: {
      en: "A logo designed for my friend GZTime, used for his studio named GuZhi（崮郅）.",
      zh: "为好友 GZTime 的工作室“崮郅”设计的标志。",
    },
    date: "2017-02",
  },
  {
    id: "mere-news-icon",
    title: { en: "Mere News", zh: "Mere 新闻" },
    description: {
      en: "An app icon designed for a newsletter application named Mere News.",
      zh: "为新闻应用 Mere新闻 设计的应用图标。",
    },
    date: "2019-07",
  },
  {
    id: "will-and-alex-drones-logo",
    title: { en: "Will&Alex Drones", zh: "Will&Alex Drones" },
    description: {
      en: "A logo designed for my friend Will Wu, used for an Instagram account publishing media related to drone designing.",
      zh: "为好友 Will Wu 设计的Instagram账号标志。",
    },
    date: "2018-03",
  },
  {
    id: "genres-logo",
    title: { en: "Genres Website", zh: "Genres 网站" },
    description: {
      en: "A logo designed for Genres Website - a student startup project aiming to build a web novel community for both writer and reader.",
      zh: "为 Genres 网站设计的标志。Genres 是一个学生创业项目，致力于打造服务于作者与读者的在线网络小说社区。",
    },
    date: "2021-12",
  },
];

export default logos;
