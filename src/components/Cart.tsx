import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2 } from "lucide-react";
import { MenuItem } from "@/data/menuItems";

interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveAll: (item: MenuItem) => void;
  onCheckout: () => void;
}

export const Cart = ({ items, onRemoveAll, onCheckout }: CartProps) => {
  const total = items.reduce((sum, { item, quantity }) => sum + item.price * quantity, 0);
  const itemCount = items.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Cart ({itemCount} items)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px] px-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-3">
              {items.map(({ item, quantity }) => (
                <div key={item.id} className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ₹{item.price} × {quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">₹{item.price * quantity}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemoveAll(item)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
      {items.length > 0 && (
        <CardFooter className="flex-col gap-4">
          <Separator />
          <div className="flex items-center justify-between w-full">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-primary">₹{total}</span>
          </div>
          <Button onClick={onCheckout} className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
