import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Star } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginUserId, setLoginUserId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [regUserId, setRegUserId] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regMobile, setRegMobile] = useState('');
  
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(loginUserId, loginPassword)) {
      toast({ title: 'Welcome back!', description: 'Login successful' });
      navigate('/menu');
    } else {
      toast({ title: 'Error', description: 'Invalid credentials', variant: 'destructive' });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(regUserId, regPassword, regName, regMobile)) {
      toast({ title: 'Account created!', description: 'Registration successful' });
      navigate('/menu');
    } else {
      toast({ title: 'Error', description: 'User ID already exists', variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-star-orange via-star-gold to-canteen-red p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <Card className="w-full max-w-md relative shadow-2xl border-2 border-star-gold/20">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <div className="relative">
              <Star className="h-16 w-16 text-star-gold fill-star-gold animate-pulse" />
              <Star className="h-8 w-8 text-star-orange fill-star-orange absolute top-0 right-0 -mr-2 -mt-2" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-star-orange to-canteen-red bg-clip-text text-transparent">
            Star Canteen
          </CardTitle>
          <CardDescription>Delicious food at your fingertips</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" onValueChange={(v) => setIsLogin(v === 'login')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginUserId">User ID</Label>
                  <Input
                    id="loginUserId"
                    value={loginUserId}
                    onChange={(e) => setLoginUserId(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="regUserId">User ID</Label>
                  <Input
                    id="regUserId"
                    value={regUserId}
                    onChange={(e) => setRegUserId(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regName">Full Name</Label>
                  <Input
                    id="regName"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regMobile">Mobile Number</Label>
                  <Input
                    id="regMobile"
                    type="tel"
                    value={regMobile}
                    onChange={(e) => setRegMobile(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regPassword">Password</Label>
                  <Input
                    id="regPassword"
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Register</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
