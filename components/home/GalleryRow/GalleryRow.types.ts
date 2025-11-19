export interface GalleryItem {
  id: string;
  title: string;
  thumbnailUri: string;
  price: number;
  percentChange: number;
}

export interface GalleryRowItemProps {
    item: GalleryItem;
    index: number;
}

export interface GalleryRowProps {
  title: string;
  items: GalleryItem[];
}