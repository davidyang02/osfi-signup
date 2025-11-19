"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function WaitlistFeedback({
  variant = "compact", // "compact" for hero, "full" for normal waitlist
}: {
  variant?: "compact" | "full";
}) {
  const [feedback, setFeedback] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from("waitlist_feedback")
      .insert([{ feedback }]);
    if (!error) setFeedbackSubmitted(true);
  };

  /* -------------------------------------------
      SUCCESS STATE
  -------------------------------------------- */

if (feedbackSubmitted) {
  if (variant === "compact") {
    // Compact success (with key so animation triggers)
    return (
      <div
        key="compact-success"
        className="w-full flex justify-center animate-fade-in
        transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0)]"
      >
        <div className="w-full max-w-4xl border border-white bg-black/70 backdrop-blur-sm">
          <div className="px-6 py-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 stroke-white" />
            <p className="text-xs md:text-sm text-gray-100 leading-relaxed">
              Thanks for your feedback — your input helps shape{" "}
              <span className="font-semibold">OpenBSIS</span>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Full success layout (with key so animation triggers)
  return (
    <div
      key="full-success"
      className="w-full border border-white bg-black/70 text-white rounded-none animate-fade-in backdrop-blur-sm
      transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-3xl mx-auto px-8 py-10 text-center space-y-6">
        <CheckCircle2 className="w-10 h-10 stroke-white mx-auto" />

        <h2 className="text-2xl font-bold">Thanks for Your Feedback!</h2>

        <p className="max-w-xl mx-auto leading-relaxed text-gray-200">
          Your input helps us improve <span className="font-semibold">OpenBSIS</span>.
          We're building better tools based on what matters most to you.
        </p>
      </div>
    </div>
  );
}



  /* -------------------------------------------
      FORM STATE
  -------------------------------------------- */

if (variant === "compact") {
  return (
    <div className="w-full flex justify-center animate-fade-in">
      <div className="w-full max-w-3xl border border-white bg-black/60 backdrop-blur-sm rounded-none transition
                      hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        
        <div className="px-6 py-8 md:py-10 flex flex-col md:flex-row gap-10 md:items-center">
          
          {/* Left */}
          <div className="flex-1 space-y-3 text-left">
            <h2 className="text-2xl font-bold text-white">
              You’re on the Waitlist!
            </h2>

            <p className="text-gray-200 text-sm md:text-base">
              Before you go — we’d love to learn more about how you handle
              government data today.
            </p>

            <p className="text-gray-200 text-sm md:text-base">
              How do you currently manage government financial data?  
              What would make that process easier for you?
            </p>
          </div>

          {/* Right */}
          <form
            onSubmit={handleFeedbackSubmit}
            className="flex-1 space-y-3 w-full"
          >
            <textarea
              rows={3}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full border border-white bg-black/20 text-white p-3 text-sm placeholder-gray-400"
            />

            <Button className="w-full bg-white text-black font-semibold hover:bg-gray-200">
              Submit Feedback
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}


// FULL VERSION (restyled, black + transparent)
return (
  <div
    className="flex flex-col items-center text-center gap-6 px-8 py-10 
               w-full max-w-3xl mx-auto
               border border-white bg-black/60 backdrop-blur-sm rounded-none
               animate-fade-in transition 
               hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
  >
    <h2 className="text-2xl font-bold text-white">
      You’re on the Waitlist!
    </h2>

    <p className="text-gray-200 max-w-xl mx-auto">
      Before you go — we’d love to learn a bit more about you.
    </p>

    <p className="text-gray-200 max-w-xl mx-auto leading-relaxed">
      How are you currently managing government financial data?  
      What would make that process easier for you?
    </p>

    <form onSubmit={handleFeedbackSubmit} className="w-full max-w-xl space-y-4">
      <textarea
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full border border-white bg-black/20 text-white p-3
                   placeholder-gray-400"
      />
      <Button className="w-full bg-white text-black font-semibold hover:bg-gray-200">
        Submit Feedback
      </Button>
    </form>
  </div>
);

}
