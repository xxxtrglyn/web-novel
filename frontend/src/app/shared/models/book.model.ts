export interface Book {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  categories?: string[];
  rating?: number;
}
