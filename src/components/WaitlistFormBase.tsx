"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";
import WaitlistFeedback from "@/components/WaitlistFeedback";

interface WaitlistFormBaseProps {
  variant?: "hero" | "section"; email?: string;
  
}

export default function WaitlistFormBase({ variant = "section" }: WaitlistFormBaseProps) {
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
      // ⭐ UPDATED: Insert email + new nullable fields
      const { error } = await supabase.from("waitlist_emails").insert([{
        email,
        feedback: null,
        contact_opt_in: null,
      }]);

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

  // Show feedback prompt after email submission
  if (isSubmitted) {
    return <WaitlistFeedback variant="compact" email={email} />;
  }

  const inputClasses =
    variant === "hero"
      ? "flex-1 h-12 text-base rounded-none border border-white/40 bg-white/20 text-white placeholder:text-white/70 focus-visible:ring-0"
      : "flex-1 h-12 text-base border-none rounded-none focus-visible:ring-0";

  const buttonClasses =
    variant === "hero"
      ? "h-12 px-6 bg-white text-black rounded-none hover:bg-gray-200"
      : "h-12 px-6 bg-black text-white rounded-none hover:bg-gray-900";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
          disabled={isLoading}
          required
        />
        <Button type="submit" className={buttonClasses} disabled={isLoading}>
          {isLoading ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>

      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      {variant === "section" && (
        <p className="text-xs text-gray-500 mt-2 text-center md:text-left">
          No spam. Unsubscribe at any time.
        </p>
      )}
    </form>
  );
}
