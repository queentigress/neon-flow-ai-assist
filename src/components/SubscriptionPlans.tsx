
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, Zap, Star, Gift, Sparkles } from "lucide-react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "forever",
      icon: Zap,
      color: "text-gray-400",
      bgColor: "bg-gray-500/20",
      popular: false,
      features: [
        "Limited receipt scanning (10 per month)",
        "Basic messaging (text only)",
        "Basic video calling (2 participants, 30min limit)",
        "Manual tax entry"
      ]
    },
    {
      name: "Premium Plan",
      price: "$25",
      period: "month",
      yearlyPrice: "$250",
      yearlyDiscount: "Save $50",
      icon: Crown,
      color: "text-neon-blue",
      bgColor: "bg-neon-blue/20",
      popular: true,
      trial: "7-day free trial",
      features: [
        "Unlimited receipt scanning & AI tax tracking",
        "Full messaging suite (file sharing, voice notes)",
        "Unlimited HD video calling (5 participants)",
        "Employee schedule manager",
        "Screen sharing & recordings"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "$50",
      period: "month",
      yearlyPrice: "$500",
      yearlyDiscount: "Save $100",
      icon: Star,
      color: "text-neon-purple",
      bgColor: "bg-purple-500/20",
      popular: false,
      trial: "7-day free trial",
      features: [
        "Multi-user expense tracking & tax audits",
        "Priority AI assistance & automation",
        "Enterprise messaging suite (voice channels)",
        "Unlimited HD video conferencing",
        "Advanced employee scheduling suite",
        "Payroll integration"
      ]
    }
  ];

  const addOns = [
    { name: "Advanced Expense Reports", price: "$5", description: "Detailed AI-powered financial insights" },
    { name: "Custom Branding Package", price: "$10", description: "Business cards, logos, custom themes" },
    { name: "Extended Video Conferencing", price: "$7", description: "Higher participant limits & extended meetings" },
    { name: "Premium AI Analytics", price: "$12", description: "Business optimization reports & strategy insights" }
  ];

  const lifetimeOffers = [
    { name: "Premium Lifetime Access", price: "$500", description: "Unlock all premium features permanently—no monthly fees!" },
    { name: "Enterprise Lifetime Access", price: "$900", description: "Full access to enterprise tools—ideal for business scaling!" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neon-blue animate-glow">Choose Your Plan</h1>
        <p className="text-xl text-gray-300">Take Control of Your Business with Task Master AI</p>
        <div className="bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-lg p-4 border border-neon-blue/30">
          <p className="text-neon-cyan font-semibold">🔥 Limited Time: Try Premium for just $15 this month!</p>
        </div>
      </div>

      {/* Main Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={plan.name} className={`glass-effect hover:neon-border transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-neon-blue' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-blue text-black font-bold">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center">
              <div className={`mx-auto w-16 h-16 rounded-full ${plan.bgColor} flex items-center justify-center mb-4`}>
                <plan.icon className={`h-8 w-8 ${plan.color}`} />
              </div>
              <CardTitle className={`text-2xl ${plan.color}`}>{plan.name}</CardTitle>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.color}`}>{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                {plan.yearlyPrice && (
                  <div className="text-sm text-gray-300">
                    <span className="line-through">${parseInt(plan.price) * 12}</span>
                    <span className={`ml-2 ${plan.color} font-semibold`}>{plan.yearlyPrice}/year</span>
                    <Badge variant="outline" className="ml-2 text-neon-cyan border-neon-cyan">
                      {plan.yearlyDiscount}
                    </Badge>
                  </div>
                )}
                {plan.trial && (
                  <Badge variant="outline" className="text-neon-green border-neon-green">
                    {plan.trial}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className={`w-full ${plan.popular 
                  ? 'bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black' 
                  : 'bg-transparent border-2 border-current hover:bg-current/10'
                } ${plan.color} font-semibold transition-all duration-300 hover:scale-105`}
              >
                {plan.name === "Free Plan" ? "Get Started" : "Start Free Trial"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add-Ons */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-neon-cyan flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            Pay-Per-Feature Add-Ons
          </CardTitle>
          <p className="text-gray-400">Customize your experience with additional features</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-semibold">{addon.name}</h4>
                  <span className="text-neon-blue font-bold">{addon.price}/mo</span>
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
                <Button size="sm" variant="outline" className="mt-3 border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                  Add to Plan
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lifetime Offers */}
      <Card className="glass-effect border-2 border-neon-purple">
        <CardHeader>
          <CardTitle className="text-neon-purple flex items-center gap-2">
            <Gift className="h-6 w-6" />
            Lifetime Purchase Options
          </CardTitle>
          <p className="text-gray-400">One-time payment for permanent access</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lifetimeOffers.map((offer, index) => (
              <div key={index} className="p-6 rounded-lg bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 border border-neon-purple/50">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-bold text-neon-purple">{offer.name}</h4>
                  <div className="text-3xl font-bold text-neon-pink">{offer.price}</div>
                  <p className="text-gray-300 text-sm">{offer.description}</p>
                  <Button className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white font-semibold">
                    Purchase Lifetime Access
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Marketing Section */}
      <Card className="glass-effect bg-gradient-to-r from-neon-blue/5 to-neon-cyan/5">
        <CardContent className="p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-neon-blue">Why Choose Task Master AI?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <Zap className="h-6 w-6 text-neon-cyan mx-auto" />
              <p className="text-gray-300">Streamline workflow with AI-powered automation</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-6 w-6 text-neon-blue mx-auto" />
              <p className="text-gray-300">Save time with automated tax deduction insights</p>
            </div>
            <div className="space-y-2">
              <Crown className="h-6 w-6 text-neon-purple mx-auto" />
              <p className="text-gray-300">Stay connected with premium video conferencing</p>
            </div>
            <div className="space-y-2">
              <Star className="h-6 w-6 text-neon-pink mx-auto" />
              <p className="text-gray-300">Unlock full business management capabilities</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionPlans;
