import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Shield, Building2, Bitcoin, Wallet, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";

const industries = [
  "iGaming and betting",
  "Dating and adult entertainment",
  "Crypto and fintech projects",
  "CBD and nutraceuticals",
  "Subscription and SaaS businesses",
  "Marketing and ad networks",
  "Travel",
  "e-Learning and digital goods",
];

const services = [
  {
    icon: CreditCard,
    title: "Card processing",
    text: "Accept Visa, Mastercard, Cartes Bancaires, Amex, JCB and more through top EU and US acquirers, with tailored pricing and MCC coverage for your business model.",
  },
  {
    icon: Shield,
    title: "Chargeback and fraud shield",
    text: "Prevent fraud and manage chargebacks effectively, so your merchant account stays healthy.",
  },
  {
    icon: Building2,
    title: "Corporate banking",
    text: "Dedicated multi-currency IBANs for pay-ins and pay-outs, connected to SWIFT, SEPA, SEPA Instant and UK Faster Payments.",
  },
  {
    icon: Bitcoin,
    title: "Crypto and stablecoin settlement",
    text: "Accept or receive funds in digital currencies through regulated partners.",
  },
  {
    icon: Wallet,
    title: "Local and alternative payment methods",
    text: "Instant bank transfers, digital wallets and other methods tailored to your target markets.",
  },
];

const steps = [
  "Tell us about your business, industry and target markets.",
  "We guide you through the application and due diligence documents.",
  "We match you with the most suitable acquiring partner from our network.",
  "Once your documents are complete, approval can take as little as 5 to 9 business days, depending on your business type and jurisdiction.",
];

const HighRiskMerchantAccount = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="High Risk Merchant Account | Activ8Pay"
        description="Get a high risk merchant account for iGaming, dating, crypto, CBD, subscriptions and more. Access 25+ acquiring banks across Europe, the UK and the US with Activ8Pay."
        path="/high-risk-merchant-account"
      />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          High Risk Merchant Accounts
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          Many banks turn away businesses in high-risk industries. Activ8Pay connects you with a network of
          over 25 acquiring banks and trusted payment providers across Europe, the UK and the US, so you can
          accept card payments worldwide with a stable, long-term setup.
        </p>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Industries we support</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industries.map((name) => (
              <li key={name} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg text-card-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground">
            Industry not listed? Contact us — we can often find a suitable acquirer or banking solution.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">What you get</h2>
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.title} className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                <s.icon className="w-7 h-7 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">How onboarding works</h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                  {i + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="p-8 bg-card border border-border rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-card-foreground mb-3">Ready to apply?</h2>
          <p className="text-muted-foreground mb-6">
            Tell us about your business and we'll find the right acquiring partner for you.
          </p>
          <Button asChild className="min-h-11">
            <Link to="/#contact">Contact Activ8Pay</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HighRiskMerchantAccount;
