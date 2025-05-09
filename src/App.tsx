import Header from "./components/Header";
import Timer from "./components/Timer";
import AddTimer from "./components/AddTimer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Timer />
        <AddTimer />
      </main>
    </>
  );
}

export default App;
