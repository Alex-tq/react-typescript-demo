import React from "react";

type OscarTypes = {
  children: React.ReactNode; //"React.ReactNode" comes from the react types package and it's used for React components.
};

function Oscar(props: OscarTypes) {
  return <div>{props.children}</div>;
}

export default Oscar;
