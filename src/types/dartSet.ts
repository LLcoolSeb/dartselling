export interface DartSet {
  id: string;
  name: string;
  weight: number;
  condition: 'wie neu' | 'wenig bespielt' | 'bespielt' | 'viel bespielt';
  price: number;
  images: string[];
  description?: string;
  shopLink?: string;
} 