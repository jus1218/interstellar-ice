import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { saveNewsletterEmail } from "../newsletter/services/subscribe";
// Las acciones se ejecutan en el backend y no en el cliente
export const server = {
  newsletter: defineAction({
    input: z.object({
      email: z.string().email("Lo siento, el email no es valido"),
    }),
    async handler({ email }) {
      if (email === "test@test.com") {
        throw new Error("Error, intenta con otro correo");
      }

      const { isSuccess, message, type } = await saveNewsletterEmail(email);

      if (type === 2) {
        throw new Error(message);
      }

      return {message, type};
    },
  }),
};
