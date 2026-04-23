import { useQuery } from "@tanstack/react-query";
//const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";
const API_URL = "https://jsonplaceholder.typicode.com/does-not-exist";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json() as Promise<Post[]>;
}

export function PostsReactQuery() {
  // TODO: Fetch the same posts, but using React Query (@tanstack/react-query).
  //
  // Requirements:
  // 1. Write a `fetchPosts` function (outside the component) that:
  //    - await fetch(API_URL)
  //    - if !res.ok, throws new Error(`HTTP ${status}`)
  //    - returns res.json() typed as Post[]
  //    (React Query expects the fetcher to THROW on failure — that's how it
  //    routes the error into the `error` field and into QueryCache.onError.)
  //
  // 2. Use useQuery with:
  //    - queryKey: ['posts']
  //    - queryFn: fetchPosts
  //    - retry: false  (so your error UI appears instantly during testing,
  //      instead of React Query retrying 3 times first)
  //
  // 3. Destructure { data, error, isError, isLoading, refetch } from useQuery.
  //
  // 4. Render:
  //    - If isError: show a red fallback box with {error.message} AND a
  //      "Try again" button that calls refetch().
  //    - If isLoading or !data: show "Loading...".
  //    - Otherwise: map posts and render each <h3>{title}</h3><p>{body}</p>.
  //
  // You should NOT need to call logger.error in this file — the global
  // QueryCache.onError you wired in App.tsx will handle that for you.

  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    retry: false,
  });

  if (isError) {
    return (
      <div className="rounded-md border border-red-500 bg-red-50 p-4 text-red-700">
        <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
        <button
          onClick={() => refetch()}
          className="mt-2 rounded border px-3 py-2 text-left hover:bg-gray-50"
        >
          Try again
        </button>
      </div>
    );
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="mb-4">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
