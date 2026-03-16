import { createContext, useContext, type Dispatch } from "react";

type CounterState = {
  count: number;
};

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined,
);

export type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

type CounterContextType = {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
};

export const initialCounterState: CounterState = {
  count: 0,
};

export function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export function Counter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("Counter must be used inside CounterContext.Provider");
  }

  const { state, dispatch } = context;

  return (
    <div className="card">
      <h2>Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
