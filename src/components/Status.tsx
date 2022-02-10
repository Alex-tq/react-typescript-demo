import React from "react";

type StatusProp = {
  status: "loading" | "success" | "error";
};

function Status(props: StatusProp) {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfylly!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default Status;
