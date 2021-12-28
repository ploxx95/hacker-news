import React from "react";
import { NavLink } from "react-router-dom";

type SectionerProps = {
  children: React.ReactNode,
  to: string
}

function Sectioner({ children, to }: SectionerProps) {
  return (
    <NavLink to={to} className="anchor-section" >
      {children}
    </NavLink>
  );
}

export default Sectioner;
