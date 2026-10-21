export const products = [
  {
    id: 30,
    name: "jacket nike",
    price: "249",
    originalPrice: "270",
    description: "جاكيط زوينة، ستايل عصري ودفء فالأيام الباردة 🥶👌",
    images: [
      "6c54ba15-2a1a-4509-86ae-2a1cea3787e2.webp",
      "Gemini_Generated_Image_hqoqrmhqoqrmhqoq.webp"
    ],
    colors: [
      { name: "فضي", class: "silver", inStock: true }, // هنا كانت المشكل، بدلت "و" بفاصلة (,)
      { name: "بني", class: "brown", inStock: true }
    ],
    sizes: ["M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    showSizeGuide: true,
    inStock: true
  },
  
  {
    id: 28,
    name: "jacket nike",
    price: "279",
    originalPrice: "299",
    description: "🔥 جاكيط نايك دوبل فاص (2 في 1) – الأناقة والدفء فجاكيط وحدة 🔥",
    images: [
      "1000032676.webp",
      "10000326767.webp",
      "1000032675.webp"
    ],
    colors: [
      { name: "أسود", class: "black", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  },
  
  {
    id: 27,
    name: "ensemble nike",
    price: "219",
    originalPrice: "249",
    description: "اونصومبل رجالية فاخر 😎 ✔️ مريح ✔️ جودة عالية ✔️ مناسب للبرد",
    images: [
      "Gemini_Generated_Image_j1xo61j1xo61j1xo.webp",
      "Gemini_Generated_Image_46w7ip46w7ip46w7.webp"
    ],
    colors: [
      { name: "أسود", class: "black", inStock: true },
      { name: "اخضر", class: "green", inStock: true }
    ],
    sizes: ["M", "L", "XL"],
    showSizeGuide: true,
    inStock: true
  }
];
