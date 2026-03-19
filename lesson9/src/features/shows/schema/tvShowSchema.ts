import { z } from "zod";

export const tvShowSchema = z.object({
  id: z.number(),
  name: z.string(),
  genres: z.array(z.string()),
  status: z.string(),
  runtime: z.number().nullable(),
  premiered: z.string().nullable(),
  rating: z.object({
    average: z.number().nullable(),
  }),
  image: z
    .object({
      medium: z.string(),
      original: z.string(),
    })
    .nullable(),
  summary: z.string().nullable(),
});
