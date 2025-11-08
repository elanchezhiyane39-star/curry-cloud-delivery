import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, CheckCircle } from 'lucide-react';

const Payment = () => {
  const [pin, setPin] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const cartItems = location.state?.cartItems || [];

  const total = cartItems.reduce((sum: number, item: any) => sum + item.item.price * item.quantity, 0);

  const handlePayment = () => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const storedPin = users[user?.userId || '']?.pin;

    if (pin !== storedPin) {
      toast({ title: 'Invalid PIN', description: 'Incorrect payment PIN', variant: 'destructive' });
      setPin('');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const orderId = 'ORD' + Date.now();
      const order = {
        orderId,
        items: cartItems,
        total,
        userId: user?.userId,
        status: 'confirmed',
        timestamp: new Date().toISOString(),
      };

      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));

      // Simulate SMS notification
      console.log(`SMS sent to ${user?.mobile}: Your order ${orderId} has been confirmed. Total: ₹${total}. Delivery in 30-45 mins.`);

      setIsProcessing(false);
      toast({
        title: 'Payment Successful!',
        description: `Order ${orderId} confirmed. SMS sent to ${user?.mobile}`,
      });

      navigate('/order-success', { state: { order } });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-star-orange via-star-gold to-canteen-red p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CreditCard className="h-16 w-16 text-star-orange" />
          </div>
          <CardTitle className="text-2xl">Payment Verification</CardTitle>
          <CardDescription>Enter your 4-digit PIN to complete payment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-secondary p-4 rounded-lg">
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Total Amount:</span>
              <span className="font-bold text-star-orange">₹{total}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <InputOTP maxLength={4} value={pin} onChange={setPin} disabled={isProcessing}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handlePayment} 
              className="w-full" 
              disabled={pin.length !== 4 || isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </Button>
            <Button 
              onClick={() => navigate('/menu')} 
              variant="outline" 
              className="w-full"
              disabled={isProcessing}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
