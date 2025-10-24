import { CreditCard, Building2, Shield, Wallet, Bitcoin, Store } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solutions = [
  {
    icon: CreditCard,
    title: "Card Processing",
    description: "Accept card payments globally with fast onboarding through top EU and US acquirers. We support Visa, Mastercard, Cartes Bancaires, Amex, JCB, and more — with tailored pricing and MCC coverage for your business model.",
  },
  {
    icon: Building2,
    title: "Corporate Banking",
    description: "Access dedicated multi-currency IBANs for your pay-ins and pay-outs. Enjoy seamless connectivity with SWIFT, SEPA, SEPA Instant, and UK Faster Payments.",
  },
  {
    icon: Shield,
    title: "Chargeback & Fraud Shield",
    description: "Prevent Fraud and Manage Chargebacks effectively",
  },
  {
    icon: Wallet,
    title: "Additional & Domestic Payment Methods",
    description: "Expand your payment options with local and alternative payment methods tailored to your target markets. From instant bank transfers to digital wallets, we connect you to the right providers.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Payments",
    description: "Accept cryptocurrency payments seamlessly with our integrated crypto processing solutions. Support for Bitcoin, Ethereum, and other major cryptocurrencies with instant conversion to fiat currencies.",
  },
  {
    icon: Store,
    title: "In-Store Payment",
    description: "Bring your payment solutions to physical locations with advanced POS systems and terminal solutions. Accept all major card types, contactless payments, and mobile wallets at your retail locations.",
  },
];

const Solutions = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="solutions" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-foreground mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <solution.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
