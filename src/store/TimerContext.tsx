import { createContext, ReactNode, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TImersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type TimersProviderProps = {
  children: ReactNode;
};

const TimersContext = createContext<TImersContextValue | null>(null);

const initialState: TImersContextValue = {
  timers: [],
  isRunning: false,
  addTimer(timerData) {},
  startTimers() {},
  stopTimers() {},
};

function reducer() {}

function TimersProvider({ children }: TimersProviderProps) {
  const {} = useReducer(reducer, initialState);

  return (
    <TimersContext.Provider value={initialState}>
      {children}
    </TimersContext.Provider>
  );
}

function useTimers() {
  const context = useContext(TimersContext);
  if (!context) {
    throw new Error("useTimers must be used within a TimersProvider");
  }
  return context;
}

export { TimersProvider, TimersContext, useTimers };
