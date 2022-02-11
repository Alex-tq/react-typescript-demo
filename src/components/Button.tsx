import React from "react";

type ButtonTypes = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonTypes) {
  return (
    <div>
      <button
        onClick={(event) => {
          props.handleClick(event, 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Button;
