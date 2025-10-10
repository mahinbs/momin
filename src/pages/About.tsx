import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Zap,
  Heart,
  Cpu,
  Shield,
  Award,
  Users,
  Clock,
  Star,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.webp";
import aboutStore from "@/assets/about-store.webp";
import logo from "../assets/logo.png";

const features = [
  {
    icon: Award,
    title: "Professional Quality",
    description:
      "We specialize in salon-grade hair care electronics that deliver professional results in the comfort of your home.",
  },
  {
    icon: Shield,
    title: "Trusted Brands",
    description:
      "Your hair deserves the best care. That's why we offer premium electronics from brands you can trust for lasting quality.",
  },
  {
    icon: Zap,
    title: "For Every Hair Type",
    description:
      "Whether you have thick, fine, curly, or straight hair, we have the perfect styling tools designed for your unique needs.",
  },
  {
    icon: Users,
    title: "Seamless Shopping Experience",
    description:
      "Finding the perfect hair care tool has never been easier. Our website is user-friendly, secure, and fast.",
  },
];
const services = [
  {
    icon: Clock,
    title: "Quick & Reliable",
    description:
      "Fast, reliable shipping so you can receive your hair care tools right when you need them.",
  },
  {
    icon: Star,
    title: "Expert Guidance",
    description:
      "We offer styling tips and product recommendations to help you achieve salon-quality results at home.",
  },
  {
    icon: Heart,
    title: "Affordable Luxury",
    description:
      "Professional-grade products at competitive prices, bringing salon-quality hair care within reach.",
  },
];
const stats = [
  {
    number: "5000+",
    label: "Happy Customers",
  },
  {
    number: "20+",
    label: "Premium Brands",
  },
  {
    number: "100+",
    label: "Professional Tools",
  },
  {
    number: "3",
    label: "Years of Excellence",
  },
];
const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${aboutStore})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <img
              src={logo}
              alt="Beuniq"
              className="w-28 mx-auto object-contain"
            />
            <h2 className="text-2xl md:text-3xl">
              Where Your Hair's Beauty Comes First
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              At Beuniq, we understand that your hair is your crown—it deserves the best care
              and styling. We specialize in professional-grade hair care electronics that deliver
              salon-quality results, helping you look and feel your absolute best every day.
            </p>
          </div>
        </div>
      </section>

      {/* About Our Store Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  About our{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    store
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Beuniq, we believe that beautiful hair starts with the right tools.
                    Our passion for hair care excellence drives us to curate a premium collection
                    of professional-grade styling tools—from advanced hair dryers to ceramic
                    straighteners—that transform your daily routine into a luxurious experience.
                  </p>

                  <p>
                    Whether you have thick curls, fine straight hair, or anything in between,
                    we're here to offer innovative solutions that cater to your unique hair
                    type and styling preferences.
                  </p>

                  <p>
                    From ionic hair dryers to professional straighteners and curling tools,
                    every product in our collection is carefully selected and tested to ensure
                    the highest quality and performance standards for beautiful, healthy hair.
                  </p>
                </div>
              </div>
              <div className="relative">
                <GlassCard className="overflow-hidden" animated>
                  <img
                    src={aboutStore}
                    alt="Modern pet store interior with smart toys"
                    className="w-full h-96 object-cover"
                  />
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Us?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional Hair Care Electronics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <GlassCard className="overflow-hidden" animated>
                  <img
                    src={aboutTeam}
                    alt="Happy team of pet store employees with pets"
                    className="w-full h-96 object-cover"
                  />
                </GlassCard>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-4xl font-bold">
                  Our{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize hair care through innovative technology and
                  thoughtful design, creating professional tools that empower everyone
                  to achieve salon-quality results and feel confident in their
                  beauty every day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to quality, innovation, and customer satisfaction.
                  Every purchase supports our mission to make professional hair care
                  accessible and affordable for everyone.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Passionate about hair care excellence
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Quality-first approach to every product
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Award-winning customer service
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Join Our Community
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Why Choose Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 space-y-4">
            <h3 className="text-2xl font-bold">
              Start Shopping with Beuniq Today!
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of professional hair care tools and enjoy a shopping experience
              that's as convenient and satisfying as it is transformative for your hair care routine.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('/shop', '_blank')}
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default About;
