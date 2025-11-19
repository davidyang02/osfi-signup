"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { MapPin, Mail, Phone, Clock, Calendar } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    industry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const { data, error } = await supabase.from("contact_messages").insert([formData]);

    if (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } else {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        country: "",
        industry: "",
        message: "",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white border-t border-b border-black scroll-mt-20"
    >
      <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Left side: contact info */}
        <div className="space-y-6 border-r border-black pr-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Reach Out</h2>
          <p className="text-gray-700 max-w-sm">
            Fill in the form or use the contact info below to connect with us.
          </p>

          <div className="space-y-5 pt-6 text-sm text-gray-800">

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5" />
              <p>openbsis@outlook.com</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5" />
              <p>Monday – Friday | 9:00 AM – 6:00 PM EST</p>
            </div>
          </div>
        </div>

        {/* Right side: form */}
        <form onSubmit={handleSubmit} className="space-y-6">
{success ? (
  <div className="p-10 border border-black bg-white text-center space-y-6 animate-fade-in">
    <h2 className="text-2xl md:text-3xl font-bold text-black">
      Thank You for Reaching Out!
    </h2>
    <p className="text-gray-700 max-w-xl mx-auto">
      We've received your message and will get back to you as soon as possible.
    </p>
    <p className="text-gray-700 max-w-2xl mx-auto">
      Our team is reviewing your request, and we’ll be in touch shortly.
      In the meantime, feel free to explore more about our services or connect with us
      for any urgent inquiries.
    </p>
    <div className="flex justify-center gap-4 pt-4">
      <a
        href="#top"
        className="px-6 py-3 bg-black text-white text-sm font-semibold border border-black 
        transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        Back To Home
      </a>
      <a
        href="#features"
        className="px-6 py-3 bg-white text-black text-sm font-semibold border border-black
        transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        Explore Our Services
      </a>
    </div>
  </div>
) : (
  

            <>
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-black">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-black p-3 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-black p-3 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-black">Company</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-black p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">Country</label>
                  <input
                    name="country"
                    type="text"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-black p-3 text-sm"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-black">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full border border-black p-3 pr-6 text-sm"
                  >
                    <option value="">Select your industry</option>
                    <option>Banking & Financial Services</option>
                    <option>Investment Management / Asset Management{"\u00A0\u00A0"} {"\u00A0\u00A0"}</option>
                    <option>Insurance</option>
                    <option>Accounting & Audit</option>
                    <option>Consulting</option>
                    <option>Technology / Software</option>
                    <option>Government / Public Sector</option>
                    <option>Education & Research</option>
                    <option>Real Estate</option>
                    <option>Professional Services</option>
                    <option>Non-Profit / NGO</option>
                    <option>Other</option>

                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-black">How can we help?</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your enterprise needs"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-black p-3 text-sm"
                  required
                ></textarea>
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-black text-white py-3 text-sm font-semibold hover:bg-800 
                 transition hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get in touch"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
