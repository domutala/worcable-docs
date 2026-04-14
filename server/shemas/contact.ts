import * as z from "zod";

export function getConactShema($t: (str: string) => string) {
  const schema = z.object({
    firstName: z
      .string($t("contacts.form.firstName.errors.required"))
      .min(2, $t("contacts.form.firstName.min")),
    lastName: z
      .string($t("contacts.form.lastName.errors.required"))
      .min(2, $t("contacts.form.lastName.errors.min")),

    email: z.email($t("contacts.form.email.errors.invalid")),

    message: z
      .string($t("contacts.form.message.required"))
      .min(10, $t("contacts.form.message.errors.min"))
      .max(1000, $t("contacts.form.message.errors.max")),

    companySize: z.enum(
      ["0-20", "21-50", "51-250", "+250"],
      $t("contacts.form.companySize.errors.invalid")
    ),

    companyName: z
      .string($t("contacts.form.companyName.errors.required"))
      .min(1, $t("contacts.form.companyName.errors.required")),
  });

  return schema;
}

export function getBookDemoSchema($t: (str: string) => string) {
  let contactSchema = getConactShema($t);

  const schema = contactSchema.omit({ message: true });

  return schema;
}
