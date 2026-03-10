import { DealItem, HeroAction, QuickCategory } from "@/types";

export const quickCategories: QuickCategory[] = [
  { id: 1, label: "iPhone Deals" },
  { id: 2, label: "Samsung" },
  { id: 3, label: "Accessories" },
  { id: 4, label: "Refurbished" },
  { id: 5, label: "Under KSh 50k" },
];

export const heroActions: HeroAction[] = [
  { id: 1, label: "Shop Phones" },
  { id: 2, label: "Shop Accessories" },
  { id: 3, label: "Top Deals" },
  { id: 4, label: "Trade-In Value" },
];

export const deals: DealItem[] = [
  {
    id: 1,
    title: "Samsung Galaxy A16",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    price: "KSh 15,395",
    oldPrice: "KSh 29,999",
    stockLeft: 13,
    progress: 28,
  },
  {
    id: 2,
    title: "Wireless Earbuds Pro",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
    price: "KSh 959",
    oldPrice: "KSh 999",
    stockLeft: 9,
    progress: 55,
  },
  {
    id: 3,
    title: "iPhone 13 Refurbished",
    image:
      "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&w=900&q=80",
    price: "KSh 68,500",
    oldPrice: "KSh 75,000",
    stockLeft: 7,
    progress: 40,
  },
  {
    id: 4,
    title: "Power Bank 20,000mAh",
    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=80",
    price: "KSh 2,499",
    oldPrice: "KSh 3,200",
    stockLeft: 24,
    progress: 70,
  },
  {
    id: 5,
    title: "Samsung Fast Charger",
    image:
      "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=900&q=80",
    price: "KSh 1,290",
    oldPrice: "KSh 1,800",
    stockLeft: 18,
    progress: 48,
  },
  {
    id: 6,
    title: "Apple Watch Series",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",
    price: "KSh 12,999",
    oldPrice: "KSh 16,500",
    stockLeft: 5,
    progress: 30,
  },
];