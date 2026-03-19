import { tvShowSchema } from "../schema/tvShowSchema";
import type { TvShow } from "../types/types";

export async function fetchRandomTvShow(): Promise<TvShow> {
  const randomId = Math.floor(Math.random() * 250) + 1;
  const res = await fetch(`https://api.tvmaze.com/shows/${randomId}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch tv show: ${res.statusText}`);
  }

  const data = await res.json();
  return tvShowSchema.parse(data);
}
