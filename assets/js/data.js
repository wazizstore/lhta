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
    id: 27,
    name: "ensemble nike",
    price: "219",
    originalPrice: "249",
description: "اونصومبل رجالية فاخر 😎 ✔️ مريح ✔️ جودة عالية ✔️ مناسب للبرد",
        images: [
    "Gemini_Generated_Image_46w7ip46w7ip46w7.webp",
    "Gemini_Generated_Image_j1xo61j1xo61j1xo.webp"
  
],
     colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "اخضر", class: "green", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },

    {
    id: 28,
    name: "jacket nike",
    price: "290",
    originalPrice: "350",
description: "🔥 جاكيط نايك دوبل فاص (2 في 1) – الأناقة والدفء فجاكيط وحدة 🔥",
      images: [
         "1770405531_1000496322 (1).webp",

      
    "1000013722.webp",
    "1000013720.webp",
            "1000013719.webp"
  
],
     colors: [
      { name: "أسود", class: "black", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },
  
   
  {
    id: 23,
    name: "ensembl class simple 2026",
    price: "219",
    originalPrice: "240",
    description: "قلب قيس عاد خلص • التوصيل لجميع مدن المغرب",
images: [
    "Untitled design - 2026-07-24T161849.642.webp",
   "Untitled design - 2026-07-24T161934.540.webp",
    "Untitled design - 2026-07-24T161917.788.webp"
],


     colors: [
      { name: "اخضر", class: "green", inStock: true },
             { name: "ابيض", class: "white", inStock: true },
       { name: "اسود", class: "black", inStock: true }
     
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },
];
