import { getConactShema } from "../shemas/contact";

export default defineEventHandler(async (event) => {
  const $t = await useTranslation(event);
  const schema = getConactShema($t);
  const body = await readBody(event);

  const parsedData = schema.safeParse(body);

  if (parsedData.error) {
    throw createError({
      statusCode: 400,
      data: {
        messages: parsedData.error.issues.map((issue) => ({
          message: issue.message,
          path: issue.path[0],
        })),
      },
    });
  }

  /**
   * TODO
   * send message with sender to domutala@worcalble.space and to ibntala@gmail.com
   */
});
