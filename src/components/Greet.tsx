import React from "react";

//Defines a type of the expected props params
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;

  return (
    <div>
      {props.isLoggedIn
        ? `Hello ${props.name} You have ${messageCount} messages`
        : `Welcome!`}
    </div>
  );
}

export default Greet;
