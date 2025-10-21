import { ShoppingCart, Smartphone, Heart, Gamepad2, Bitcoin, TrendingUp } from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Smartphone, name: "Digital Goods" },
  { icon: Heart, name: "Dating & Adult" },
  { icon: Gamepad2, name: "iGaming" },
  { icon: Bitcoin, name: "Crypto" },
  { icon: TrendingUp, name: "High-Growth Verticals" },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Industries We Serve
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          From traditional e-commerce to emerging sectors, we provide tailored payment solutions across diverse industries.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
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
