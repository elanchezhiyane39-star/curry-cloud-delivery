import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menuItems";

interface FoodItemCardProps {
  item: MenuItem;
  quantity: number;
  onAdd: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
}

export const FoodItemCard = ({ item, quantity, onAdd, onRemove }: FoodItemCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:scale-105 border-2 border-border/50 bg-gradient-to-br from-card to-card/80">
      <div className="relative h-48 bg-gradient-to-br from-star-gold/20 via-star-orange/20 to-canteen-red/20 flex items-center justify-center overflow-hidden">
        {item.image && (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2">
          <h3 className="text-white font-bold text-lg drop-shadow-lg">{item.name}</h3>
        </div>
      </div>
      <CardHeader className="pb-3">
        {item.description && (
          <CardDescription className="text-sm">{item.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-2xl font-bold bg-gradient-to-r from-star-orange to-canteen-red bg-clip-text text-transparent">
          ₹{item.price}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {quantity === 0 ? (
          <Button onClick={() => onAdd(item)} className="w-full" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between w-full gap-2">
            <Button onClick={() => onRemove(item)} variant="outline" size="icon">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-semibold text-lg min-w-8 text-center">{quantity}</span>
            <Button onClick={() => onAdd(item)} variant="outline" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
