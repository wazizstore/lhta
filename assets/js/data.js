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
    id: 26,
    name: "ensemble nike 2026",
    price: "219",
    originalPrice: "249",
    description: "طقم رجالي فاخر 😎 ✔️ مريح ✔️ جودة عالية ✔️ مناسب للصيف",
    images: [
    "ensemble-brown-model-500.webp",
    "ensemble-black-model-500.webp",
    "ensemble-green-model-500.webp",
        "ensemble-gray-model-500.webp"
  
],
     colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "ازرق فاتح", class: "light blue", inStock: true },
       { name: "اخضر", class: "green", inStock: true },
              { name: "بني", class: "brown", inStock: true }

    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: false
  },
  
  
  {
    id: 22,
    name: "ensemble polo",
    price: "199",
    originalPrice: "219",
    description: "طقم رجالي فاخر 😎 ✔️ مريح ✔️ جودة عالية ✔️ مناسب للصيف",
    images: [
    "123.webp",
    "1234.webp",
    "12345.webp"
  
],
     colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "فضي", class: "silver", inStock: true },
       { name: "ازرق", class: "blue", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: false
  },
   
  {
    id: 23,
    name: "ensembl class simple 2026",
    price: "219",
    originalPrice: "249",
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
   {
    id: 26,
    name: "ensembl simple class",
    price: "219",
    originalPrice: "249",
    description: "التوصيل مجاني • قلب قيس عاد خلص • التوصيل لجميع مدن المغرب",
images: [
    "product_image_1.webp",
    "product_image_2.webp",
    "product_image_3.webp",
    "photo1.webp",
    "photo2.webp",
    "photo3.webp"
],


     colors: [
      { name: "ابيض", class: "white", inStock: true },
        { name: "فضي", class: "silver", inStock: true },
         { name: "بيج", class: "beige", inStock: true },
         { name: "الاخضر", class: "green", inStock: true },
         { name: "الازرق", class: "blue", inStock: true },
       { name: "اسود", class: "black", inStock: true }
     
    ],
    sizes: ["M", "L", "XL", "Xxl"],
    showSizeGuide: true,
    inStock: true
  },
    {
    id: 25,
    name: "انسومبل polo",
    price: "219",
    originalPrice: "249",
    description: "التوصيل مجاني • قلب قيس عاد خلص • التوصيل لجميع مدن المغرب",
images: [
    "mmmm.webp",
    "mmmmm.webp"
],


     colors: [
      { name: "ازرق", class: "blue", inStock: true },
       { name: "اسود", class: "black", inStock: true }
     
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },
     {
    id: 24,
    name: "ensemble simple",
    price: "199",
    originalPrice: "249",
    description: "التوصيل مجاني • قلب قيس عاد خلص • التوصيل لجميع مدن المغرب",
images: [
    "Untitled_design___2026_07_12T161249_654.webp",
    "Untitled_design___2026_07_14T141156_477.webp",
    "Untitled_design___2026_07_14T141207_723.webp"
],


     colors: [
      { name: "بني", class: "brown", inStock: true },
        { name: "فضي", class: "silver", inStock: true },
       { name: "اسود", class: "black", inStock: true }
     
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },

 
  {
    id: 20,
    name: "Ensemble nike",
    price: "199",
    originalPrice: "219",
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
];
