import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import { Shield, Star } from 'lucide-react';

const PinSetup = () => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState<'create' | 'confirm'>('create');
  const { setupPin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleCreatePin = () => {
    if (pin.length !== 4) {
      toast({ title: 'Invalid PIN', description: 'PIN must be 4 digits', variant: 'destructive' });
      return;
    }
    setStep('confirm');
  };

  const handleConfirmPin = () => {
    if (pin !== confirmPin) {
      toast({ title: 'PIN Mismatch', description: 'PINs do not match', variant: 'destructive' });
      setConfirmPin('');
      return;
    }
    setupPin(pin);
    toast({ title: 'PIN Created!', description: 'Your payment PIN has been set up' });
    navigate('/payment', { state: location.state });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-star-orange via-star-gold to-canteen-red p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-star-orange" />
          </div>
          <CardTitle className="text-2xl">
            {step === 'create' ? 'Create Payment PIN' : 'Confirm PIN'}
          </CardTitle>
          <CardDescription>
            {step === 'create' 
              ? 'Set up a 4-digit PIN for secure payments' 
              : 'Re-enter your PIN to confirm'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 'create' ? (
            <>
              <div className="flex justify-center">
                <InputOTP maxLength={4} value={pin} onChange={setPin}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button onClick={handleCreatePin} className="w-full" disabled={pin.length !== 4}>
                Continue
              </Button>
            </>
          ) : (
            <>
              <div className="flex justify-center">
                <InputOTP maxLength={4} value={confirmPin} onChange={setConfirmPin}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="space-y-3">
                <Button onClick={handleConfirmPin} className="w-full" disabled={confirmPin.length !== 4}>
                  Confirm PIN
                </Button>
                <Button onClick={() => { setStep('create'); setPin(''); setConfirmPin(''); }} variant="outline" className="w-full">
                  Back
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PinSetup;
