import { ShoppingCart, Smartphone, Heart, Gamepad2, Bitcoin, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Smartphone, name: "Digital Goods" },
  { icon: Heart, name: "Dating & Adult" },
  { icon: Gamepad2, name: "iGaming" },
  { icon: Bitcoin, name: "Crypto" },
  { icon: TrendingUp, name: "High-Growth Verticals" },
];

const Industries = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Industries We Serve
        </h2>
        <p 
          className={`text-xl text-muted-foreground mb-12 max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          From traditional e-commerce to emerging sectors, we provide tailored payment solutions across diverse industries.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <industry.icon className="w-10 h-10 text-primary" />
              <span className="text-sm font-medium text-center text-card-foreground">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
