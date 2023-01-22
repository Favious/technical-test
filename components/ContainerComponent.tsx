import React from "react";
import styled from "styled-components";
import { Aclonica } from "@next/font/google";
import { Andada_Pro } from "@next/font/google";

const aclonica = Aclonica({ weight: "400", subsets: ["latin"] });
const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

export default function ContainerComponent({ children }: { children: any }) {
  return (
    <>
      {React.cloneElement(children, { ...children.props, aclonica, andadaPro })}
    </>
  );
}
