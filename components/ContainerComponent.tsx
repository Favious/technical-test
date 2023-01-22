import React from "react";
import styled from "styled-components";
import { Aclonica } from "@next/font/google";
import { Andada_Pro } from "@next/font/google";
import {
  BiSun,
  BiToggleLeft,
  BiToggleRight,
  BiMoon,
  BiMenu,
} from "react-icons/bi";
import { IoMdMoon } from "react-icons/io";

const aclonica = Aclonica({ weight: "400", subsets: ["latin"] });
const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

export default function ContainerComponent({ children }: { children: any }) {
  return (
    <Container>
      <div className="navbar">
        <div className="mode-toggle">
          <div className="off">
            <BiSun />
          </div>
          <div className="toggle">
            <BiToggleRight />
          </div>
          <div className="on">
            <IoMdMoon />
          </div>
        </div>
        <div className="menu">
          <BiMenu />
        </div>
      </div>
      {React.cloneElement(children, { ...children.props, aclonica, andadaPro })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1.2rem 3rem;
    .mode-toggle {
      display: flex;
      flex-direction: row;
      align-items: center;
      .off {
        color: var(--silver);
        font-size: 1.8rem;
        margin-bottom: 0.45rem;
      }
      .toggle {
        font-size: 3.5rem;
        color: var(--cian);
        &:hover {
          cursor: pointer;
        }
      }
      .on {
        color: var(--cian);
        font-size: 1.8rem;
        margin-bottom: 0.45rem;
      }
      svg {
      }
    }
    .menu {
      padding: 1em;
      svg {
        font-size: 2rem;
        color: var(--cian);
      }
    }
  }
`;
