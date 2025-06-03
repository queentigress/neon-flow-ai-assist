
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Authentication logic would go here
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset requested for:", formData.email);
    // Password reset logic would go here
    setShowResetForm(false);
  };

  const securityFeatures = [
    "End-to-end encryption",
    "Two-factor authentication",
    "Secure password recovery",
    "Regular security audits"
  ];

  if (showResetForm) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Card className="w-full max-w-md glass-effect">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-neon-blue" />
            </div>
            <CardTitle className="text-2xl text-neon-blue">Reset Password</CardTitle>
            <p className="text-gray-400">Enter your email to receive reset instructions</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email" className="text-gray-300">Email Address</Label>
                <Input
                  id="reset-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="bg-black/30 border-gray-600 text-white"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black font-semibold"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Reset Email
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setShowResetForm(false)}
                className="w-full text-gray-400 hover:text-white"
              >
                Back to Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Security Features */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
              <Brain className="h-12 w-12 text-neon-blue animate-pulse" />
              <h1 className="text-4xl font-bold text-neon-blue animate-glow">Task Master AI</h1>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              Secure AI-powered business automation at your fingertips
            </p>
          </div>

          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-neon-cyan flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Enterprise Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-neon-green" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 rounded-lg p-6 border border-neon-blue/30">
            <h3 className="text-neon-blue font-semibold mb-2">🚀 Ready to Transform Your Business?</h3>
            <p className="text-gray-300 text-sm">Join thousands of entrepreneurs who trust Task Master AI for their business automation needs.</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="glass-effect">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-neon-blue">
              {isLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <p className="text-gray-400">
              {isLogin ? "Sign in to your Task Master AI account" : "Join the AI-powered business revolution"}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="bg-black/30 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="bg-black/30 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="pl-10 bg-black/30 border-gray-600 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 bg-black/30 border-gray-600 text-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="pl-10 bg-black/30 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input type="checkbox" className="rounded border-gray-600" />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowResetForm(true)}
                    className="text-sm text-neon-blue hover:text-neon-cyan"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black font-semibold"
              >
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>

              <div className="text-center">
                <span className="text-gray-400">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                </span>
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-neon-blue hover:text-neon-cyan font-semibold"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
