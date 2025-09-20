import { Star, Expand, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Product {
  sku: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  tag?: string[];
  category?: string;
  offer?: boolean;
}


interface ProductCardProps {
  product: Product;
}

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <div className="flex">
        {[...Array(totalStars)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <span>{reviews} reviews</span>
    </div>
  );
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative border border-gray-200 rounded-sm p-4 bg-white transition-shadow duration-300 hover:shadow-xl w-[220px] flex-shrink-0">
      <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {product.tag && product.tag.length > 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
            {product.tag.join(', ')}
          </span>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" size="icon" className="bg-white">
            <Expand className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400">SKU: {product.sku}</span>
        <h3 className="font-semibold text-gray-800 h-12 overflow-hidden">{product.name}</h3>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <p className="text-xl font-bold text-gray-900 mt-2">৳{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
