interface ProductCardProps {
    id: string;
    name: string;
    imageUrl: string | null;
    authorUsername: string;
    authorImageUrl?: string | null;
    reviewRating: number;
    reviewCount: number;
    price: number;
}