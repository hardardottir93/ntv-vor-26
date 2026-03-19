import type { TvShow } from "../types/types";

type ShowCardProps = {
  show: TvShow;
};

export function ShowCard({ show }: ShowCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="p-4">
          {show.image && (
            <div className="flex h-[500px] items-center justify-center rounded-lg bg-gray-100 p-4">
              <img
                src={show.image.original}
                alt={show.name}
                className="h-full w-full object-contain"
              />
            </div>
          )}

          <h2 className="mt-4 text-3xl font-bold">{show.name}</h2>

          <p className="mt-3 text-sm text-gray-600">
            {show.runtime ?? "N/A"} minutes
          </p>
        </div>

        <div className="p-4">
          <div className="mb-4 grid gap-2 text-sm">
            <p>
              <span className="font-semibold">Rating:</span>{" "}
              {show.rating.average ?? "N/A"}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {show.status}
            </p>
            <p>
              <span className="font-semibold">Premiered:</span>{" "}
              {show.premiered ?? "N/A"}
            </p>
          </div>

          <div className="border-t pt-3">
            <h3 className="mb-2 font-semibold">Genres</h3>
            <ul className="space-y-2 text-sm">
              {show.genres.map((genre) => (
                <li
                  key={genre}
                  className="flex justify-between border-b pb-1 text-gray-700"
                >
                  <span>{genre}</span>
                </li>
              ))}
            </ul>
          </div>

          {show.summary && (
            <div className="mt-6 border-t pt-3">
              <h3 className="mb-2 font-semibold">Summary</h3>
              <div
                className="text-sm leading-6 text-gray-700"
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
