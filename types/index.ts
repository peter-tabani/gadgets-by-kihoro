export type QuickCategory = {
  id: number;
  label: string;
};

export type HeroAction = {
  id: number;
  label: string;
};

export type DealItem = {
  id: number;
  title: string;
  image: string;
  price: string;
  oldPrice?: string;
  stockLeft: number;
  progress: number;
};