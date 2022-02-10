import React from "react";

type personProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

function Person({ name }: personProps) {
  return <div>{`${name.firstName} ${name.lastName}`}</div>;
}

export default Person;
