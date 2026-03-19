export type TvShow = {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime: number | null;
  premiered: string | null;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
};
