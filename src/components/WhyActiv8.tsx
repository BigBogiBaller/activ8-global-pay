import { Building, Zap, Globe2, DollarSign, Headphones, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: Building, title: "VIP access to top tier Acquiring Banks" },
  { icon: Zap, title: "Fast onboarding" },
  { icon: Globe2, title: "Global Coverage" },
  { icon: DollarSign, title: "Competitive Pricing" },
  { icon: Headphones, title: "24/7 support" },
  { icon: Lightbulb, title: "Creative Solutions" },
];

const WhyActiv8 = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-20 bg-[#0E3156]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-primary-foreground mb-16 text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Why Activ8Pay
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 p-8 bg-card rounded-lg border border-border hover:border-primary transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-4 bg-emerald-500/10 rounded-full">
                <reason.icon className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-center text-card-foreground">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyActiv8;
