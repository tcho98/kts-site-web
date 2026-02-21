"use client";

import React, { useMemo, useState } from "react";
import { PhoneInput } from "react-international-phone";

const E164_REGEX = /^\+[1-9]\d{7,14}$/; // format international strict

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

  const phoneIsValid = useMemo(() => {
    if (!formData.phone) return true; // si phone optionnel
    return E164_REGEX.test(formData.phone);
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

    // bloque l'envoi si numéro invalide
    if (!phoneIsValid) {
      alert("❌ Please enter a valid international phone number (e.g. +14155552671).");
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

      if (res.ok) {
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
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ An error occurred.");
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
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-xl font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-xl font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-xl font-medium mb-1">Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xl font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-xl font-medium mb-1">Title / Role</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xl font-medium mb-1">Phone Number</label>

            <PhoneInput
              defaultCountry="cm"
              value={formData.phone}
              onChange={(phone) => setFormData((p) => ({ ...p, phone }))}
              className="w-full"
              inputClassName="w-full border-2 rounded p-4 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            />

            {/* IMPORTANT: garantit que FormData envoie "phone" */}
            <input type="hidden" name="phone" value={formData.phone} />

            {!phoneIsValid && (
              <p className="text-sm text-red-600 mt-2">
                Please enter a valid international number (example: +14155552671).
              </p>
            )}

            <p className="text-sm text-gray-500 mt-2">
              Use international format (country code included).
            </p>
          </div>
        </div>

        <div>
          <label className="block text-xl font-medium mb-1">Note</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="w-full border-2 rounded p-8 hover:border-blue-500 focus:border-blue-500 outline-none transition"
            rows={8}
          />
        </div>

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