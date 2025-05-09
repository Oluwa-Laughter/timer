import Button from "./UI/Button.tsx";
import { useTimers } from "../store/TimerContext.tsx";

export default function Header() {
  const timers = useTimers();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>Stop Timers</Button>
    </header>
  );
}
