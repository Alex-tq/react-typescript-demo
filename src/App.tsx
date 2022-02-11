import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

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

      <Oscar>
        <Heading>The Oscar goes to Morgan Freeman</Heading>
      </Oscar>
      <Input
        value={text}
        handleChange={(event) => {
          const { value } = event.target;
          setText(value);
        }}
      />
      <Button
        handleClick={(event, id) => {
          console.log(`clicked ${event.target} ${id}`);
          alert(text);
          setText("");
        }}
      />
    </div>
  );
}

export default App;
