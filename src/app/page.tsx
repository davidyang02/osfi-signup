import WaitlistForm from "@/components/WaitlistForm";
import SampleReports from "@/components/SampleReports";
import ExcelPreview from "@/components/ExcelPreview";
import WaitlistFormBase from "@/components/WaitlistFormBase";
import ContactSection from "@/components/ContactSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileCheck2,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
  Menu,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Server, Activity, Gauge, Workflow, Layers, Timer, Repeat,Database, Table, Grid3x3, CheckCircle2,
  Rocket, CalendarDays,ShieldCheck, Construction, AlertTriangle
} from "lucide-react";



export default function Home() {
  return (
    <div className="min-h-screen border-x border-black mx-auto max-w-7xl bg-gradient-to-b from-background to-muted/20">

      {/* Header Navigation */}
<header className="sticky top-0 z-50 bg-white border border-black">
  <div className="flex items-stretch h-16 w-full">

{/* Logo as first nav item */}
<div
  className="flex-1 flex items-center justify-center border-r border-black bg-black 
    transition hover:bg-gray-1000 hover: 
    hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
>
  <Link
    href="#top"
    className="text-xl font-bold text-white tracking-tight underline underline-offset-4 decoration-2"
  >
    OpenBSIS
  </Link>
</div>

    {/* Nav Items */}
    <nav className="flex flex-[4]"> 
      <ul className="flex flex-1 items-stretch text-sm font-medium text-gray-800">

        <li className="flex-1 flex items-center justify-center border-l border-black hover:bg-gray-100
          transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            
          <Link href="#features" className="hover:underline underline-offset-4">
            Features
          </Link>
        </li>

        <li className="flex-1 flex items-center justify-center border-l border-black hover:bg-gray-100
          transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <Link href="#product" className="hover:underline underline-offset-4">
            Product
          </Link>
        </li>

                <li className="flex-1 flex items-center justify-center border-l border-black hover:bg-gray-100
          transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <Link href="#samples" className="hover:underline underline-offset-4">
            Samples
          </Link>
        </li>

        <li className="flex-1 flex items-center justify-center border-l border-black hover:bg-gray-100
          transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <Link href="#waitlist" className="hover:underline underline-offset-4">
            Waitlist
          </Link>
        </li>



        <li className="flex-1 flex items-center justify-center border-l border-black hover:bg-gray-100
          transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <Link href="#contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
        </li>

      </ul>
    </nav>

  </div>
</header>













<section className="relative overflow-hidden 
    h-[65vh]           /* mobile */
    md:h-[55vh]        /* tablets & small laptops */
    lg:h-[70vh]        /* large desktops */
    flex items-end
  ">
  {/* Background and overlays stay the same */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/lycs-architecture-U2BI3GMnSSE-unsplash.jpg')" }}
  ></div>
  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 pb-12 md:pb-20 lg:pb-24 w-full">
    <div className="max-w-3xl text-left text-white space-y-5">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Open-Government Data, Formatted
      </h1>

      <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed text-gray-100">
        Stop wrestling with messy OSFI data. Get instant access to clean,
        formatted government financial data in seconds.
      </p>
    </div>

    {/* ✅ Wide success bar or waitlist form */}
    <div className="mt-8 w-full max-w-none">
      <WaitlistFormBase variant="hero" />
    </div>
  </div>
</section>







{/* Features Section */}
<section id="features" className="py-20 md:py-12 bg-white border-t border-b border-black scroll-mt-20">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Built for Open Canada Data
      </h2>
    </div>

    {/* Subheading */}
    <p className="text-gray-700 text-base md:text-lg max-w-3xl mb-12">
      Streamline OSFI and public financial datasets into Excel-ready statements automatically.
    </p>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1 */}

      <div className="bg-black border-4 border-black p-[1px]
       transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
  <div className="border border-white p-8 bg-black flex flex-col space-y-4 min-h-[276px]">
    <div className="text-3xl">
      <Gauge className="w-8 h-8 text-white" />
    </div>

    <h3 className="text-lg font-semibold text-white">
      Always-On Reliability + Instant Performance
    </h3>

    <p className="text-gray-300 text-sm leading-relaxed">
      Never wait for sites or files to load or update.  
          Always-on access to lightweight, pre-loaded files.
          Get formatted balance sheets in 30 seconds, even if OSFI is down.
    </p>
  </div>
</div>


      {/* Card 2 */}

      <div className="bg-black border-4 border-black p-[1px]
       transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
  <div className="border border-white p-8 bg-black flex flex-col space-y-4 min-h-[276px]">
    <div className="text-3xl">
      <Layers className="w-8 h-8 text-white" />
    </div>

    <h3 className="text-lg font-semibold text-white">
      Batch Operations + Time Savings
    </h3>

    <p className="text-gray-300 text-sm leading-relaxed">
      Batch download multiple banks, periods, or statement types at once.  
          No more one-PDF-at-a-time workflows. <br/><br/>
    </p>
  </div>
</div>

      {/* Card 3 */}

      <div className="bg-black border-4 border-black p-[1px]
       transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
  <div className="border border-white p-8 bg-black flex flex-col space-y-4 min-h-[276px]">
    <div className="text-3xl">
      <Grid3x3 className="w-8 h-8 text-white" />
    </div>

    <h3 className="text-lg font-semibold text-white">
      Clean Data + No Data Label Duplicates
    </h3>

    <p className="text-gray-300 text-sm leading-relaxed">
      Data mapped to OSFI historical statements with no duplicates  
          and no manual cleanup required. <br/><br/><br/>
    </p>
  </div>
</div>


{/* Full-width card */}
<div className="bg-black border-4 border-black p-[1px]
       transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
        lg:col-span-3 md:col-span-2">
  <div className="border border-white p-8 bg-black flex flex-col space-y-4">
    <div className="text-3xl">
      <CalendarDays className="w-8 h-8 text-white" />
    </div>

    <h3 className="text-lg font-semibold text-white">
      Ready By January Migration
    </h3>

    <p className="text-gray-300 text-sm leading-relaxed">
      OSFI is retiring its legacy financial data pages and moving all statements to Open Government. 
OpenBSIS automatically restructures the new raw XLS files into standardized, ready-to-analyze 
financial statements, ensuring your workflows remain fully compatible during and after the transition.
    </p>
  </div>
</div>


    </div>
  </div>
</section>




<section
  id="product"
  className="py-24 md:py-20 bg-white border-t border-b border-black scroll-mt-20"
>
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-black underline underline-offset-4 decoration-[3px] decoration-black">
  Turn Disorganized Government Data Into Actionable Intelligence <br/> <br/>
</h2>

      <p className="text-black-700 mt-4">
        We clean, structure, and map financial statements so your team can analyze—not preprocess.
      </p>
    </div>

    {/* Stack the blocks vertically */}
    <div className="flex flex-col gap-16 max-w-6xl mx-auto">
      {/* Problem Block */}
      <div className="flex flex-col border border-black bg-white transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {/* Embedded HTML preview */}
        <div className="w-full h-[600px] border-b border-black bg-white">
          <iframe
            name="before-frame"
            src="/Citibank_Before.htm"
            className="w-full h-full"
            style={{ border: "none" }}
            title="Problem Excel Preview"
            
          ></iframe>
        </div>

{/* Updated Textbox – BEFORE */}
<div className="p-8 text-left space-y-6 bg-[#111213] text-white border-t border-black">
  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <AlertTriangle className="w-6 h-6 text-white-400" />
    <h3 className="text-xl font-semibold">Before</h3>
  </div>

  {/* 2×2 Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm leading-relaxed">
    <div>• Scattered reports buried across multiple OSFI pages and PDFs</div>
    <div>• Manual data cleanup required before any real analysis could begin</div>
    <div>• Irregular update cycles caused missing or outdated figures</div>
    <div>• No traceability or version control for compliance and audits</div>
  </div>
</div>

</div>
      {/* Solution Block */}
      <div className="flex flex-col border border-black bg-white transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {/* Embedded HTML preview */}
        <div className="w-full h-[600px] border-b border-black bg-white">
          <iframe
            name="afters-frame"
            src="/Citibank_After.htm"
            className="w-full h-full"
            style={{ border: "none" }}
            title="Solution Excel Preview"
            
          ></iframe>
        </div>

{/* Updated Textbox – AFTER */}
<div className="p-8 text-left space-y-6 bg-[#111213] text-white border-t border-black">
  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <CheckCircle className="w-6 h-6 text-white-400" />
    <h3 className="text-xl font-semibold">After</h3>
  </div>

  {/* 2×2 Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm leading-relaxed">
    <div>• Unified data hub — search, filter, and compare financials in seconds</div>
    <div>• Consistent, ready-to-use balance sheets with standardized formats</div>
    <div>• Smart alerts for new disclosures and filings — stay audit-ready automatically</div>
    <div>• Built-in compliance visibility with version tracking and data lineage</div>
  </div>
</div>



      </div>
    </div>
  </div>
</section>


<section id="samples"
  className="py-20 md:py-12 bg-white border-t border-b border-black scroll-mt-20">
  <SampleReports />
</section>




{/* Final CTA Section */}
<section
  id="waitlist"
  className="relative py-24 md:py-32 border-t border-b border-white scroll-mt-20 overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/dylan-gillis-KdeqA3aTnBY-unsplash.jpg')" }}
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
      <h2 className="text-3xl md:text-5xl font-bold">
        Ready to Simplify Regulatory Reporting?
      </h2>
      <p className="text-xl text-gray-200">
        Join the waitlist today and be among the first to experience the
        future of government financial data access.
      </p>
      <WaitlistForm />
    </div>
  </div>
