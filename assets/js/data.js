/*
  WAZIZ SHOP – Shared Product Data
  
  Product schema:
  ─────────────────
  id            : unique number
  name          : string
  price         : string (درهم)
  originalPrice : string
  description   : string
  images        : array of image paths
  
  // Variant fields — only include if this product has them:
  colors        : array of { name, class, inStock } OR empty array []
  sizes         : array of strings OR empty array []
  
  // Size guide — only include if meaningful for this product:
  showSizeGuide : boolean (default false)
  
  // If both colors and sizes are empty, product is treated as a fixed/no-variant item.
*/

export const products = [
  {
    id: 23,
    name: "ensemble polo",
    price: "199",
    originalPrice: "230",
    description: "طقم رجالي فاخر 😎 ✔️ مريح ✔️ جودة عالية ✔️ مناسب للصيف",
    images: [
    "Untitled design - 2026-06-28T083622.279.webp",
    "Untitled design - 2026-06-28T084657.866.webp",
    "Untitled design - 2026-06-28T084730.640.webp",
    "Untitled design - 2026-06-28T085218.094.webp"
],
     colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "أخضر", class: "green", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: false
  },

  {
  id: 22,                          // رقم فريد، لا يتكرر
  name: "pack 7 x 1",
  price: "249",
  originalPrice: "300",
  description: "باك رجالي متكامل 7 قطع 👑👑 شنو كيتضمن الباك؟ 3 عطور + مزيل عرق + سماعات بلوتوث + صمطة + بزطام ✅ 3 ريحات مختلفة (عطور) باش تبدل اللوك ديالك كل نهار حسب المزاج ديالك ✅ مزيل عرق حماية فعالة ضد الروائح الكريهة وانتعاش يدوم طويلاً ✅ صمطة أنيقة عملية وخفيفة تقدر تاخذها معاك فين ما مشيتي ✅ بزطام (محفظة أنيقة) تنظيم مثالي للفلوس والكارتات ديالك 💼 ✅ سماعات بلوتوث جودة صوت عالية وتجربة استماع مريحة (AirPods) 🎧",
images: [
    "photo_2026-06-23_13-58-48.webp",
    "photo_2026-06-21_14-50-22.webp",
    "photo_2026-06-21_14-50-27.webp",
    "photo_2026-06-21_14-50-32.webp",
    "photo_2026-06-21_14-50-36.webp",
    "photo_2026-06-21_14-50-42.webp",
    "photo_2026-06-21_14-50-47.webp",
    "photo_2026-06-21_14-50-51.webp",
    "photo_2026-06-21_14-50-18.webp"
]
,
  colors: [],          // فارغة = لا يظهر قسم اللون
  sizes: [],           // فارغة = لا يظهر قسم المقاس
  showSizeGuide: false,
  inStock: true
},

  {
    id: 21,
    name: "Pack 3x1",
    price: "269",
    originalPrice: "299",
    description: "سماعات بلوتوث + 2 أساور لتغيير اللوك حسب ذوقك + ساعة ذكية T1000 Plus + عطر Afnan 9PM Black 100ml",
    images: [
      "converted_image.webp",
      "6GPf7yQ4nxJnbvAPc3xGRIiCtF58k5yCmCfH2jnt.webp",
      "images (3).webp"
    ],
    colors: [],      // No color selection
    sizes: [],       // No size selection
    showSizeGuide: false,
    inStock: true
  },

  {
    id: 20,
    name: "Ensemble nike",
    price: "199",
    originalPrice: "249",
    description: "طقم رياضي نايكي أنيق ومريح، مناسب للاستعمال اليومي والرياضة.",
    images: [
      "Untitled design (100).webp",
      "Untitled design (99).webp"
    ],
    colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "أخضر", class: "green", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },

  {
    id: 19,
    name: "Ensemble Polo",
    price: "219",
    originalPrice: "249",
    description: "طقم بولو عصري وأنيق، خامة مريحة وتصميم رياضي فاخر.",
    images: [
      "image_3_500x500.webp",
      "image_2_500x500.webp",
      "image_1_500x500.webp"
    ],
    colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "أزرق", class: "blue", inStock: false },
      { name: "أبيض", class: "white", inStock: false }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },

  {
    id: 17,
    name: "Ensemble Simple",
    price: "219",
    originalPrice: "229",
    description: "طقم أنيق بخامات فاخرة وتفصيل محترف.",
    images: [
      "product_10_500x500.webp",
      "product_11_500x500.webp",
      "product_12_500x500.webp"
    ],
    colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "أبيض", class: "white", inStock: true },
      { name: "أزرق", class: "blue", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },

  {
    id: 10,
    name: "Ensemble Luxe",
    price: "219",
    originalPrice: "249",
    description: "طقم شتوي دافئ، مناسب لأيام البرد. خامة ثقيلة وعالية الجودة. تصميم أنيق وعصري.",
    images: [
      "product_3_500x500.webp",
      "product_2_500x500.webp",
      "product_1_500x500.webp"
    ],
    colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "أبيض", class: "white", inStock: true },
      { name: "فضي", class: "silver", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },

  {
    id: 18,
    name: "Ensemble Modern",
    price: "219",
    originalPrice: "229",
    description: "طقم أنيق بخامات فاخرة وتفصيل محترف.",
    images: [
      "product_6_500x500.webp",
      "product_5_500x500.webp",
      "product_9_500x500.webp",
      "product_4_500x500.webp",
      "product_8_500x500.webp",
      "product_7_500x500.webp"
    ],
    colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "أبيض", class: "white", inStock: true },
      { name: "فضي", class: "silver", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  }

];
