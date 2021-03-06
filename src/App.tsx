import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import User from "./components/User";
import Counter from "./components/Counter";
import Box from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";
import User2 from "./context/User";
import MutableRef from "./ref/MutableRef";
import CounterClass from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restrictions/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";
import { CustomComponents } from "./components/html/CustomComponents";
import { Text } from "./components/polymorphic/Text";

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
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User2 />
      </UserContextProvider>
      <MutableRef />

      <CounterClass message={"Counter is"} />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={["spiderman", "batman", "deadpool"]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <RandomNumber value={9} isPositive />
      <Toast position={"center"} />
      <CustomButton variant="primary">Button Label</CustomButton>
      <CustomInput value="test" />
      <CustomComponents name="Alex" isLoggedIn />

      <Text as={"h1"} size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragrapg
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
