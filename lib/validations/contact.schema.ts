import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const contactSchema = z.object({

  firstName: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-ZÀ-ÿ' -]+$/, "Invalid first name"),
  lastName: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-ZÀ-ÿ' -]+$/, "Invalid last name"),
  organization: z.string().max(100).optional(),
  email: z.string().email(),
  title: z.string().max(100).optional(),
  phone: z
    .string()
    .optional()
    .refine((v) => {
      if (!v) return true;
      const p = parsePhoneNumberFromString(v);
      return !!p?.isValid();
    }, "Invalid phone number"),


  note: z.string().max(1000).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
