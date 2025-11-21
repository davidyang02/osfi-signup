"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface WaitlistFeedbackProps {
  variant?: "compact" | "full";
  email?: string;
}

export default function WaitlistFeedback({
  variant = "compact",
  email
}: WaitlistFeedbackProps) {

  const [feedback, setFeedback] = useState("");
  const [step, setStep] =
    useState<"feedback" | "optin" | "done">("feedback");
  const [loading, setLoading] = useState(false);

  const canSubmitFeedback = Boolean(email);

  /* -------------------------------------------
      STEP 1 — SAVE FEEDBACK
  -------------------------------------------- */
  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Error: Missing email. Cannot save feedback.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("waitlist_emails")
      .update({ feedback })
      .eq("email", email);

    setLoading(false);

    if (error) {
      console.error("Feedback update failed:", error);
      alert("Error saving feedback.");
      return;
    }

    // Move to YES/NO screen
    setStep("optin");
  };

  /* -------------------------------------------
      STEP 2 — CONTACT OPT-IN (YES / NO)
  -------------------------------------------- */
  const handleOptIn = async (value: boolean) => {
    if (!email) return;

    setLoading(true);

    const { error } = await supabase
      .from("waitlist_emails")
      .update({ contact_opt_in: value })
      .eq("email", email);

    setLoading(false);

    if (error) {
      console.error("Opt-in update failed:", error);
      alert("Error saving choice.");
      return;
    }

    setStep("done");
  };

  /* -------------------------------------------
      RENDER BLOCK — WITH ANIMATION KEY
  -------------------------------------------- */
  return (
    <div key={step} className="animate-fade-in w-full">
      {step === "feedback" && (
        variant === "compact" ? (
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl border border-white bg-black/60 backdrop-blur-sm transition">
              <div className="px-6 py-8 flex flex-col md:flex-row gap-10">
                
                {/* Left */}
                <div className="flex-1 space-y-3 text-left">
                  <h2 className="text-2xl font-bold text-white">You’re on the Waitlist!</h2>
                  <p className="text-gray-200 text-sm">
                    Before you go — we’d love to learn more about how you handle government data today.
                  </p>
                  <p className="text-gray-200 text-sm">
                    How do you currently manage government financial data? What would make that process easier for you?
                  </p>
                </div>

                {/* Right */}
                <form onSubmit={handleFeedbackSubmit} className="flex-1 space-y-3 w-full">
                  <textarea
                    rows={3}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your thoughts..."
                    disabled={!canSubmitFeedback}
                    className="w-full border border-white bg-black/20 text-white p-3 text-sm placeholder-gray-400"
                  />

                  <Button
                    className="w-full bg-white text-black font-semibold hover:bg-gray-200"
                    disabled={!canSubmitFeedback || loading}
                  >
                    {loading ? "Saving..." : "Submit Feedback"}
                  </Button>
                </form>

              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col items-center text-center gap-6 px-8 py-10 
                      w-full max-w-3xl mx-auto border border-white 
                      bg-black/60 backdrop-blur-sm">

            <h2 className="text-2xl font-bold text-white">
              You’re on the Waitlist!
            </h2>

            <p className="text-gray-200 max-w-xl mx-auto">
              Before you go — we’d love to learn a bit more about you.
            </p>

            <form onSubmit={handleFeedbackSubmit} className="w-full max-w-xl space-y-4">
              <textarea
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts..."
                disabled={!canSubmitFeedback}
                className="w-full border border-white bg-black/20 text-white p-3"
              />

              <Button
                className="w-full bg-white text-black font-semibold hover:bg-gray-200"
                disabled={!canSubmitFeedback || loading}
              >
                {loading ? "Saving..." : "Submit Feedback"}
              </Button>
            </form>
          </div>
        )
      )}

      {/* -------------------------------------------
          STEP 2 — YES / NO OPT-IN
      -------------------------------------------- */}
      {step === "optin" && (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl border border-white bg-black/70 backdrop-blur-sm p-8 text-center space-y-6">

            <h2 className="text-xl font-bold text-white">
              Would you like us to contact you about your feedback?
            </h2>

            <p className="text-gray-300 text-sm max-w-md mx-auto">
              If you select yes, we may reach out to better understand your needs.
            </p>

            <div className="flex justify-center gap-4">
              <Button
                className="bg-white text-black px-6 py-2 rounded-none hover:bg-gray-200"
                onClick={() => handleOptIn(true)}
                disabled={loading}
              >
                Yes
              </Button>

              <Button
                className="bg-black border border-white text-white px-6 py-2 rounded-none hover:bg-gray-800"
                onClick={() => handleOptIn(false)}
                disabled={loading}
              >
                No
              </Button>
            </div>

          </div>
        </div>
      )}

      {/* -------------------------------------------
          STEP 3 — FINAL THANK YOU
      -------------------------------------------- */}
      {step === "done" && (
        variant === "compact" ? (
          <div className="w-full flex justify-center">
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
        ) : (
          <div className="w-full border border-white bg-black/70 text-white">
            <div className="max-w-3xl mx-auto px-8 py-10 text-center space-y-6">
              <CheckCircle2 className="w-10 h-10 stroke-white mx-auto" />
              <h2 className="text-2xl font-bold">Thanks for Your Feedback!</h2>
              <p className="max-w-xl mx-auto text-gray-200">
                Your input helps us improve <span className="font-semibold">OpenBSIS</span>.
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
