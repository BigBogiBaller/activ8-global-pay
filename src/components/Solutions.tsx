import { CreditCard, Building2, Shield, Coins } from "lucide-react";

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
    title: "Chargeback & Fraud Prevention",
    description: "Protect your revenue with real-time alerts, automated dispute handling, and AI-driven fraud scoring. Integrated tools help you reduce chargebacks and improve approval ratios across your PSPs.",
  },
  {
    icon: Coins,
    title: "Stablecoin Payments",
    description: "Send and receive USDT, USDC, or EURS instantly through compliant on/off-ramp partners. Secure, transparent, and settlement-ready for both merchants and service providers.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <solution.icon className="w-8 h-8 text-accent-foreground" />
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
