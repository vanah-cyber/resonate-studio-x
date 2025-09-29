import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { VoiceWaveIcon } from "@/components/VoiceWaveIcon";
import { 
  Mic, 
  Volume2, 
  Zap, 
  Globe, 
  Shield, 
  Sparkles,
  Play,
  ArrowRight,
  Check,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Volume2,
    title: "Ultra-Realistic Text-to-Speech",
    description: "Generate human-like voices in 32+ languages with advanced prosody controls, SSML support, and adjustable speed and pitch."
  },
  {
    icon: Mic,
    title: "Professional Voice Cloning",
    description: "Clone any voice instantly with short samples, or create studio-quality clones with our professional multi-sample workflow."
  },
  {
    icon: Sparkles,
    title: "Studio-Grade Editor",
    description: "Multi-track timeline, batch processing, version history, and professional export options up to 44.1kHz PCM quality."
  },
  {
    icon: Globe,
    title: "AI Dubbing & Localization", 
    description: "Automated lip-sync dubbing with subtitle import, per-segment voice assignment, and seamless video integration."
  },
  {
    icon: Zap,
    title: "Speech-to-Text Excellence",
    description: "High-accuracy transcription with speaker diarization, timestamps, punctuation, and downloadable transcripts."
  },
  {
    icon: Shield,
    title: "Enterprise-Ready",
    description: "HIPAA BAA compliance, SSO integration, audit logs, team management, and dedicated support SLAs."
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Podcast Producer",
    company: "MediaWorks Studio",
    content: "VoiceStudio has revolutionized our podcast production. The voice cloning quality is indistinguishable from human speech.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez", 
    role: "Marketing Director",
    company: "GlobalTech Inc",
    content: "We've localized our content into 15 languages using VoiceStudio. The ROI has been incredible.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Audiobook Narrator", 
    company: "Freelance",
    content: "The professional voice cloning feature saved me weeks of recording time. Absolute game-changer.",
    rating: 5
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-gradient-subtle border-primary/20">
              <Sparkles className="h-4 w-4 mr-2" />
              The Future of Voice AI
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Ultra-Human{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">Voice AI</span>{" "}
              Studio
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Professional text-to-speech, voice cloning, and dubbing platform. 
              Generate studio-quality audio in 32+ languages with enterprise-grade controls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="xl" className="min-w-[200px]" asChild>
                <Link to="/auth?mode=signup">
                  <Play className="h-5 w-5 mr-2" />
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="min-w-[200px]">
                <Volume2 className="h-5 w-5 mr-2" />
                Listen to Demo
              </Button>
            </div>

            {/* Voice Wave Animation */}
            <div className="flex justify-center mb-8">
              <VoiceWaveIcon className="h-16 w-32" />
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
                <span>from 10,000+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span>99.9% uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>SOC 2 & HIPAA compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything you need for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">voice production</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From individual creators to enterprise teams, our platform scales with your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-smooth hover:shadow-elegant border-0 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-lg bg-gradient-primary w-fit">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Loved by{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">creators worldwide</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="transition-smooth hover:shadow-elegant">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your voice content?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of creators, businesses, and developers who trust VoiceStudio 
            for their voice AI needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="min-w-[200px]" asChild>
              <Link to="/auth?mode=signup">
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px] border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <VoiceWaveIcon className="h-8 w-8" animated={false} />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                VoiceStudio
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-smooth">Privacy</Link>
              <Link to="/terms" className="hover:text-foreground transition-smooth">Terms</Link>
              <Link to="/docs" className="hover:text-foreground transition-smooth">API Docs</Link>
              <Link to="/support" className="hover:text-foreground transition-smooth">Support</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 VoiceStudio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}