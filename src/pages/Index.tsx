import { useState } from "react";
import { FoodItemCard } from "@/components/FoodItemCard";
import { Cart } from "@/components/Cart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuItems, categories, MenuItem } from "@/data/menuItems";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  item: MenuItem;
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing && existing.quantity > 1) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity - 1 } : ci
        );
      }
      return prev.filter((ci) => ci.item.id !== item.id);
    });
  };

  const removeAllFromCart = (item: MenuItem) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== item.id));
  };

  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: "Your order has been confirmed. Payment verification in progress.",
    });
    setCartItems([]);
  };

  const getItemQuantity = (item: MenuItem) => {
    return cartItems.find((ci) => ci.item.id === item.id)?.quantity || 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-primary">Food Ordering App</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="indian-food" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {menuItems
                      .filter((item) => item.category === category.id)
                      .map((item) => (
                        <FoodItemCard
                          key={item.id}
                          item={item}
                          quantity={getItemQuantity(item)}
                          onAdd={addToCart}
                          onRemove={removeFromCart}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Cart
              items={cartItems}
              onRemoveAll={removeAllFromCart}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
