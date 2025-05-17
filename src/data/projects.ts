export type Project = {
  id: string;
  title: Record<string, string>;
  description?: Record<string, string>;
  startDate: string;
  endDate: string;
  thumbnail?: string;
  links?: [string, string][];
  role: Record<string, string>;
  status: Record<string, string>;
  tags: string[];
};

export const projects: Project[] = [
  // Minecraft
  {
    id: "iconic-enchantments",
    title: {
      en: "Iconic Enchantments",
      zh: "图标附魔书",
    },
    description: {
      en: "3D enchanted books with unified icon design! 1.21.5+ WITHOUT CIT or Optifine!",
      zh: "用图标区分附魔！原版可用！附魔书还有3D模型！",
    },
    startDate: "2025-03",
    endDate: "2025-05",
    links: [
      ["Modrinth", "https://modrinth.com/resourcepack/iconic-enchantments-3d"],
      ["红石中继站", "https://www.mczwlt.net/resource/8sw1n42m"],
      ["MineBBS", "https://www.minebbs.com/resources/d-cit.10994/"],
    ],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Release 2.0",
      zh: "正式版 2.0",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "diagonal-perfect-rails",
    title: {
      en: "Diagonal Perfect Rails",
      zh: "完美对角线铁轨",
    },
    description: {
      en: "65k downloads! Curved rails now go 45 degrees straight! Minecarts now run smoothly on continuous curved rails!",
      zh: "6.5万下载！将弯道铁轨掰成45度直线！矿车可以在连续弯道上流畅运行啦！",
    },
    startDate: "2024-02",
    endDate: "2025-03",
    links: [
      ["Modrinth", "https://modrinth.com/resourcepack/diagonal-perfect-rails-3d"],
      ["MineBBS", "https://www.minebbs.com/resources/3d.7484/"],
    ],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Release 2.1",
      zh: "正式版 2.1",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "immersive-redstone-display",
    title: {
      en: "Immersive Redstone Display",
      zh: "沉浸红石显示",
    },
    description: {
      en: "Redstone wires now show their power with segment displays!",
      zh: "一款体素对齐、段码字风格的红石粉强度显示资源包。0-15的信号强度对应16进制的0-F。",
    },
    startDate: "2024-02",
    endDate: "2024-02",
    links: [
      ["Modrinth", "https://modrinth.com/resourcepack/immersive-redstone-display"],
      ["MineBBS", "https://www.minebbs.com/resources/7440/"],
    ],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Release 1.0",
      zh: "正式版 1.0",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "accurate-clock",
    title: {
      en: "Accurate Clock",
      zh: "精准时钟",
    },
    description: {
      en: "Accurate clocks can tell you time in minute's level of accuracy!",
      zh: "为您在Minecraft中提供分钟级精准的报时！",
    },
    startDate: "2024-03",
    endDate: "2024-03",
    links: [
      ["Modrinth", "https://modrinth.com/resourcepack/accurate-clock"],
      ["MineBBS", "https://www.minebbs.com/resources/7564/"],
    ],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Release 1.1",
      zh: "正式版 1.1",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "diagonal-perfect-copper-grates",
    title: {
      en: "Diagonal Perfect Copper Grates",
      zh: "完美对角线铜格栅",
    },
    description: {
      en: "Copper Grates with 45-degree grids. Connected textures supported!",
      zh: "拥有45°网格的铜格栅，支持 CTM 连接纹理！",
    },
    startDate: "2025-03",
    endDate: "2025-03",
    links: [["Modrinth", "https://modrinth.com/resourcepack/diagonal-perfect-copper-grates"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Release 1.1",
      zh: "正式版 1.1",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "waxed-and-infested-outlines",
    title: {
      en: "Waxed & Infested Outlines",
      zh: "带边框的涂蜡与虫蚀方块",
    },
    description: {
      en: "Highlight waxed and infested blocks with inverted hull outlines! Resourcepack compatible!",
      zh: "用负法线模型给涂蜡方块和虫蚀方块加上边框！兼容资源包！",
    },
    startDate: "2025-05",
    endDate: "2025-05",
    thumbnail: "/images/waxed-and-infested-outlines.jpeg",
    links: [
      ["Modrinth", "https://modrinth.com/resourcepack/waxed-and-infested-outlines"],
      ["红石中继站", "https://www.mczwlt.net/resource/ea8vrzij"],
    ],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Release 1.0",
      zh: "正式版 1.0",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "minecraft-alter",
    title: {
      en: "Minecraft Alter",
      zh: "Minecraft 改",
    },
    description: {
      en: "(Working title.) An OpenGL project to mimic the Minecraft. Work in progress.",
      zh: "（暂用名）一个模仿Minecraft的OpenGL项目，开发中。",
    },
    startDate: "2022-12",
    endDate: "2023-05",
    links: [
      ["github", "https://github.com/GrakePch/OctaCubic"],
      ["YouTube Demo 1", "https://youtu.be/scn54DyVGs8"],
      ["YouTube Demo 2", "https://youtu.be/QK_Q4ngvDAE"],
    ],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Paused",
      zh: "已暂停",
    },
    tags: ["minecraft"],
  },
  {
    id: "bpext-ctm",
    title: {
      en: "BlockPixel Extend: CTM",
      zh: "方块概念：CTM连接纹理补充包",
    },
    description: {
      en: `This pack enables some connected texture features for the resourcepack BlockPixel. Connections between the same type of glass become smooth. Grass, sand, and gravel now have pixelated gradients between them.`,
      zh: `为方块概念资源包开发的CTM贴图补充包。为玻璃和染色玻璃制作了无缝衔接。为草地、沙子以及沙砾等制作了更加像素化的过渡。`,
    },
    startDate: "2019-11",
    endDate: "2024-01",
    links: [["Modrinth", "https://modrinth.com/resourcepack/blockpixel-extend-ctm"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Alpha 0.8",
      zh: "Alpha 0.8",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "bpext-pbr",
    title: {
      en: "BlockPixel Extend: PBR",
      zh: "方块概念：PBR补充包",
    },
    description: {
      en: `This pack enables PBR features for the resourcepack BlockPixel. This pack is tuned with SEUS PTGI E12 shaderpack.`,
      zh: `为方块概念资源包开发的PBR贴图补充包。加载SEUS PTGI E12光影包获得最佳体验。`,
    },
    startDate: "2020-02",
    endDate: "2020-06",
    links: [["Modrinth", "https://modrinth.com/resourcepack/blockpixel-extend-pbr"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Archived",
      zh: "已归档",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "bpext-jei",
    title: {
      en: "BlockPixel Extend: JEI Mod",
      zh: "方块概念：JEI模组包",
    },
    description: {
      en: `JEI now in the style of BlockPixel. Support Java edition 1.12.2.`,
      zh: `为JEI适配了方块概念风格的GUI。适配版本：Java 1.12.2。`,
    },
    startDate: "2019-11",
    endDate: "2019-11",
    links: [["download", "https://grakep.ch/project-files/bpext/BlockPixel_DLC_JEI_1-12-2.zip"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Archived",
      zh: "已归档",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "9squares",
    title: {
      en: "9-Squares Texture",
      zh: "九宫格材质",
    },
    description: {
      en: "Original resourcepack series.",
      zh: "原创的资源包系列。",
    },
    startDate: "2015-05",
    endDate: "2019-07",
    links: [["Planet Minecraft", "https://www.planetminecraft.com/texture-pack/9-squares-texture-aka-3x3-texture/"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Archived",
      zh: "已归档",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "akn-tnt-piano",
    title: {
      en: "Arknights: TNT Piano",
      zh: "明日方舟：TNT炸毁钢琴",
    },
    description: {
      en: "An Arknights meme about an expensive piano got exploded, reperformed in Minecraft.",
      zh: "在Minecraft中重新演绎明日方舟哏：180万的钢琴炸了。",
    },
    startDate: "2019-09",
    endDate: "2019-09",
    links: [["bilibili", "https://www.bilibili.com/video/BV1tE411X7c9"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft"],
  },
  {
    id: "akn-originium",
    title: {
      en: "Arknights Originium Model",
      zh: "明日方舟源石模型",
    },
    description: {
      en: "A resourcepack that includes a block model that mimic Originium crystal from the game Arknights.",
      zh: "包含着一个模仿明日方舟源石晶体的方块模型的资源包。",
    },
    startDate: "2019-09",
    endDate: "2019-09",
    links: [["bilibili", "https://www.bilibili.com/video/BV1U4411y7Xs"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "akn-orundum",
    title: {
      en: "Arknights Orundum Model",
      zh: "明日方舟合成玉模型",
    },
    description: {
      en: "A resourcepack that includes a block model that mimic orundum from the game Arknights.",
      zh: "包含着一个模仿明日方舟合成玉的方块模型的资源包。",
    },
    startDate: "2019-08",
    endDate: "2019-08",
    links: [["bilibili", "https://www.bilibili.com/video/BV1t441197YB"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft", "resourcepack"],
  },
  {
    id: "ftb2-diamond",
    title: {
      en: "Find the Button 2: the Diamond Button",
      zh: "寻找按钮2：钻石按钮",
    },
    description: {
      en: "The second of the puzzle map series - Find the Button. The goal of the levels is to find the button made up of diamond.",
      zh: "寻找按钮地图系列之二。关卡目标为寻找钻石制的按钮。",
    },
    startDate: "2017-01",
    endDate: "2017-01",
    links: [["Planet Minecraft", "https://www.planetminecraft.com/project/find-the-button-diamond-button/"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft"],
  },
  {
    id: "ftb-wooden-stone",
    title: {
      en: "Find the Button: the Wooden-Stone Button",
      zh: "寻找按钮：半木半石制按钮",
    },
    description: {
      en: "The first of the puzzle map series - Find the Button. The goal of the levels is to find the button that is half wooden and half stone.",
      zh: "寻找按钮地图系列之一。关卡目标为寻找半木半石制的按钮。",
    },
    startDate: "2016-08",
    endDate: "2016-08",
    links: [["Planet Minecraft", "https://www.planetminecraft.com/project/find-the-button-wooden-stone-button/"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft"],
  },
  {
    id: "piston-gate-2x0625",
    title: {
      en: "2x0.625 Piston Door",
      zh: "2x0.625 活塞门",
    },
    description: {
      en: "A redstone system designed for 2x0.625 piston door.",
      zh: "红石系统设计之 2x0.625 活塞门。",
    },
    startDate: "2015-08",
    endDate: "2015-08",
    thumbnail: "/images/piston-gate-2x0625.jpg",
    links: [["bilibili", "https://www.bilibili.com/video/BV1Ws411m7BH"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft"],
  },
  {
    id: "piston-gate-2x075",
    title: {
      en: "2x0.75 Piston Door",
      zh: "2x0.75 活塞门",
    },
    description: {
      en: "A redstone system designed for 2x0.75 piston door.",
      zh: "红石系统设计之 2x0.75 活塞门。",
    },
    startDate: "2014-09",
    endDate: "2014-09",
    thumbnail: "/images/piston-gate-2x075.jpg",
    links: [["bilibili", "https://www.bilibili.com/video/BV15x411K7RE"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft"],
  },
  {
    id: "slime-tree-farm-2",
    title: {
      en: "Sticky TreeFarm 2.0",
      zh: "粘液块树场2.0",
    },
    description: {
      en: "The second redstone system design of a semi-auto wood farm using slime block.",
      zh: "使用粘液块的半自动木头农场的第二种红石系统设计。",
    },
    startDate: "2015-01",
    endDate: "2015-01",
    thumbnail: "/images/slime-tree-farm-2.jpg",
    links: [["bilibili", "https://www.bilibili.com/video/BV1Sx411w7tV"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft"],
  },
  {
    id: "slime-tree-farm",
    title: {
      en: "Sticky TreeFarm 1.0",
      zh: "粘液块树场1.0",
    },
    description: {
      en: "A redstone system design of a semi-auto wood farm using slime block.",
      zh: "使用粘液块的半自动木头农场的红石系统设计。",
    },
    startDate: "2014-12",
    endDate: "2014-12",
    thumbnail: "/images/slime-tree-farm.jpg",
    links: [["bilibili", "https://www.bilibili.com/video/BV1jx411N7jV"]],
    role: { en: "Creator", zh: "创建者" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["minecraft"],
  },
  // Star Citizen
  {
    id: "sc-fancy-keybinding-visualizer",
    title: { en: "Fancy Keybinding Visualizer", zh: "星际公民键位可视化（新版）" },
    description: {
      en: "A web app to visualize and edit keybindings for the game Star Citizen. A remake of an old project.",
      zh: "为游戏《星际公民》开发的键位绑定可视化与编辑的网页工具。是一个老项目的重制版。",
    },
    startDate: "2024-12",
    endDate: "2025-04",
    links: [["website", "https://keys.grakeinterplanetary.com/"]],
    role: { en: "Designer, Developer", zh: "设计、开发" },
    status: {
      en: "In Development",
      zh: "开发中",
    },
    tags: ["star_citizen", "web_dev"],
  },
  {
    id: "sc-item-finder",
    title: { en: "Star Citizen Item Finder", zh: "星际寻物" },
    description: {
      en: "A web app to help Star Citizen players find where & how much to buy items. (Chinese only)",
      zh: "为星际公民提供查询物品购买地点与价格的服务的网页应用。",
    },
    startDate: "2024-11",
    endDate: "2025-03",
    links: [
      ["website", "https://finder.grakeinterplanetary.com/"],
      ["github", "https://github.com/GrakePch/FSD-item-finder"],
    ],
    role: { en: "Designer, Front-end Developer", zh: "设计、前端开发" },
    status: {
      en: "Actively Maintained",
      zh: "积极维护中",
    },
    tags: ["star_citizen", "web_dev"],
  },
  {
    id: "sc-star-map",
    title: { en: "Eyes on Star Citizen", zh: "星际公民之眼" },
    description: {
      en: "A web app showing the real-time positions of the celestial bodies and the locations of the game Star Citizen. Also displaying the local times and other information.",
      zh: "展示《星际公民》游戏内天体和地点所在实时位置的网页应用。也展示了当地时间和其他信息。",
    },
    startDate: "2024-09",
    endDate: "2024-12",
    links: [
      ["website", "https://maps.grakeinterplanetary.com/"],
      ["github", "https://github.com/GrakePch/FSD-star-map"],
    ],
    role: { en: "Designer, Developer", zh: "设计、开发" },
    status: {
      en: "Paused",
      zh: "暂停维护",
    },
    tags: ["star_citizen", "web_dev"],
  },
  {
    id: "sc-fancy-ship-info",
    title: { en: "Fancy Ship Info", zh: "星际公民飞船信息" },
    description: {
      en: "A web app displaying the information of the vehicles and the personal weapons in the game Star Citizen.",
      zh: "展示《星际公民》游戏内飞船和个人武器的信息的网页应用。",
    },
    startDate: "2024-03",
    endDate: "2024-12",
    links: [
      ["website", "https://ships.grakeinterplanetary.com/"],
      ["github", "https://github.com/GrakePch/Fancy-SC-Ship-Info"],
    ],
    role: { en: "Designer, Developer", zh: "设计、开发" },
    status: {
      en: "Paused. An alternative project is planned.",
      zh: "暂停维护。正在计划替代项目。",
    },
    tags: ["star_citizen", "web_dev"],
  },
  {
    id: "sc-keybinding-visualizer",
    title: { en: "Star Citizen Keybinding Visualizer", zh: "星际公民键位可视化" },
    description: {
      en: "An online keybinding visualizer for Star Citizen.",
      zh: "为游戏《星际公民》开发的键位绑定可视化与编辑的网页工具。",
    },
    startDate: "2023-02",
    endDate: "2023-06",
    thumbnail: "/images/sc-keybinding-visualizer.png",
    links: [["github", "https://github.com/GrakePch/sc-action-maps"]],
    role: { en: "Designer, Developer", zh: "设计、开发" },
    status: {
      en: "Archived. An alternative project is being developed.",
      zh: "已归档，正在开发替代项目",
    },
    tags: ["star_citizen", "web_dev"],
  },
  {
    id: "carrack-exodus",
    title: {
      en: "Carrack: Exodus",
      zh: "克拉克：离家",
    },
    description: {
      en: "A short film shot in the game Star Citizen. A Carrack filled with cargo departures from Lorville as usual. However, this trip may not be as normal as before for the only three crew members on the ship...",
      zh: "一部在《星际公民》游戏内拍摄的微电影。一艘克拉克满载着货物从罗威尔起飞，一切似乎如常，但此次旅程对于飞船上仅有的三名乘员来说有些不同……",
    },
    startDate: "2020-03",
    endDate: "2020-04",
    thumbnail: "/images/carrack-exodus.png",
    role: { en: "Writer, Cast", zh: "编剧、演员" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["star_citizen"],
  },
  {
    id: "project-eclipse",
    title: {
      en: "Operation SPF 9000+",
      zh: "日蚀计划",
    },
    description: {
      en: 'A documentary shot in the game Star Citizen. On June 4th, 2952, Crane Expedition set out to the end of Hurston\'s Umbra zone and witnessed a spectacular annular eclipse. The team of 12, aboard a single Carrack vessel, "Anya", recorded their experiences and their journey.',
      zh: "一部在《星际公民》游戏内拍摄的纪录片。2952年6月4日, 科湾事业所的十二名成员，在经历了一系列挑战之后，到达了赫斯顿本影焦点观察到了日环食，并记录下来了完整的过程。",
    },
    startDate: "2022-06",
    endDate: "2022-08",
    thumbnail: "/images/project-eclipse.webp",
    links: [
      ["youtube", "https://youtu.be/ObES2rH-0Ws"],
      ["bilibili", "https://www.bilibili.com/video/BV11F411w7TG"],
    ],
    role: { en: "Logo Designer, Crew Member", zh: "标志设计、队员" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["star_citizen"],
  },
  // Twisty Puzzle Design
  {
    id: "pengtagon331",
    title: {
      en: "Pengtagon331",
      zh: "五边形331",
    },
    description: {
      en: "A mod of 3x3x1 Super Floppy Cube.",
      zh: "一个3x3x1魔方的外形改造。",
    },
    startDate: "2017-04",
    endDate: "2017-04",
    thumbnail: "/images/pentagon331.JPG",
    links: [
      ["bilibili", "https://www.bilibili.com/video/BV1jx411Q7nB"],
      ["youtube", "https://www.youtube.com/watch?v=oisth0web_s"],
    ],
    role: { en: "Creator", zh: "原作" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["twisty_puzzle_design"],
  },
  {
    id: "bandaged444",
    title: {
      en: "Bandaged444",
      zh: "四阶捆绑两轴",
    },
    description: {
      en: "A bandaged mod of 4x4x4 cube using cardboard.",
      zh: "一个四阶魔方的捆绑改造，用纸板制作。",
    },
    startDate: "2013-11",
    endDate: "2013-11",
    thumbnail: "/images/bandaged444.JPG",
    links: [],
    role: { en: "Creator", zh: "原作" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["twisty_puzzle_design"],
  },
  {
    id: "bandaged333",
    title: {
      en: "Bandaged333",
      zh: "三阶捆绑两轴",
    },
    description: {
      en: "A bandaged mod of 3x3x3 cube using cardboard.",
      zh: "一个三阶魔方的捆绑改造，用纸板制作。",
    },
    startDate: "2012-08",
    endDate: "2012-08",
    thumbnail: "/images/bandaged333.JPG",
    links: [],
    role: { en: "Creator", zh: "原作" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["twisty_puzzle_design"],
  },
  // Midi Works
  {
    id: "bs-rise",
    title: {
      en: "BlackScore: Rise [Shield Hero OP1]",
      zh: "黑乐谱：Rise [盾之勇者成名录OP1]",
    },
    startDate: "2020-08",
    endDate: "2020-08",
    links: [["bilibili", "https://www.bilibili.com/video/BV1bv41117W6"]],
    role: { en: "Remixer", zh: "改编" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["midi_works"],
  },
  {
    id: "wave-particle",
    title: {
      en: "Improvisation: Wave-particle",
      zh: "即兴作：波粒二象性",
    },
    startDate: "2017-05",
    endDate: "2017-05",
    thumbnail: "/images/wave-particle.jpg",
    links: [["bilibili", "https://www.bilibili.com/video/BV1wx411e7ig"]],
    role: { en: "Composer", zh: "编曲" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["midi_works"],
  },
  {
    id: "permutation",
    title: {
      en: "Improvisation: Permutation",
      zh: "即兴作：排列组合",
    },
    startDate: "2017-03",
    endDate: "2017-03",
    thumbnail: "/images/permutation.jpg",
    links: [["bilibili", "https://www.bilibili.com/video/BV1qx411C7Cm"]],
    role: { en: "Composer", zh: "编曲" },
    status: {
      en: "Completed",
      zh: "已完成",
    },
    tags: ["midi_works"],
  },
];
