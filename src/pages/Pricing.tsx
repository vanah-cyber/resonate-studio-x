import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Building2, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "month",
    description: "Perfect for getting started",
    features: [
      "10k credits/month",  
      "Text-to-Speech",
      "Speech-to-Text",
      "Studio access (limited)",
      "Conversational AI trial",
      "API access (low concurrency)",
      "Basic onboarding"
    ],
    buttonText: "Start Free",
    buttonVariant: "outline" as const,
    popular: false,
    icon: Sparkles
  },
  {
    name: "Starter", 
    price: "$5",
    period: "month",
    description: "Great for individuals and small projects",
    features: [
      "30k credits/month",
      "Everything in Free",
      "Commercial license", 
      "Instant voice cloning",
      "Dubbing Studio",
      "20 Studio projects",
      "Music use for social/ads"
    ],
    buttonText: "Get Started",
    buttonVariant: "hero" as const,
    popular: true,
    icon: Zap
  },
  {
    name: "Creator",
    price: "$11", 
    period: "month",
    description: "For content creators scaling up",
    features: [
      "100k credits/month",
      "Everything in Starter",
      "Professional voice cloning",
      "Usage-based billing for extra credits",
      "Higher-quality audio (192 kbps)",
      "Priority email support",
      "Advanced export options"
    ],
    buttonText: "Go Creator",
    buttonVariant: "premium" as const,
    popular: false,
    icon: Crown
  },
  {
    name: "Pro",
    price: "$99",
    period: "month", 
    description: "For businesses and agencies",
    features: [
      "500k credits/month",
      "Everything in Creator",
      "44.1kHz PCM API output",
      "Higher concurrency",
      "Advanced export options",
      "Priority email support",
      "Team collaboration tools"
    ],
    buttonText: "Go Pro",
    buttonVariant: "accent" as const,
    popular: false,
    icon: Building2
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Simple, transparent{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your voice AI needs. Start free, scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={cn(
                  "relative transition-smooth hover:shadow-elegant",
                  plan.popular && "ring-2 ring-primary shadow-primary"
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-gradient-subtle w-fit">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button 
                    variant={plan.buttonVariant}
                    className="w-full"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Enterprise Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-subtle border-2 border-dashed border-muted">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                    <p className="text-muted-foreground max-w-md">
                      Custom credits & seats, BAAs for HIPAA compliance, SSO integration, 
                      dedicated support, and priority features.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" size="lg">
                      Contact Sales
                    </Button>
                    <Button variant="hero" size="lg">
                      Get Custom Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
