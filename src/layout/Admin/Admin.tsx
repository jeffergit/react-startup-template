import React from "react";
import Header from "./AdminHeader";

type Props = {
  children?: React.ReactNode;
};

export default function Admin({ children }: Props) {
  return (
    <div className="c-admin">
      <Header />
      {children}
    </div>
  );
}
