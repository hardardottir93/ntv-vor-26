import { LinksFunction } from "@remix-run/node";
import appStyles from "./app.css?url";
import { createContext, useReducer, useContext, useState } from "react";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import {
  CounterContext,
  counterReducer,
  initialCounterState,
} from "./components/Counter";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];

export function meta() {
  return [
    { title: "Remix Theme App" },
    {
      name: "description",
      content: "Simple Remix app with light and dark theme",
    },
  ];
}

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <html lang="en" suppressHydrationWarning data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <CounterContext.Provider value={{ state, dispatch }}>
            <Outlet />
          </CounterContext.Provider>
        </ThemeContext.Provider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Toolbar() {
  return <ThemeButton />;
}

function ThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeButton must be used inside ThemeContext.Provider");
  }

  const { theme, setTheme } = context;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current Theme: {theme}
    </button>
  );
}
