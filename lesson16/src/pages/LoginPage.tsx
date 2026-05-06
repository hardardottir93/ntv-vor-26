import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  }

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <p>Click the button to log in.</p>

      <button
        type="button"
        onClick={handleLogin}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Log in
      </button>
    </section>
  );
}
