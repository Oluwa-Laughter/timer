import Container from "./UI/Container.tsx";
import { useTimers, type Timer as TimerProps } from "../store/TimerContext.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);

  const [remainingTime, setRemaingTime] = useState(duration * 1000);

  const { isRunning } = useTimers();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(
    function () {
      let timer: number;
      if (isRunning) {
        timer = setInterval(function () {
          setRemaingTime((prevTime) => prevTime - 50);
        }, 50);
        interval.current = timer;
      } else if (interval.current) {
        clearInterval(interval.current);
      }

      return () => clearInterval(timer);
    },
    [isRunning]
  );

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
