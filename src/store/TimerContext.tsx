import { createContext, ReactNode, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type StartTimerAction = {
  type: "START_TIMERS";
};

type StopTimerAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimerAction | StopTimerAction | AddTimerAction;

type TImersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type TimersProviderProps = {
  children: ReactNode;
};

const TimersContext = createContext<TImersContextValue | null>(null);

const initialState: TimersState = {
  timers: [],
  isRunning: false,
};

function reducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          {
            name: action.payload.name,
            duration: action.payload.duration,
          },
        ],
      };

    case "START_TIMERS":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMERS":
      return {
        ...state,
        isRunning: false,
      };
    default:
      return state;
  }
}

function TimersProvider({ children }: TimersProviderProps) {
  const [{ timers, isRunning }, dispatch] = useReducer(reducer, initialState);

  const contextValue: TImersContextValue = {
    timers,
    isRunning,
    addTimer: (timerData: Timer) => {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers: () => {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers: () => {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={{ ...contextValue }}>
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
