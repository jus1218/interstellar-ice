import { supabase } from "../../supabase";

const ERROR_CODE_EXISTS = "23505";
// 1 = exitoso, 2 = Fallido, 3 = Informativo

export const saveNewsletterEmail = async (email: string) => {
  const { data, error } = await supabase.from("newsletter").insert({ email });

  if (error?.code === ERROR_CODE_EXISTS)
    return {
      isSuccess: false,
      type:3,
      message: "Correo ya existente",
    };

  if (error)
    return {
      isSuccess: false,
      type:2,
      message: "Error al subscribirse",
    };

  return {
    isSuccess: true,
    type:1,
    message: "Correo guardado",
  };
};
