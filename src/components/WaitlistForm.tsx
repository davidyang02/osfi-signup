"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import WaitlistFeedback from "@/components/WaitlistFeedback";


export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist_emails").insert([{ email }]);

      if (error) {
        if (error.message.includes("duplicate key")) {
          setError("This email is already on the waitlist.");
        } else {
          console.error(error);
          setError("Something went wrong. Please try again later.");
        }
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setError("Unexpected error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

if (isSubmitted) {
  return <WaitlistFeedback variant="full" email={email}/>;
}




// Compact hero waitlist (inverted & modernized)
return (
  <form
    onSubmit={handleSubmit}
    className="
      w-full flex justify-center
      animate-fade-in
    "
  >
    <div
      className="
        w-full max-w-4xl
        border border-white
        bg-black/60 backdrop-blur-sm
        px-6 py-10 md:px-12
        transition
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1 text-left space-y-3">
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Be among the first to access <strong className="text-white">OpenBSIS.</strong><br/><br/>
            Get notified when we launch and enjoy early access to clean,
            formatted financial data tools.
          </p>

          <p className="text-xs text-gray-400 hidden md:block">
            No spam. Unsubscribe at any time.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1 max-w-sm w-full">
          <div className="flex border border-white">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                flex-1 h-12 text-base
                bg-black/20 text-white placeholder-gray-400
                border-none rounded-none
                focus-visible:ring-0 focus-visible:ring-offset-0
              "
              disabled={isLoading}
              required
            />

            <Button
              type="submit"
              className="
                h-12 px-6
                bg-white text-black font-semibold
                rounded-none hover:bg-gray-200
              "
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>

          {error && <p className="text-sm text-red-400 mt-2">{error}</p>}

          <p className="text-xs text-gray-400 mt-2 md:hidden text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  </form>
);


}


