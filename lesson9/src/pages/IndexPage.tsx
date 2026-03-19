import { useState } from "react";
import { ShowButton } from "@/features/shows/component/ShowButton";
import { ShowCard } from "@/features/shows/component/ShowCard";
import { fetchRandomTvShow } from "@/features/shows/api/fetchRandomTvShow";
import type { TvShow } from "@/features/shows/types/types";

export function IndexPage() {
  const [show, setShow] = useState<TvShow | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchShow = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRandomTvShow();
      setShow(data);
    } catch {
      setError("Failed to fetch TV show.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="mb-4 text-center text-5xl font-bold">Random TV Shows</h1>

      <div className="mb-4">
        <ShowButton onClick={handleFetchShow} />
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {show && <ShowCard show={show} />}
    </section>
  );
}
