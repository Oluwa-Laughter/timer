import Header from "./components/Header";
import AddTimer from "./components/AddTimer";
import { TimersProvider } from "./store/TimerContext";
import Timers from "./components/Timers";

function App() {
  return (
    <TimersProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersProvider>
  );
}

export default App;
