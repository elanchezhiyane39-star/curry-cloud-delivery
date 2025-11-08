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
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{item.name}</CardTitle>
        {item.description && (
          <CardDescription className="text-sm">{item.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-2xl font-bold text-primary">₹{item.price}</p>
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
