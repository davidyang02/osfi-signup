"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient"; // 👈 make sure this file exists (see below)

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Insert email into Supabase table
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
    return (
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-900">
        <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
            You're on the list!
          </h3>
          <p className="text-green-700 dark:text-green-300">
            We'll notify you when we launch. Check your email for confirmation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 text-base"
          disabled={isLoading}
          required
        />
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="h-12 px-8 text-base font-semibold"
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <p className="text-xs text-muted-foreground text-center">
        No spam. Unsubscribe at any time.
      </p>
    </form>
  );
}
