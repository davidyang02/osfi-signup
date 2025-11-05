import WaitlistForm from "@/components/WaitlistForm";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileCheck2,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              🚀 Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Government Financial Data,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Finally Simple
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stop wrestling with messy regulatory reports. Get instant access
              to clean, formatted government financial data in seconds.
            </p>
            <div className="pt-6">
              <WaitlistForm />
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Free early access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need, Nothing You Don't
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform hours of data wrangling into seconds of insight
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                <FileCheck2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Easy Access</h3>
              <p className="text-muted-foreground">
                One unified portal for all regulatory reports. No more hunting
                across dozens of government websites.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Auto-Formatting</h3>
              <p className="text-muted-foreground">
                Messy PDFs and spreadsheets transformed into clean,
                machine-readable formats instantly.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-950 flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Updates</h3>
              <p className="text-muted-foreground">
                Get notified the moment new reports are published. Stay ahead
                of the curve automatically.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950 flex items-center justify-center">
                <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Compliance Ready</h3>
              <p className="text-muted-foreground">
                Built-in tracking and audit trails. Know exactly when and where
                you accessed every document.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              From Chaos to Clarity
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
                <div className="flex items-start gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold">Before</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      Hours spent hunting for documents across 50+ government
                      websites
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      Inconsistent formats requiring manual data entry and
                      reformatting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      Missing critical updates due to irregular publishing
                      schedules
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      Compliance nightmares with no audit trail of accessed
                      data
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Solution */}
              <Card className="p-8 border-2 border-green-500/20 bg-green-500/5">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold">After</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      •
                    </span>
                    <span>
                      All documents in one searchable portal – find what you
                      need in seconds
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      •
                    </span>
                    <span>
                      Standardized formats ready for immediate analysis and
                      integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      •
                    </span>
                    <span>
                      Automatic alerts delivered to your inbox when new reports
                      drop
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400">
                      •
                    </span>
                    <span>
                      Complete audit logs and compliance tracking built right
                      in
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Finance Professionals
              </h2>
              <p className="text-lg text-muted-foreground">
                Join hundreds of analysts, compliance officers, and researchers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-yellow-500">
                    {"★★★★★"}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "This tool would save our team at least 10 hours a week.
                    Can't wait for launch!"
                  </p>
                  <div className="text-sm font-semibold">
                    — Sarah M., Compliance Director
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-yellow-500">
                    {"★★★★★"}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Finally someone is solving this problem. The current
                    process is absolutely painful."
                  </p>
                  <div className="text-sm font-semibold">
                    — James K., Financial Analyst
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-yellow-500">
                    {"★★★★★"}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Game changer for regulatory research. This is exactly what
                    we need."
                  </p>
                  <div className="text-sm font-semibold">
                    — Michael T., Research Lead
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Simplify Regulatory Reporting?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the waitlist today and be among the first to experience the
              future of government financial data access.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">RegData</h3>
              <p className="text-sm text-muted-foreground">
                Making government financial data accessible to everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 RegData. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}