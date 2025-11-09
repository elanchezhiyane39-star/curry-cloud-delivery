import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodItemCard } from '@/components/FoodItemCard';
import { Cart } from '@/components/Cart';
import { StarBackground } from '@/components/StarBackground';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { menuItems, categories, MenuItem } from '@/data/menuItems';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Star, LogOut, User } from 'lucide-react';

interface CartItem {
  item: MenuItem;
  quantity: number;
}

const Menu = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

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
    if (cartItems.length === 0) {
      toast({ title: 'Cart is empty', description: 'Add items to proceed', variant: 'destructive' });
      return;
    }
    
    if (!user?.pin) {
      navigate('/pin-setup', { state: { cartItems } });
    } else {
      navigate('/payment', { state: { cartItems } });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const getItemQuantity = (item: MenuItem) => {
    return cartItems.find((ci) => ci.item.id === item.id)?.quantity || 0;
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background relative">
      <StarBackground />
      <header className="sticky top-0 z-50 bg-gradient-to-r from-star-orange via-star-gold to-canteen-red shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-white fill-white" />
              <h1 className="text-2xl md:text-3xl font-bold text-white">Star Canteen</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-white">
                <User className="h-5 w-5" />
                <span>{user.name}</span>
              </div>
              <Button onClick={handleLogout} variant="secondary" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="indian-food" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-secondary">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    <span className="mr-2">{category.icon}</span>
                    <span className="hidden sm:inline">{category.name}</span>
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

export default Menu;
