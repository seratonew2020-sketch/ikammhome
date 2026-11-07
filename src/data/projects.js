export const categories = [
  {
    id: 'all',
    icon: 'fa-solid fa-border-all',
    names: {
      th: 'ทุกหมวดหมู่งานออกแบบ',
      en: 'All Interiors',
      zh: '全部室内设计'
    }
  },
  {
    id: 'cafe',
    icon: 'fa-solid fa-mug-hot',
    names: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    }
  },
  {
    id: 'shop',
    icon: 'fa-solid fa-bag-shopping',
    names: {
      th: 'ออกแบบร้านค้า (Shop)',
      en: 'Shop Interior Design',
      zh: '精品店零售空间'
    }
  },
  {
    id: 'bedroom',
    icon: 'fa-solid fa-bed',
    names: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    }
  },
  {
    id: 'counter',
    icon: 'fa-solid fa-concierge-bell',
    names: {
      th: 'ออกแบบเคาน์เตอร์ (Counter)',
      en: 'Counter Interior Design',
      zh: '接待吧台定制设计'
    }
  }
]

export const initialProjects = [
  // ===================== BEDROOM INTERIOR DESIGN (จากโฟลเดอร์ รูป Badroom) =====================
  {
    id: 'bedroom-01',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/0771f4f2cd2bddd3c3804f27e283a1f1.jpg',
    titles: {
      th: 'Signature Bespoke Master Suite 01',
      en: 'Signature Bespoke Master Suite 01',
      zh: '定制级奢华主卧套房 01'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'ห้องนอนมาสเตอร์หรูหราเฉพาะตัว โดดเด่นด้วยหัวเตียงบุนวมสั่งผลิตพิเศษ ผสานไฟหลืบซ่อนแสงนวลตา และระบบตู้เสื้อผ้า Walk-in Closet แบบเปิดสไตล์โมเดิร์น',
      en: 'Signature custom master bedroom featuring bespoke upholstered headboard wall, architectural ambient lighting, and integrated luxury wardrobe storage.',
      zh: '定制级奢华主卧空间，配以整面高定软包背景墙、建筑级漫射隐藏灯带以及一体化高级衣帽系统。'
    },
    specs: {
      highlights: {
        th: 'ผนังหัวเตียงบิลต์อินบุนวม & แสงไฟหลืบอบอุ่น',
        en: 'Bespoke Upholstered Wall & Cove Lighting',
        zh: '定制高定软包背景墙与舒压暗槽光'
      },
      materials: {
        th: 'ผ้าบุนวมกันลามไฟ, ไม้ปิดผิววีเนียร์, คิ้วทองเหลือง',
        en: 'Fire-rated Fabric, Natural Wood Veneer, Brass',
        zh: '阻燃精纺面料、天然木饰面板、拉丝黄铜收条'
      },
      lighting: {
        th: 'ไฟซ่อนหลืบ 3000K Warm Glow & โคมดาวน์ไลท์ CRI>95',
        en: '3000K Ambient Cove Glow & High-CRI Spotlights',
        zh: '3000K 暖光漫射天花槽灯与高显色射灯'
      },
      areas: {
        th: '42 ตร.ม.',
        en: '42 sq.m',
        zh: '42 平方米'
      }
    },
    colorPalette: [
      { name: 'Warm Taupe', hex: '#78716C' },
      { name: 'Soft Cream', hex: '#FEF3C7' },
      { name: 'IKAMM Gold', hex: '#C5A059' }
    ]
  },
  {
    id: 'bedroom-02',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/0b1a23ba423381fe00960aa17f916771.jpg',
    titles: {
      th: 'Architectural Geometric Glow Suite 02',
      en: 'Architectural Geometric Glow Suite 02',
      zh: '几何建筑光影主卧套房 02'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'การออกแบบเส้นสายเรขาคณิตผสานรางไฟ LED ซ่อนขอบผนังและเตียงลอย สร้างมิติแสงเงาที่ล้ำสมัยและโปร่งสบาย เหมาะสำหรับคอนโดมิเนียมและเพนต์เฮาส์ระดับไฮเอนด์',
      en: 'Futuristic geometric spatial design with integrated LED profile channels, floating platform bed, and clean architectural rhythm for high-end residences.',
      zh: '结合内嵌几何线性灯槽与悬浮地台床的现代建筑感卧室设计，为高端大宅与顶层公寓带来通透的光影韵律。'
    },
    specs: {
      highlights: {
        th: 'เตียงแพลตฟอร์มลอยตัวพร้อมไฟ Under-Glow',
        en: 'Floating Platform Bed with Under-Glow',
        zh: '底部悬浮光影定制地台床'
      },
      materials: {
        th: 'แผงไมโครซีเมนต์, อะคูสติกวอลล์, กระจกเงาเทาดำ',
        en: 'Micro-cement Panels, Acoustic Core, Smoke Mirror',
        zh: '微水泥艺术墙板、吸音隔音层、黑灰晶玻'
      },
      lighting: {
        th: 'ไฟเส้นอลูมิเนียมโปรไฟล์ LED เรขาคณิตรอบทิศทาง',
        en: 'Recessed Geometric Linear LED Profile',
        zh: '几何内嵌铝型材线性调光灯'
      },
      areas: {
        th: '38 ตร.ม.',
        en: '38 sq.m',
        zh: '38 平方米'
      }
    },
    colorPalette: [
      { name: 'Obsidian Black', hex: '#111827' },
      { name: 'Cool Slate', hex: '#64748B' },
      { name: 'Soft Amber', hex: '#E6D2A8' }
    ]
  },
  {
    id: 'bedroom-03',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/1589c953bcbdcdf4f2d6b21cd7e52acb.jpg',
    titles: {
      th: 'Minimalist Walnut Horizon Bedroom 03',
      en: 'Minimalist Walnut Horizon Bedroom 03',
      zh: '极简黑胡桃木水平线条卧室 03'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'ห้องนอนเรียบหรูสไตล์มินิมอลที่เน้นความงามของลายไม้วอลนัทธรรมชาติ คุมโทนอุ่นด้วยไฟซ่อนหัวเตียงแนวขวาง ช่วยให้พื้นที่ดูกว้างขวางและสงบนิ่ง',
      en: 'Minimalist luxury bedroom emphasizing natural grain walnut panels, horizontal headboard light strip, and serene acoustic balance.',
      zh: '突出天然黑胡桃木纹理的极简轻奢卧室，水平舒展的床头光槽拉宽视觉空间，带来沉静身心的安睡体验。'
    },
    specs: {
      highlights: {
        th: 'ผนังไม้วอลนัทระแนงแนวนอน & โต๊ะข้างเตียงลอยตัว',
        en: 'Horizontal Timber Slats & Cantilever Nightstands',
        zh: '横向原木格栅墙与悬挑式床头柜'
      },
      materials: {
        th: 'ไม้วอลนัทเกรดนำเข้า, โครงเหล็กพ่นดำ, ผ้าลินิน',
        en: 'Imported Walnut Wood, Matte Steel, Linen Upholstery',
        zh: '进口北美黑胡桃木、哑光黑钢构、亚麻面料'
      },
      lighting: {
        th: 'แสง Warm Light 2700K สำหรับช่วงเวลาพักผ่อน',
        en: 'Relaxing 2700K Warm Dim Lighting',
        zh: '2700K 舒眠柔暖色漫反射间接光'
      },
      areas: {
        th: '36 ตร.ม.',
        en: '36 sq.m',
        zh: '36 平方米'
      }
    },
    colorPalette: [
      { name: 'Walnut Dark', hex: '#451A03' },
      { name: 'Warm Sand', hex: '#FEF3C7' },
      { name: 'Forest Shadow', hex: '#1E3A2B' }
    ]
  },
  {
    id: 'bedroom-04',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/2ea0719046ebac31dd6639bfa246ac37.jpg',
    titles: {
      th: 'Contemporary Dark Velvet Sanctuary 04',
      en: 'Contemporary Dark Velvet Sanctuary 04',
      zh: '现代暗夜丝绒沉浸式卧室 04'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'สร้างความลุ่มลึกให้กับห้องนอนด้วยโทนสี Dark Forest และผนังบุกำมะหยี่เกรดพรีเมียม ตัดกับคิ้วสแตนเลสสีทอง และโต๊ะแต่งหน้าบิลต์อินแบบซ่อนฟังก์ชัน',
      en: 'Deep immersive dark bedroom aesthetic with plush velvet wall cladding, champagne gold trim accents, and seamlessly concealed vanity features.',
      zh: '深邃优雅的暗调墨绿丝绒卧室，以香槟金金属收边点缀，并配备隐藏式功能梳妆系统。'
    },
    specs: {
      highlights: {
        th: 'ผนังกำมะหยี่บุนวมเต็มผืน & ดีเทลคิ้วทองแชมเปญ',
        en: 'Full-height Velvet Upholstery & Champagne Trim',
        zh: '通顶丝绒软包墙体与香槟金金属嵌条'
      },
      materials: {
        th: 'ผ้ากำมะหยี่อิตาลี, สแตนเลส PVD สีทอง, หินควอตซ์',
        en: 'Italian Velvet, PVD Gold Stainless, Quartz Stone',
        zh: '意大利定制丝绒、PVD镀金不锈钢、高硬度石英石'
      },
      lighting: {
        th: 'โคมห้อยสไตล์มินิมอล & ไฟเส้นกระจายแสงรอบขอบฝ้า',
        en: 'Minimalist Drop Pendants & Perimeter Ceiling Wash',
        zh: '极简吊灯与四周洗墙天花暗灯'
      },
      areas: {
        th: '45 ตร.ม.',
        en: '45 sq.m',
        zh: '45 平方米'
      }
    },
    colorPalette: [
      { name: 'Deep Emerald', hex: '#1E3A2B' },
      { name: 'Velvet Noir', hex: '#0B130E' },
      { name: 'Champagne Gold', hex: '#C5A059' }
    ]
  },
  {
    id: 'bedroom-05',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/3df0d015b8049599b95155d6f18cfbf8.jpg',
    titles: {
      th: 'Sculptural Acoustic Panel Bedroom 05',
      en: 'Sculptural Acoustic Panel Bedroom 05',
      zh: '立体声学格栅艺术卧室 05'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'ห้องนอนที่รวมงานดีไซน์ประติมากรรมผนัง 3 มิติเข้ากับคุณสมบัติดูดซับเสียง มอบความเงียบสงบสูงสุด พร้อมระบบควบคุมไฟอัจฉริยะปรับฉากแสงได้หลายอารมณ์',
      en: 'Sculptural bedroom design combining 3D acoustic fluted panels with smart multi-scene lighting control for unmatched serenity.',
      zh: '将立体立体波浪声学板与多场景智能控光深度融合，打造极致静谧与艺术美感兼备的静修套间。'
    },
    specs: {
      highlights: {
        th: 'ผนังระแนงลอนประติมากรรมดูดซับเสียง 3 มิติ',
        en: '3D Sculptural Acoustic Wall & Smart Dimming',
        zh: '3D波浪立体声学吸音墙体与智能调光'
      },
      materials: {
        th: 'แผงโพลีเอสเตอร์ไฟเบอร์ซับเสียง, ไม้โอ๊คทำสีพิเศษ',
        en: 'Acoustic PET Felt, Custom Stained Oak',
        zh: '环保聚酯吸音毡、特制染色天然橡木'
      },
      lighting: {
        th: 'ไฟส่องเน้นพื้นผิวระแนง Grazing Light ขับมิติเงา',
        en: 'Vertical Surface Grazing Light',
        zh: '垂直表面擦墙光，强化立体肌理'
      },
      areas: {
        th: '40 ตร.ม.',
        en: '40 sq.m',
        zh: '40 平方米'
      }
    },
    colorPalette: [
      { name: 'Graphite', hex: '#374151' },
      { name: 'Soft Muted Sage', hex: '#8DA094' },
      { name: 'Warm Cream', hex: '#FEF3C7' }
    ]
  },
  {
    id: 'bedroom-06',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/48038575684187710c4c35dbe1780671.jpg',
    titles: {
      th: 'Executive Floating Suite & Marble Backdrop 06',
      en: 'Executive Floating Suite & Marble Backdrop 06',
      zh: '行政级大理石背景悬浮套房 06'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'ห้องนอนสวีทระดับผู้บริหาร ผนังหินอ่อนบุ๊กแมตช์ธรรมชาติประกบลายหรูหรา พร้อมเตียงสั่งผลิตขอบโค้งมน และชั้นวางของประดับไฟแบ็กไลท์',
      en: 'Executive master suite featuring bookmatched natural marble accent wall, rounded platform bed, and backlit display shelving.',
      zh: '总裁行政主卧套房，采用对花连纹天然大理石背景墙、优雅圆角地台床与背光定制陈列层架。'
    },
    specs: {
      highlights: {
        th: 'ผนังหินอ่อนประกบลาย Bookmatch ขนาดใหญ่',
        en: 'Bookmatched Marble Feature Wall & Floating Frame',
        zh: '大尺度对花连纹大理石背景墙与悬浮床架'
      },
      materials: {
        th: 'หินอ่อน Calacatta, สแตนเลสด้านสีบรอนซ์, หนังแท้',
        en: 'Calacatta Marble, Brushed Bronze Steel, Leather',
        zh: '卡拉卡塔天然大理石、拉丝古铜钢、意大利头层牛皮'
      },
      lighting: {
        th: 'ไฟซ่อนขอบหินอ่อน & สปอตไลท์ส่องงานศิลปะ',
        en: 'Perimeter Marble Halo & Artwork Track Spots',
        zh: '大理石四周悬浮光晕与艺术品焦点射灯'
      },
      areas: {
        th: '50 ตร.ม.',
        en: '50 sq.m',
        zh: '50 平方米'
      }
    },
    colorPalette: [
      { name: 'Calacatta White', hex: '#F8FAFC' },
      { name: 'Bronze Gold', hex: '#A8833F' },
      { name: 'Forest Noir', hex: '#132219' }
    ]
  },
  {
    id: 'bedroom-07',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/79d9e12a6ebd6fe0130e2df8d40e7e39.jpg',
    titles: {
      th: 'Japandi Serenity Platform Suite 07',
      en: 'Japandi Serenity Platform Suite 07',
      zh: '日式Japandi原木宁静榻榻米套房 07'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'ความกลมกลืนระหว่างเซนแบบญี่ปุ่นกับความอบอุ่นสแกนดิเนเวียน เตียงแพลตฟอร์มไม้โอ๊คเตี้ย ซุ้มโค้งฉาบปูนเปลือย และไฟโทนธรรมชาติไร้แสงแยงตา',
      en: 'Zen tranquility meets Scandinavian warmth with low oak platform bed, micro-cement arch niches, and glare-free natural lighting.',
      zh: '日式禅意与北欧温暖的雅致结合，低重心浅橡木地台、艺术微水泥圆弧壁龛及柔和无眩光护眼照明。'
    },
    specs: {
      highlights: {
        th: 'เตียงแพลตฟอร์มไม้โอ๊คเตี้ยสไตล์ Zen พร้อมซุ้มโค้ง',
        en: 'Low-profile Zen Oak Bed & Soft Plaster Arches',
        zh: '低姿日式橡木地台床与微水泥柔美圆拱'
      },
      materials: {
        th: 'ไม้ไวท์โอ๊ค, ปูนฉาบสไตล์วาบิซาบิ, ผ้าฝ้ายออร์แกนิก',
        en: 'White Oak Wood, Wabi-sabi Plaster, Organic Cotton',
        zh: '北美白橡木、侘寂艺术灰泥、有机天然原棉'
      },
      lighting: {
        th: 'ไฟ Indirect Lighting แสงสะท้อนนุ่มนวลรอบห้อง',
        en: 'Diffused Indirect Floor & Wall Wash',
        zh: '全漫射柔光地面地脚灯与漫反射洗墙光'
      },
      areas: {
        th: '34 ตร.ม.',
        en: '34 sq.m',
        zh: '34 平方米'
      }
    },
    colorPalette: [
      { name: 'Natural Oak', hex: '#D97706' },
      { name: 'Soft Linen', hex: '#F5F5F4' },
      { name: 'Sage Olive', hex: '#8DA094' }
    ]
  },
  {
    id: 'bedroom-08',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/99acb9f7d55699e7ea12e3a95c876c18.jpg',
    titles: {
      th: 'Modern Penthouse Panoramic Bedroom 08',
      en: 'Modern Penthouse Panoramic Bedroom 08',
      zh: '现代顶层全景视野奢华卧室 08'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'ห้องนอนสำหรับเพนต์เฮาส์หรูที่ต้องการเปิดรับวิวเมืองกว้างไกล งานออกแบบจัดวางเฟอร์นิเจอร์แบบลอยตัว ม่านไฟฟ้าซ่อนรางเพดาน และคัตเอาต์ไฟหลืบสวยสง่า',
      en: 'Luxury penthouse bedroom maximizing panoramic skyline views with floating furniture layout, recessed motorized drapery, and clean ceiling cove detail.',
      zh: '专属奢华顶层大平层的全景天际线卧室，中置悬浮家具布局、天花暗藏电动窗帘盒与优雅收口漫射光槽。'
    },
    specs: {
      highlights: {
        th: 'งานเปิดมุมมองทัศนียภาพ & ม่านไฟฟ้าซ่อนฝ้าเพดาน',
        en: 'Skyline Orientation & Recessed Motorized Drapes',
        zh: '全景观景动线设计与天花暗藏电动窗帘系统'
      },
      materials: {
        th: 'กระจก Low-E, อลูมิเนียมอโนไดซ์, ผ้าไหมผสมลินิน',
        en: 'Low-E Acoustic Glass, Anodized Metal, Silk-Linen',
        zh: 'Low-E隔音超白玻、阳极氧化铝合金、真丝亚麻混纺'
      },
      lighting: {
        th: 'ไฟคอร์นเนอร์โคฟเพดานลดแสงสะท้อนบนกระจก',
        en: 'Anti-glare Perimeter Cove Lighting',
        zh: '防玻璃反光暗藏周边漫反射灯带'
      },
      areas: {
        th: '55 ตร.ม.',
        en: '55 sq.m',
        zh: '55 平方米'
      }
    },
    colorPalette: [
      { name: 'Charcoal Black', hex: '#1E293B' },
      { name: 'Oatmeal Beige', hex: '#E2E8F0' },
      { name: 'Metallic Brass', hex: '#C5A059' }
    ]
  },
  {
    id: 'bedroom-09',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/9dde8f9ad1b3ce59e6da20c5ccd95fc0.jpg',
    titles: {
      th: 'Organic Curved Harmony Bedroom 09',
      en: 'Organic Curved Harmony Bedroom 09',
      zh: '有机曲面流线舒眠卧室 09'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'ลดทอนเหลี่ยมมุมด้วยสถาปัตยกรรมเส้นโค้งมนของผนังและเตียงนอน ให้ความรู้สึกโอบอุ้ม ปลอดภัย และผ่อนคลายในทุกสัมผัส',
      en: 'Organic curved architecture eliminating harsh angles to provide an embracing, soothing, and tactile luxury sleeping environment.',
      zh: '通过圆弧曲面造型去除生硬棱角，带来如拥抱般温暖安全、充满触觉质感的舒心休养空间。'
    },
    specs: {
      highlights: {
        th: 'ผนังดัดโค้ง Organic Curves ไร้รอยต่อ',
        en: 'Seamless Organic Curved Architecture',
        zh: '无缝平滑连贯有机曲面墙面工艺'
      },
      materials: {
        th: 'ปูนฉาบดินธรรมชาติ, ไม้แอชดัดโค้ง, ผ้าบูเกล (Bouclé)',
        en: 'Clay Plaster, Bent Ash Wood, Bouclé Fabric',
        zh: '天然黏土艺术灰泥、热弯白蜡木、颗粒圈圈绒'
      },
      lighting: {
        th: 'ไฟซ่อนตามแนวส่วนโค้งสร้างเส้นสายแสงที่นุ่มนวล',
        en: 'Continuous Curved Contour LED Glow',
        zh: '依循曲面流线的连续性柔光暗槽'
      },
      areas: {
        th: '32 ตร.ม.',
        en: '32 sq.m',
        zh: '32 平方米'
      }
    },
    colorPalette: [
      { name: 'Warm Cream', hex: '#FFFBEB' },
      { name: 'Soft Taupe', hex: '#A8A29E' },
      { name: 'Olive Green', hex: '#1E3A2B' }
    ]
  },
  {
    id: 'bedroom-10',
    categoryId: 'bedroom',
    imageUrl: '/images/bedroom/bd3da2e8801ce5a3e8e73bb48e5ef438.jpg',
    titles: {
      th: 'Bespoke Luxury Boutique Suite 10',
      en: 'Bespoke Luxury Boutique Suite 10',
      zh: '高定轻奢精品主卧套房 10'
    },
    categoryNames: {
      th: 'ออกแบบห้องนอน (Bedroom)',
      en: 'Bedroom Interior Design',
      zh: '卧室与主卧套房'
    },
    descriptions: {
      th: 'คอนเซปต์ห้องนอนระดับอัลตร้าลักชัวรี่จาก IKAMM Home Decor ลงตัวทั้งการจัดวางแสง พื้นผิววัสดุพรีเมียม และระบบเฟอร์นิเจอร์ฟังก์ชันเฉพาะบุคคล',
      en: 'Ultra-luxury bespoke bedroom concept by IKAMM Home Decor, marrying refined material balance, acoustic precision, and tailored lifestyle living.',
      zh: 'IKAMM Home Decor 巅峰高定作品，融合考究的奢雅材质对比、声学细节与定制化高尚生活方式。'
    },
    specs: {
      highlights: {
        th: 'ระบบหัวเตียงมัลติฟังก์ชันบิลต์อิน & โคมไฟทองเหลือง',
        en: 'Multifunctional Integrated Headboard & Brass Accents',
        zh: '一体化多功能高定床头系统与精工纯铜件'
      },
      materials: {
        th: 'ไม้แท้มะฮอกกานี/วอลนัท, หินอ่อนแท้, ทองเหลืองขัดเงา',
        en: 'Solid Hardwood, Natural Marble Slab, Polished Brass',
        zh: '名贵硬木饰面、整块天然大理石、精抛拉丝黄铜'
      },
      lighting: {
        th: 'ระบบไฟส่องสว่างจัดฉากอัจฉริยะ (Smart Lighting Scenes)',
        en: 'Smart Multi-scene Architectural Illumination',
        zh: '多情景智能光控与无主灯漫射系统'
      },
      areas: {
        th: '48 ตร.ม.',
        en: '48 sq.m',
        zh: '48 平方米'
      }
    },
    colorPalette: [
      { name: 'IKAMM Gold', hex: '#C5A059' },
      { name: 'Deep Forest', hex: '#1E3A2B' },
      { name: 'Obsidian Noir', hex: '#0B130E' }
    ]
  },

  // ===================== CAFE INTERIOR DESIGN =====================
  {
    id: 'cafe-01',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/16c08a1fa5473cf18aa034bf57ddf709.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 01',
      en: 'IKAMM Signature Cafe Concept 01',
      zh: 'IKAMM 招牌咖啡厅设计 01'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'คอนเซปต์คาเฟ่ IKAMM สุดพรีเมียม ผสมผสานโทนสีอบอุ่นกับวัสดุธรรมชาติ บรรยากาศชวนนั่งดื่มกาแฟและสัมผัสดีไซน์ระดับ Bespoke ที่ออกแบบอย่างพิถีพิถัน',
      en: 'Premium IKAMM cafe concept blending warm tones with natural materials, crafted for an inviting bespoke coffee experience.',
      zh: 'IKAMM 高端咖啡厅设计方案，将暖色调与天然材质完美融合，打造高定品质的咖啡体验空间。'
    },
    specs: {
      highlights: {
        th: 'งานออกแบบ IKAMM Bespoke Cafe Interior',
        en: 'IKAMM Bespoke Cafe Interior Design',
        zh: 'IKAMM 高定咖啡厅室内设计方案'
      },
      materials: {
        th: 'ไม้ธรรมชาติ, ไมโครซีเมนต์, วัสดุพรีเมียมคัดสรร',
        en: 'Natural Wood, Micro-cement, Premium Finishes',
        zh: '天然木材、艺术微水泥、精选高档饰面材料'
      },
      lighting: {
        th: 'ระบบแสงไฟ Warm Ambient 2700–3000K',
        en: 'Warm Ambient Lighting 2700–3000K',
        zh: '2700–3000K 暖调氛围照明系统'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Warm Oak', hex: '#D97706' },
      { name: 'Soft Cream', hex: '#FEF3C7' },
      { name: 'IKAMM Forest', hex: '#1E3A2B' }
    ]
  },
  {
    id: 'cafe-02',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/19a74fe22d700c6b73978128b3df83cd.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 02',
      en: 'IKAMM Signature Cafe Concept 02',
      zh: 'IKAMM 招牌咖啡厅设计 02'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'ห้องนั่งเล่นคาเฟ่สไตล์โมเดิร์นมินิมอล ดีไซน์ล้ำสมัยด้วยเส้นสายสะอาดตา พื้นที่ใช้สอยเปิดโล่ง ตอบสนองทั้งการทำงานและการพักผ่อนอย่างลงตัว',
      en: 'Modern minimalist cafe lounge with clean architectural lines, open spatial flow designed for work and leisure.',
      zh: '现代极简风格咖啡休闲区，线条简洁流畅，开放式布局兼顾商务办公与休闲放松双重需求。'
    },
    specs: {
      highlights: {
        th: 'มินิมอลโมเดิร์นสเปซ เปิดโล่ง โปร่งสบาย',
        en: 'Minimalist Open-plan Cafe Layout',
        zh: '极简开放式多功能咖啡厅空间布局'
      },
      materials: {
        th: 'กระจก, เหล็กดำ, ไม้อ่อน, ซีเมนต์เนียน',
        en: 'Glass, Matte Steel, Light Wood, Smooth Concrete',
        zh: '钢化玻璃、哑光黑钢、浅色木饰面、清水混凝土'
      },
      lighting: {
        th: 'ไฟส่องสว่างแนวตั้ง & สปอตไลท์ Track',
        en: 'Vertical Strip Lights & Track Spotlights',
        zh: '竖向线形灯与导轨射灯组合照明'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Matte Black', hex: '#1C1C1E' },
      { name: 'Light Birch', hex: '#E7DDD0' },
      { name: 'IKAMM Gold', hex: '#C5A059' }
    ]
  },
  {
    id: 'cafe-03',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/376f748f5a4d39c9ee6d209a000b366f.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 03',
      en: 'IKAMM Signature Cafe Concept 03',
      zh: 'IKAMM 招牌咖啡厅设计 03'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'คาเฟ่ดีไซน์ IKAMM ที่โดดเด่นด้วยการออกแบบพื้นที่ใช้สอยอย่างลงตัว พร้อมระบบแสงไฟที่สร้างบรรยากาศอบอุ่น เชื้อเชิญให้ลูกค้าอยากมาซ้ำอีกครั้ง',
      en: 'IKAMM cafe design with optimized spatial planning and warm atmospheric lighting that keeps customers coming back.',
      zh: 'IKAMM 咖啡厅作品，以精心规划的空间布局与温馨氛围灯光，打造令客人流连忘返的用餐环境。'
    },
    specs: {
      highlights: {
        th: 'ระบบแสงไฟสร้างบรรยากาศ & งานเฟอร์นิเจอร์สั่งทำ',
        en: 'Atmospheric Lighting & Custom Furniture',
        zh: '氛围照明系统与定制家具配套方案'
      },
      materials: {
        th: 'ไม้วอลนัท, ผิวสัมผัสธรรมชาติ, วัสดุเป็นมิตรกับสิ่งแวดล้อม',
        en: 'Walnut Wood, Natural Textures, Eco-friendly Materials',
        zh: '黑胡桃木、自然肌理材料、环保可持续饰面'
      },
      lighting: {
        th: 'โคมไฟห้อยสไตล์อินดัสเทรียล & ไฟหลืบอบอุ่น',
        en: 'Industrial Pendant Lights & Warm Cove Strips',
        zh: '工业风艺术吊灯与温馨暗槽灯带'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Dark Walnut', hex: '#451A03' },
      { name: 'Warm Sand', hex: '#FDE68A' },
      { name: 'Forest Green', hex: '#1E3A2B' }
    ]
  },
  {
    id: 'cafe-04',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/4ca25839b36bb92ac61c838ab3395c93.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 04',
      en: 'IKAMM Signature Cafe Concept 04',
      zh: 'IKAMM 招牌咖啡厅设计 04'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'บรรยากาศคาเฟ่สไตล์พรีเมียมที่ปรับสมดุลระหว่างความทันสมัยและความอบอุ่น เน้นโซนนั่งคุณภาพสูง พร้อมมุมถ่ายรูปสวยงาม เพิ่มมูลค่าให้กับทุกโมเมนต์',
      en: 'Premium cafe ambiance balancing modernity and warmth, with quality seating zones and photogenic design moments.',
      zh: '高端咖啡厅空间，在现代感与温馨感之间寻求完美平衡，优质卡座区与美观打卡点兼顾。'
    },
    specs: {
      highlights: {
        th: 'โซนนั่งพรีเมียม & มุมถ่ายรูปสวยงาม',
        en: 'Premium Seating Zones & Instagrammable Nooks',
        zh: '高档卡座区与精心设计的打卡点'
      },
      materials: {
        th: 'หินอ่อนเทียม, ผ้ากำมะหยี่, โลหะสีทอง',
        en: 'Engineered Stone, Velvet, Metallic Gold Accents',
        zh: '人造石、丝绒软包、金色金属装饰件'
      },
      lighting: {
        th: 'โคมไฟสวยงาม & ระบบแสงสร้างมิติ',
        en: 'Statement Luminaires & Layered Ambience',
        zh: '装饰性艺术灯具与多层次氛围光'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Ivory White', hex: '#F5F5F0' },
      { name: 'Blush Rose', hex: '#FECDD3' },
      { name: 'IKAMM Gold', hex: '#C5A059' }
    ]
  },
  {
    id: 'cafe-05',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/b69e6989df1fb7ad642d2910264efd2e.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 05',
      en: 'IKAMM Signature Cafe Concept 05',
      zh: 'IKAMM 招牌咖啡厅设计 05'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'คาเฟ่สไตล์ Cozy & Dark Luxury ที่ให้ความรู้สึกพิเศษเฉพาะตัว ตกแต่งด้วยโทนสีเข้มหรูหรา เพิ่มพื้นที่ส่วนตัวสำหรับลูกค้าที่ต้องการความเป็นส่วนตัว',
      en: 'Cozy dark luxury cafe with intimate private zones, rich tones, and carefully curated bespoke details for discerning guests.',
      zh: '舒适暗调奢华咖啡厅，配有私密卡座区，以浓郁深色调与精心打磨的高定细节服务挑剔客人。'
    },
    specs: {
      highlights: {
        th: 'Dark Luxury โทนสีเข้ม & พื้นที่ส่วนตัว Private Zone',
        en: 'Dark Luxury Tones & Intimate Private Zones',
        zh: '暗调奢华色系与私密独立卡座区'
      },
      materials: {
        th: 'หนังแท้, ไม้สีเข้ม, วัสดุโลหะสีดำ',
        en: 'Genuine Leather, Dark Wood, Matte Black Metal',
        zh: '真皮软包、深色木材、哑光黑色金属'
      },
      lighting: {
        th: 'แสง Low-Key Moody Lighting เน้นบรรยากาศ',
        en: 'Low-Key Moody Atmospheric Lighting',
        zh: '低亮度情绪氛围光照设计'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Midnight Black', hex: '#0B130E' },
      { name: 'Cognac Brown', hex: '#78350F' },
      { name: 'IKAMM Gold', hex: '#C5A059' }
    ]
  },
  {
    id: 'cafe-06',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/c72da7d138b438623d87f13076dd5a42.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 06',
      en: 'IKAMM Signature Cafe Concept 06',
      zh: 'IKAMM 招牌咖啡厅设计 06'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'งานออกแบบคาเฟ่ที่เน้นความสวยงามของบาร์กาแฟแบบ Open Kitchen คาดว่าจะดึงดูดลูกค้าให้ชื่นชมกระบวนการชงกาแฟของบาริสต้าในบรรยากาศที่ประณีต',
      en: 'Open-kitchen cafe design showcasing the barista craft in an elegant setting that makes the coffee-making process a visual experience.',
      zh: '开放式吧台咖啡厅设计，将咖啡师精湛手艺融入优雅环境，让制作过程成为一场视觉盛宴。'
    },
    specs: {
      highlights: {
        th: 'บาร์กาแฟ Open Kitchen สไตล์ Artisan',
        en: 'Open-Kitchen Artisan Coffee Bar',
        zh: '开放式精品咖啡制作展示吧台'
      },
      materials: {
        th: 'ไม้ Butcher Block, ไมโครซีเมนต์, กระจกใส',
        en: 'Butcher Block Wood, Micro-cement, Clear Glass',
        zh: '实木拼接台面、艺术微水泥、透明钢化玻璃'
      },
      lighting: {
        th: 'ไฟส่องบาร์กาแฟ High-CRI & ไฟหลืบรอบห้อง',
        en: 'High-CRI Bar Accent & Perimeter Cove Strips',
        zh: '高显色吧台重点照明与环绕暗槽灯带'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Natural Birch', hex: '#D97706' },
      { name: 'Cool Gray', hex: '#6B7280' },
      { name: 'Cream White', hex: '#FFFBEB' }
    ]
  },
  {
    id: 'cafe-07',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/de7bd0f93a81e9b9bdf312b5e0f9237b.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 07',
      en: 'IKAMM Signature Cafe Concept 07',
      zh: 'IKAMM 招牌咖啡厅设计 07'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'คาเฟ่สไตล์ Luxury Rustic ผสมผสานความอบอุ่นของวัสดุธรรมชาติกับความหรูหราของดีเทลงาน Craft สุดละเอียด เหมาะสำหรับแบรนด์ที่ต้องการสร้าง Identity ที่โดดเด่น',
      en: 'Luxury rustic cafe style combining natural material warmth with refined craft detailing, ideal for brands building a strong identity.',
      zh: '奢华乡村风咖啡厅，将自然材质的温暖与精雕细琢的工艺细节融合，助力品牌打造鲜明差异化形象。'
    },
    specs: {
      highlights: {
        th: 'งาน Craft Detailing & ผิวสัมผัสธรรมชาติ Rustic',
        en: 'Refined Craft Details & Rustic Natural Textures',
        zh: '精工手作细节与自然质朴纹理饰面'
      },
      materials: {
        th: 'อิฐเก่า, ไม้ Reclaimed, เหล็กหล่อ',
        en: 'Exposed Brick, Reclaimed Wood, Cast Iron',
        zh: '裸露老砖、原木回收木料、铸铁构件'
      },
      lighting: {
        th: 'โคมวินเทจ Edison & ไฟเทียนบรรยากาศ',
        en: 'Vintage Edison Pendants & Candle Ambience',
        zh: '复古爱迪生灯泡吊灯与烛光氛围营造'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Rustic Brick', hex: '#92400E' },
      { name: 'Warm Linen', hex: '#FEF3C7' },
      { name: 'Iron Gray', hex: '#374151' }
    ]
  },
  {
    id: 'cafe-08',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/df99cedafd3626ca4ed957119f6cf273.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 08',
      en: 'IKAMM Signature Cafe Concept 08',
      zh: 'IKAMM 招牌咖啡厅设计 08'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'คาเฟ่ IKAMM ที่ออกแบบพื้นที่ให้ไหลลื่นต่อเนื่องจากโซน Indoor สู่ Outdoor อย่างลงตัว พร้อมระบบพืชพรรณตกแต่งภายใน Biophilic Design ที่ทันสมัย',
      en: 'IKAMM cafe with seamless indoor-outdoor flow and modern biophilic design integrating living plants for a refreshing atmosphere.',
      zh: 'IKAMM 咖啡厅作品，室内外空间无缝衔接，融入现代生物亲和设计理念，以植物软装焕活空间生命力。'
    },
    specs: {
      highlights: {
        th: 'Biophilic Design & Indoor-Outdoor Flow',
        en: 'Biophilic Design & Indoor-Outdoor Flow',
        zh: '生物亲和设计与室内外无界流动空间'
      },
      materials: {
        th: 'กระจกบานใหญ่, ไม้ไผ่, หินธรรมชาติ, พืชพรรณ',
        en: 'Large Glass Panels, Bamboo, Natural Stone, Greenery',
        zh: '大幅落地玻璃、天然竹材、原石、绿植装置'
      },
      lighting: {
        th: 'แสงธรรมชาติ + ไฟช่วยเสริม Supplementary LED',
        en: 'Natural Daylight + Supplementary LED Accent',
        zh: '自然采光主导 + 补充式 LED 重点照明'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Living Green', hex: '#166534' },
      { name: 'Sandy Beige', hex: '#FEF3C7' },
      { name: 'Natural Stone', hex: '#A8A29E' }
    ]
  },
  {
    id: 'cafe-09',
    categoryId: 'cafe',
    imageUrl: '/images/cafe/fe0d0e015451778fb0ea593f7289f0dd.jpg',
    titles: {
      th: 'IKAMM Signature Cafe Concept 09',
      en: 'IKAMM Signature Cafe Concept 09',
      zh: 'IKAMM 招牌咖啡厅设计 09'
    },
    categoryNames: {
      th: 'ออกแบบคาเฟ่ (Cafe)',
      en: 'Cafe Interior Design',
      zh: '咖啡厅空间设计'
    },
    descriptions: {
      th: 'งานออกแบบคาเฟ่ IKAMM ล่าสุด ผสมผสานความทันสมัยของงาน Geometric Architecture กับความอบอุ่นของวัสดุธรรมชาติ เน้นประสบการณ์ลูกค้าในทุกมุมของพื้นที่',
      en: 'Latest IKAMM cafe design merging geometric architecture with natural material warmth, maximizing customer experience in every corner.',
      zh: 'IKAMM 最新咖啡厅设计作品，几何建筑语言与自然材质温暖相融，每一处细节都致力于提升宾客体验。'
    },
    specs: {
      highlights: {
        th: 'Geometric Architecture & Customer Journey',
        en: 'Geometric Architecture & Customer Journey Design',
        zh: '几何建筑结构与宾客动线体验设计'
      },
      materials: {
        th: 'ไมโครซีเมนต์, ไม้โอ๊ค, โลหะดำสนิท, กระจก',
        en: 'Micro-cement, Oak, Matte Black Metal, Glass',
        zh: '艺术微水泥、橡木、哑光纯黑金属、玻璃'
      },
      lighting: {
        th: 'ระบบไฟ Layered Lighting ครบทุก Zone ของคาเฟ่',
        en: 'Full-zone Layered Lighting System',
        zh: '全区域多层次照明规划系统'
      },
      areas: {
        th: 'ออกแบบตามพื้นที่จริง',
        en: 'Custom Site Area',
        zh: '依实际场地定制'
      }
    },
    colorPalette: [
      { name: 'Matte Black', hex: '#18181B' },
      { name: 'Warm Oak', hex: '#D97706' },
      { name: 'IKAMM Gold', hex: '#C5A059' }
    ]
  },

  // ===================== SHOP INTERIOR DESIGN =====================
  {
    id: 'shop-01',
    categoryId: 'shop',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    titles: {
      th: 'Luxury Boutique Fashion Showroom',
      en: 'Luxury Boutique Fashion Showroom',
      zh: '高端奢华时尚品牌展厅'
    },
    categoryNames: {
      th: 'ออกแบบร้านค้า (Shop)',
      en: 'Shop Interior Design',
      zh: '精品店零售空间'
    },
    descriptions: {
      th: 'โชว์รูมเสื้อผ้าแฟชั่นหรูหรา โดดเด่นด้วยซุ้มผนังปูนฉาบสไตล์เวเนเชียน ราวแขวนทองเหลืองแชมเปญโกลด์ และแท่นโชว์หินขัดรูปทรงประติมากรรม',
      en: 'High-end retail shop interior with curved plaster wall niches, brushed champagne gold garment racks, and custom terrazzo pedestal displays.',
      zh: '高级时装零售展厅，拥有优雅的弧形威尼斯灰泥壁龛、拉丝香槟金挂衣轨道与雕塑感水磨石展台。'
    },
    specs: {
      highlights: {
        th: 'ราวแขวนทองเหลืองสั่งทำพิเศษ & แท่นวางประติมากรรม',
        en: 'Bespoke Brass Racks & Sculptural Pods',
        zh: '定制黄铜衣架与雕塑展示基座'
      },
      materials: {
        th: 'ทองเหลืองซาติน, ปูนฉาบเวนิส, หินอ่อนธรรมชาติ',
        en: 'Brushed Brass, Venetian Plaster, Marble',
        zh: '拉丝黄铜、威尼斯艺术灰泥、天然大理石'
      },
      lighting: {
        th: 'สปอตไลท์ฝังฝ้า High-CRI 4000K เน้นสีเสื้อผ้าเสมือนจริง',
        en: 'Recessed High-CRI Spotlights (4000K)',
        zh: '嵌入式高显色 CRI 4000K 商品射灯'
      },
      areas: {
        th: '150 ตร.ม.',
        en: '150 sq.m',
        zh: '150 平方米'
      }
    },
    colorPalette: [
      { name: 'Champagne Gold', hex: '#C5A059' },
      { name: 'Ivory Plaster', hex: '#F5F5F4' },
      { name: 'Deep Emerald', hex: '#1E3A2B' }
    ]
  },
  {
    id: 'shop-02',
    categoryId: 'shop',
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop',
    titles: {
      th: 'Minimalist Perfumery & Cosmetics Flagship',
      en: 'Minimalist Perfumery & Cosmetics Flagship',
      zh: '极简主义香水与美妆旗舰店'
    },
    categoryNames: {
      th: 'ออกแบบร้านค้า (Shop)',
      en: 'Shop Interior Design',
      zh: '精品店零售空间'
    },
    descriptions: {
      th: 'ร้านเรือธงสไตล์โมเดิร์นล้ำสมัย ชั้นวางกระจกลอยพร้อมระบบไฟในตัว เคาน์เตอร์หินทราเวอร์ทีนบล็อกใหญ่ และโซฟากำมะหยี่รับรองสุดประณีต',
      en: 'Avant-garde retail flagship designed with illuminated floating glass shelves, monolithic stone counters, and soft velvet seating bays.',
      zh: '前卫先锋美妆旗舰店，采用自带发光系统的悬浮玻璃展架、整体洞石吧台及舒适的天鹅绒体验区。'
    },
    specs: {
      highlights: {
        th: 'ชั้นวางกระจกซ่อนไฟติดผนัง & เคาน์เตอร์หินชิ้นเดียว',
        en: 'Illuminated Glass Wall Shelving',
        zh: '发光悬浮玻璃壁架与原石服务台'
      },
      materials: {
        th: 'กระจกฝ้าลดแสงสะท้อน, หินทราเวอร์ทีน, ผ้ากำมะหยี่นำเข้า',
        en: 'Frosted Glass, Travertine, Velvet',
        zh: '超白磨砂玻璃、洞石、进口丝绒'
      },
      lighting: {
        th: 'แผงไฟกระจายแสง Diffused Backlighting เสมือนแสงธรรมชาติ',
        en: 'Diffused LED Panel Backlighting',
        zh: '全光谱漫射导光背板照明'
      },
      areas: {
        th: '95 ตร.ม.',
        en: '95 sq.m',
        zh: '95 平方米'
      }
    },
    colorPalette: [
      { name: 'Travertine', hex: '#E7E5E4' },
      { name: 'Soft Sage', hex: '#8DA094' },
      { name: 'Charcoal', hex: '#262626' }
    ]
  },

  // ===================== COUNTER INTERIOR DESIGN =====================
  {
    id: 'counter-01',
    categoryId: 'counter',
    imageUrl: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=1200&auto=format&fit=crop',
    titles: {
      th: 'Monolithic Backlit Marble Reception Counter',
      en: 'Monolithic Backlit Marble Reception Counter',
      zh: '透光天然大理石一体化接待吧台'
    },
    categoryNames: {
      th: 'ออกแบบเคาน์เตอร์ (Counter)',
      en: 'Counter Interior Design',
      zh: '接待吧台定制设计'
    },
    descriptions: {
      th: 'เคาน์เตอร์ต้อนรับระดับผู้บริหาร ผลิตจากหินควอตซ์ไซต์พาทาโกเนียแท้ที่สามารถส่องสว่างทะลุเนื้อหินจากด้านใน พร้อมขลิบทองเหลืองเงางาม',
      en: 'Statement executive reception counter crafted from bookmatched backlit Patagonia quartz marble with metallic gold accents.',
      zh: '高端企业与豪宅标志性接待台，采用透光对花巴塔哥尼亚天然石英石，辅以奢金细节收边。'
    },
    specs: {
      highlights: {
        th: 'เคาน์เตอร์หินควอตซ์ไซต์แท้แบบประกบฉลุลวดลายส่องแสง',
        en: 'Seamless Backlit Quartz Quartzite Counter',
        zh: '无缝连纹发光石英石岩板吧台'
      },
      materials: {
        th: 'หิน Patagonia Quartzite, ทองเหลืองขัดเงาพิเศษ',
        en: 'Patagonia Quartzite, Brushed Brass',
        zh: '巴塔哥尼亚天然石、高精拉丝黄铜'
      },
      lighting: {
        th: 'ไฟเมทริกซ์ LED ความหนาแน่นสูง กระจายแสงสม่ำเสมอทั่วแผ่นหิน',
        en: 'High-Density Backlit LED Matrix',
        zh: '高密度矩阵式均匀透光 LED 面板'
      },
      areas: {
        th: 'เคาน์เตอร์สเตชั่น 25 ตร.ม.',
        en: '25 sq.m Counter Station',
        zh: '25 平方米吧台工作区'
      }
    },
    colorPalette: [
      { name: 'Patagonia Gold', hex: '#D4AF37' },
      { name: 'Deep Forest', hex: '#1E3A2B' },
      { name: 'Dark Slate', hex: '#111827' }
    ]
  },
  {
    id: 'counter-02',
    categoryId: 'counter',
    imageUrl: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop',
    titles: {
      th: 'Sculptural Fluted Wood Cashier Counter',
      en: 'Sculptural Fluted Wood Cashier Counter',
      zh: '有机曲面实木波浪纹收银吧台'
    },
    categoryNames: {
      th: 'ออกแบบเคาน์เตอร์ (Counter)',
      en: 'Counter Interior Design',
      zh: '接待吧台定制设计'
    },
    descriptions: {
      th: 'เคาน์เตอร์ไอส์แลนด์ทรงโค้งมนธรรมชาติ โครงสร้างตกแต่งด้วยไม้แทมบัวร์ลอนคลื่นแนวตั้ง ท็อปหินแกรนิตดำทนทานสูง พร้อมไฟซ่อนที่ฐานล่าง',
      en: 'Custom organic curved island counter featuring vertical fluted oak paneling and a slim black granite working surface.',
      zh: '定制有机曲面中岛吧台，立面覆以垂直波浪橡木饰面，台面采用坚固耐磨的超薄黑金沙花岗岩。'
    },
    specs: {
      highlights: {
        th: 'ไม้แทมบัวร์ดัดโค้งไร้รอยต่อ & ท็อปแกรนิตดำสนิท',
        en: 'Seamless Curved Fluted Tambour Wood',
        zh: '无缝弯曲橡木波浪格栅板'
      },
      materials: {
        th: 'ไม้โอ๊คลอนแทมบัวร์, หินแกรนิต Absolute Black',
        en: 'Oak Tambour Wood, Absolute Black Granite',
        zh: '弧面橡木格栅板、纯黑天然花岗岩'
      },
      lighting: {
        th: 'ไฟซ่อนรอบฐานล่าง (Toe-kick) ให้ลุคลอยตัวอย่างประณีต',
        en: 'Toe-Kick Perimeter Strip Lighting',
        zh: '悬浮踢脚线 360° 隐藏式柔和暗光'
      },
      areas: {
        th: 'เคาน์เตอร์สเตชั่น 18 ตร.ม.',
        en: '18 sq.m Counter Station',
        zh: '18 平方米独立岛台区'
      }
    },
    colorPalette: [
      { name: 'Natural Oak', hex: '#B45309' },
      { name: 'Black Granite', hex: '#18181B' },
      { name: 'Soft Olive', hex: '#8DA094' }
    ]
  }
]
