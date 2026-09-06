import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

/**
 * Schéma unique de validation du formulaire de contact.
 * Utilisé à la fois côté client (ContactForm.tsx) et côté serveur (route.ts)
 * pour garantir une validation identique des deux côtés.
 */
export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50)
    .regex(/^[a-zA-ZÀ-ÿ' -]+$/, "Invalid first name"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50)
    .regex(/^[a-zA-ZÀ-ÿ' -]+$/, "Invalid last name"),

  organization: z.string().trim().max(150).optional().or(z.literal("")),

  title: z.string().trim().max(150).optional().or(z.literal("")),

  email: z.string().trim().toLowerCase().email("Invalid email address."),

  // Le PhoneInput (react-international-phone) renvoie un numéro avec des
  // espaces (ex: "+237 6XX XXX XXX"), pas du E.164 brut.
  // libphonenumber-js gère nativement ce format, contrairement à un regex E.164 strict.
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((v) => {
      if (!v) return true; // champ optionnel
      const p = parsePhoneNumberFromString(v);
      return !!p?.isValid();
    }, "Invalid phone number. Use international format (e.g. +237 6XX XXX XXX)."),

  note: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(8000, "Message is too long."),

  // Honeypot anti-bot : doit rester vide, jamais rempli par un humain
  company: z.string().max(0, "Bot detected.").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
