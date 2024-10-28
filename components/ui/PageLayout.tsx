import React, { ReactNode } from "react";
import HeaderComponent from "./HeaderComponent";

type Props = {
  children: ReactNode;
};

export default function PageLayout({ ...props }: Props) {
  return (
    <div className="grid">
      <HeaderComponent />
      {props.children}
    </div>
  );
}
