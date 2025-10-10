import { GlassCard } from "@/components/ui/glass-card";
import { Star, Quote } from "lucide-react";
import testimonialImage from "@/assets/testimonial1.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Hair Styling Enthusiast",
    content: "The Professional Ionic Hair Dryer from Beuniq has been a game-changer for my thick, frizzy hair! The 3-speed adjustment feature is perfect - I use the lower heat when styling delicate sections and the turbo speed for quick drying. The ionic technology works flawlessly, and my hair is so much smoother and shinier now. It's reduced my styling time by half and completely eliminated frizz. The sleek design is gorgeous and feels premium. Highly recommend for anyone serious about hair care!",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <GlassCard intensity="light" className="inline-block px-6 py-3 mb-8">
            <span className="text-sm font-medium text-primary">💝 Customer Love</span>
          </GlassCard>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            What our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground">Real stories from satisfied customers</p>
        </div>
        
        <div className="max-w-5xl mx-auto animate-scale-in">
          <GlassCard intensity="medium" className="relative p-12 overflow-hidden">
            {/* Decorative Quote */}
            <Quote className="absolute top-8 left-8 h-16 w-16 text-primary/20" />
            
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-8 w-8 fill-yellow-400 text-yellow-400 mx-1 animate-pulse-slow" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl mb-12 text-foreground leading-relaxed text-center font-medium">
                "The Professional Ionic Hair Dryer from Beuniq has been a{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
                  game-changer
                </span>{" "}
                for my thick, frizzy hair! The ionic technology works flawlessly, and my hair is so much smoother and shinier now. It's reduced my styling time by half and completely eliminated frizz."
              </blockquote>
              
              {/* Customer Info */}
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={testimonialImage}
                      alt="Priya Sharma"
                      className="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-glow"
                    />
                    <div className="absolute -inset-2 bg-gradient-primary rounded-full opacity-20 blur-lg animate-pulse-slow" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Priya Sharma</div>
                    <div className="text-lg text-primary font-medium">Hair Styling Enthusiast</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-accent rounded-full opacity-10 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;