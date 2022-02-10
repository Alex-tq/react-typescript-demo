import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  const personName = {
    firstName: "Peter",
    lastName: "Parker",
  };

  return (
    <div className="App">
      <Greet isLoggedIn={true} name="John Doe" messageCount={12} />
      <Person name={personName} />
    </div>
  );
}

export default App;
