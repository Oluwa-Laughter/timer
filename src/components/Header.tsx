import Button from "./UI/Button.tsx";
import { useTimers } from "../store/TimerContext.tsx";

export default function Header() {
  const { startTimers, stopTimers, isRunning } = useTimers();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning ? stopTimers : startTimers}>
        {isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
