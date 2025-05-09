import Header from "./components/Header";
import Timer from "./components/Timer";
import AddTimer from "./components/AddTimer";
import { TimersProvider } from "./store/TimerContext";

function App() {
  return (
    <TimersProvider>
      <Header />
      <main>
        <Timer />
        <AddTimer />
      </main>
    </TimersProvider>
  );
}

export default App;
