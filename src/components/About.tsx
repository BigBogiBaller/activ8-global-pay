import { TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-primary-foreground/90 text-lg leading-relaxed">
              <p>
                At Activ8Pay, we connect forward-thinking businesses across all industries to a robust, reliable, and efficient global payment ecosystem.
              </p>
              <p>
                As an Independent Sales Organization (ISO) partnered with 25 acquiring banks, including several top-tier European financial institutions, we empower merchants to access the right acquiring and banking partners for their specific needs.
              </p>
              <p>
                Our expertise covers a wide range of industries, from e-commerce, digital goods, dating and adult to iGaming and crypto, and other high-growth verticals. Whether your business needs a reliable acquirer, a dedicated IBAN or a robust fraud and chargeback prevention solution, Activ8Pay provides the right connections and guidance to help you operate safely and scale globally.
              </p>
              <p className="font-semibold">
                Our mission is to make payments widely and quickly accessible, safely processed, and strategically optimized so.. Ready to Activ8 and grow your business?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-primary/20 backdrop-blur-sm p-12 rounded-2xl border border-primary/30">
              <TrendingUp className="w-48 h-48 text-primary-foreground" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
