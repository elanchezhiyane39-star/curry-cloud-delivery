import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, Home } from 'lucide-react';
import { useEffect } from 'react';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  useEffect(() => {
    if (!order) {
      navigate('/menu');
    }
  }, [order, navigate]);

  if (!order) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-star-orange via-star-gold to-canteen-red p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-20 w-20 text-green-500 animate-pulse" />
          </div>
          <CardTitle className="text-3xl text-green-600">Order Confirmed!</CardTitle>
          <CardDescription className="text-lg">Your delicious food is on its way</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-secondary p-4 rounded-lg space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold">Order ID:</span>
              <span className="font-mono">{order.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Total Paid:</span>
              <span className="font-bold text-star-orange">₹{order.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Status:</span>
              <span className="text-green-600 font-semibold">Confirmed</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              📱 SMS notification sent to your registered mobile number with order details and estimated delivery time.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-center text-muted-foreground">
              Estimated Delivery: <span className="font-bold">30-45 minutes</span>
            </p>
          </div>

          <Button onClick={() => navigate('/menu')} className="w-full" size="lg">
            <Home className="mr-2 h-5 w-5" />
            Back to Menu
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSuccess;
