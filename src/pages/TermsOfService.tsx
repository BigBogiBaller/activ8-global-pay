import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using Activ8Pay's services, you agree to be bound by these Terms of Service and all applicable 
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services Description</h2>
            <p>
              Activ8Pay provides payment processing solutions and related services including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Card processing services</li>
              <li>Corporate banking solutions</li>
              <li>Chargeback and fraud prevention tools</li>
              <li>Stablecoin payment processing</li>
            </ul>
            <p className="mt-4">
              We reserve the right to modify or discontinue any service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Obligations</h2>
            <p>
              By using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful or fraudulent purposes</li>
              <li>Not interfere with or disrupt our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Fees and Payment</h2>
            <p>
              Service fees will be agreed upon in writing between Activ8Pay and the merchant. All fees are non-refundable 
              unless otherwise specified in your service agreement. We reserve the right to modify our fees with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality on our website are owned by Activ8Pay and are protected by 
              international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, 
              or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Activ8Pay shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising out of or relating to your use of our services. Our total liability 
              shall not exceed the amount paid by you for our services in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Activ8Pay and its officers, directors, employees, and agents from 
              any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation 
              of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time, without notice, 
              for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, 
              or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to 
              conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive 
              jurisdiction of the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes 
              by posting the new Terms on our website. Your continued use of our services after such modifications 
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:solutions@activ8pay.com" className="text-primary hover:underline">solutions@activ8pay.com</a><br />
              Telegram: <a href="https://t.me/activ8pay" className="text-primary hover:underline">@activ8pay</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
