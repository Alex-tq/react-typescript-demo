import { lstat } from "fs";
import React from "react";

type PersonListTypes = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

function PersonList({ names }: PersonListTypes) {
  return (
    <div>
      {names.map((name) => (
        <h2 key={name.lastName}>
          {name.firstName} {name.lastName}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
