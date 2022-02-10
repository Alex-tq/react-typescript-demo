import React from "react";

//Defines a type of the expected props params
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      {props.isLoggedIn
        ? `Hello ${props.name} You have ${props.messageCount} messages`
        : `Welcome!`}
    </div>
  );
}

export default Greet;
