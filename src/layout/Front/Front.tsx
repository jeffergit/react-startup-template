import React from "react";
import FrontHeader from "./FrontHeader";

type Props = {
  children?: React.ReactNode;
};

export default function Front({ children }: Props) {
  return (
    <div className="front">
      <FrontHeader />
      {children}
    </div>
  );
}
