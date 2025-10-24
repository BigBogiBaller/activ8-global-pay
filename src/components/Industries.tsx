import { ShoppingCart, Heart, GraduationCap, Gamepad2, TrendingUp, Plane } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { icon: ShoppingCart, name: "e-Commerce & Online Retail" },
  { icon: Heart, name: "Dating & Adult" },
  { icon: GraduationCap, name: "e-Learning & Digital Goods" },
  { icon: Gamepad2, name: "Gaming & iGaming" },
  { icon: TrendingUp, name: "Marketing & Ad Networks" },
  { icon: Plane, name: "Travel" },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 p-10 bg-card rounded-lg border border-border hover:border-primary transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <industry.icon className="w-16 h-16 text-emerald-500" />
              <span className="text-lg font-semibold text-center text-card-foreground">
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