</section>





  <ContactSection />




<footer className="border-t bg-black text-white">
  <div className="container mx-auto px-6 py-12">

    {/* TOP — Centered Brand + Description */}
    <div className="text-center max-w-xl mx-auto mb-5">
      <a href="/" className="font-bold text-2xl hover:underline">
        OpenBSIS
      </a>

      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
        Making government financial data accessible to everyone.
      </p>
    </div>

    {/* BOTTOM — Centered 4-Link Row */}
    <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 text-center">

      <div>
        <a href="#features" className="font-semibold text-lg block hover:underline">
          Features
        </a>
        <ul className="space-y-2 text-sm text-muted-foreground"></ul>
      </div>

      <div>
        <a href="#product" className="font-semibold text-lg block hover:underline">
          Product
        </a>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {/* optional submenu */}
        </ul>
      </div>

      <div>
        <a href="#samples" className="font-semibold text-lg block hover:underline">
          Samples
        </a>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {/* optional submenu */}
        </ul>
      </div>


      <div>
        <a href="#waitlist" className="font-semibold text-lg block hover:underline">
          Waitlist
        </a>
        <ul className="space-y-2 text-sm text-muted-foreground"></ul>
      </div>

      <div>
        <a href="#contact" className="font-semibold text-lg block hover:underline">
          Contact
        </a>
        <ul className="space-y-2 text-sm text-muted-foreground"></ul>
      </div>

    </div>

    {/* Copyright */}
    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-muted-foreground">
      © 2025 OpenBSIS. All rights reserved.
    </div>

  </div>
</footer>





    </div>

  );
 }




//       {/* Footer */}
//       <footer className="border-t text-white bg-black">
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             <div className="space-y-4">
//               <h3 className="font-bold text-lg">OpenBSIS</h3>
//               <p className="text-sm text-muted-foreground">
//                 Making government financial data accessible to everyone.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li>Features</li>
//                 <li>Pricing</li>
//                 <li>Documentation</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li>About</li>
//                 <li>Blog</li>
//                 <li>Careers</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Legal</h4>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li>Privacy Policy</li>
//                 <li>Terms of Service</li>
//                 <li>Contact</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t mt-12 pt-8 text-center text-sm">
//             <p>© 2025 OpenBSIS. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }