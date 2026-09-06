"use client";

import React, { useMemo, useState } from "react";
import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber } from "libphonenumber-js";

type ApiResponse = {
  ok: boolean;
  ticket?: string;
  error?: string;
  errors?: Record<string, string[] | string>;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    title: "",
    phone: "",
    note: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Fix: PhoneInput (react-international-phone) formate le numéro avec des
  // espaces (ex: "+237 6XX XXX XXX"). Un regex E.164 strict rejetait donc
  // systématiquement le numéro saisi et bloquait le bouton Submit.
  // libphonenumber-js gère nativement ce format.
  const phoneIsValid = useMemo(() => {
    if (!formData.phone) return true; // champ optionnel
    return isValidPhoneNumber(formData.phone);
  }, [formData.phone]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    if (!phoneIsValid) {
      setServerError(
        "Please enter a valid international phone number (e.g. +237 6XX XXX XXX)."
      );
      return;
    }

    setLoading(true);

    try {
      const form = e.currentTarget;
      const payload = Object.fromEntries(new FormData(form));

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: ApiResponse = await res.json();

      if (res.ok && data.ok) {
        setShowSuccess(true);
        form.reset();

        setFormData({
          firstName: "",
          lastName: "",
          organization: "",
          email: "",
          title: "",
          phone: "",
          note: "",
        });

        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        // Affiche la première erreur de champ renvoyée par l'API, sinon l'erreur générale
        const fieldErrors = data.errors ? Object.values(data.errors) : [];
        const firstFieldError = Array.isArray(fieldErrors[0])
          ? fieldErrors[0][0]
          : fieldErrors[0];
        setServerError(
          (firstFieldError as string) || data.error || "Failed to send message."
        );
      }
    } catch (error) {
      console.error(error);
      setServerError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in-up">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-gray-600">
              Thank you for contacting us. We will reply shortly.
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="sm:max-w-5xl max-w-md mx-auto p-4 text-start space-y-4"
        noValidate
      >
        {serverError && (
          <div
            role="alert"
            className="bg-red-50 border border-red-300 text-red-700 rounded p-4 text-sm"
          >
            {serverError}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-xl font-medium mb-1">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
              minLength={2}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-xl font-medium mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
              minLength={2}
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-xl font-medium mb-1">
              Organization
            </label>
            <input
              id="organization"
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xl font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-xl font-medium mb-1">
              Title / Role
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xl font-medium mb-1">
              Phone Number
            </label>

            <PhoneInput
              defaultCountry="cm"
              value={formData.phone}
              onChange={(phone) => setFormData((p) => ({ ...p, phone }))}
              className="w-full"
              inputProps={{ id: "phone" }}
              inputClassName="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />

            {/* IMPORTANT: garantit que FormData envoie "phone" */}
            <input type="hidden" name="phone" value={formData.phone} />

            {!phoneIsValid && (
              <p className="text-sm text-red-600 mt-2">
                Please enter a valid international number (example: +237 6XX XXX XXX).
              </p>
            )}

            <p className="text-sm text-gray-500 mt-2">
              Use international format (country code included).
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="note" className="block text-xl font-medium mb-1">
            Note
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="w-full border-2 rounded p-8 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            rows={8}
            required
            minLength={1}
          />
        </div>

        {/* Honeypot anti-bot : doit rester vide et invisible */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="border-t pt-4 mt-20 border-gray-500 h-[200px]">
          <button
            type="submit"
            disabled={loading || !phoneIsValid}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-15 py-3 mt-2 rounded-full"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          <p className="text-xl mt-8">
            By clicking &quot;submit&quot;, I agree to KTSMobility{" "}
            <u>Terms of Service</u> and <u>Privacy Policy</u>.
          </p>
        </div>
      </form>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
