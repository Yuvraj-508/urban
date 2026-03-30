import search_icon from "./search_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import hero  from "./hero.png";
import logo from "./logourban.png";
import jordan from "./jordan.png";
import airforce from "./airforce.png";
import addsuper from "./addsuper.png";
import tiger from "./tiger.png";
import shoes_img from "./shoecat.png";
import watches_img from './watchescat.png';
import goggles_img from './glasses.png';
import wallets_img from './wallet.png';

export const assets={
    search_icon,
    nav_cart_icon,
    hero,
    logo,
    jordan,
    airforce,
    addsuper,
    tiger
}
export const dummyProducts = [
  {
    _id: "sh001",
    name: "Air Jordan Retro",
    category: "Shoes",
    brand: "Nike",
    price: 7999,
    offerPrice: 2999,
    image: [jordan],
    description: [
      "Premium leather upper",
      "Comfortable cushioned sole",
      "Stylish streetwear design",
      "Perfect for casual and sports use"
    ],
    sizes: [
  { size: "7", available: true },
  { size: "8", available: false },
  { size: "9", available: true },
  { size: "10", available: true },
  { size: "11", available: false }
],

colors: [
  { color: "black", available: true },
  { color: "white", available: false },
  { color: "red", available: true }
],
    createdAt: "2026-02-28T07:17:46.018Z",
    updatedAt: "2026-02-28T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "sh002",
    name: "Nike Air Force 1",
    category: "Shoes",
    brand: "Nike",
    price: 7499,
    offerPrice: 2799,
    image: [airforce],
    description: [
      "Classic white sneaker design",
      "Durable rubber outsole",
      "All-day comfort",
      "Suitable for everyday wear"
    ],
   sizes: [
  { size: "7", available: true },
  { size: "8", available: false },
  { size: "9", available: true },
  { size: "10", available: true },
  { size: "11", available: false }
],

colors: [
  { color: "black", available: true },
  { color: "white", available: false },
  { color: "red", available: true }
],
      createdAt: "2026-02-28T07:20:46.018Z",
    updatedAt: "2026-02-28T07:21:13.103Z",
    inStock: true,
  },

  {
    _id: "sh003",
    name: "Adidas Superstar",
    category: "Shoes",
    brand: "Adidas",
    price: 6999,
    offerPrice: 2299,
    image: [addsuper],
    description: [
      "Iconic shell toe design",
      "Soft padded interior",
      "High grip sole",
      "Perfect for casual outfits"
    ],
   sizes: [
  { size: "7", available: true },
  { size: "8", available: false },
  { size: "9", available: true },
  { size: "10", available: true },
  { size: "11", available: false }
],

colors: [
  { color: "black", available: true },
  { color: "white", available: false },
  { color: "red", available: true }
],
    createdAt: "2026-02-28T07:25:46.018Z",
    updatedAt: "2026-02-28T07:26:13.103Z",
    inStock: true,
  },
  {
    _id: "sh004",
    name: "Onitsuka Tiger",
    category: "Shoes",
    brand: "Onitsuka Tiger",
    price: 6499,
    offerPrice: 2999,
    image: [tiger],
    description: [
      "Sleek and modern design",
      "Breathable mesh upper",
      "Cushioned midsole for comfort",
      "Great for both casual and athletic wear"
    ],
      sizes: [
  { size: "7", available: true },
  { size: "8", available: false },
  { size: "9", available: true },
  { size: "10", available: true },
  { size: "11", available: false }
],

colors: [
  { color: "black", available: true },
  { color: "white", available: false },
  { color: "red", available: true }
],
    createdAt: "2026-02-28T07:30:46.018Z",
    updatedAt: "2026-02-28T07:31:13.103Z",
    inStock: true,
  }
];

export const categories = [
  {
    text: "Shoes",
    path: "Shoes",
    image: shoes_img,
    bgColor: "#F5F5F5",
  },
  {
    text: "Watches",
    path: "Watches",
    image: watches_img,
    bgColor: "#FDECEC",
  },
   {
    text: "Sunglasses",
    path: "Goggles",
    image: goggles_img,
    bgColor: "#E8F0FE",
  },
  {
    text: "Wallets",
    path: "Wallets",
    image: wallets_img,
    bgColor: "#EEF7F1",
  },
];