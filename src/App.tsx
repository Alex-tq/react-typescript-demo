import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";

function App() {
  const personName = {
    firstName: "Peter",
    lastName: "Parker",
  };

  const nameList = [
    {
      firstName: "Peter",
      lastName: "Parker",
    },
    {
      firstName: "Peter",
      lastName: "Griffin",
    },
    {
      firstName: "Peter",
      lastName: "Pan",
    },
  ];
  return (
    <div className="App">
      <Greet isLoggedIn={true} name="John Doe" messageCount={12} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>This is a heading</Heading>
    </div>
  );
}

export default App;
