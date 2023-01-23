import React, { useState } from "react";
import styled from "styled-components";
import { Aclonica } from "@next/font/google";
import { Andada_Pro } from "@next/font/google";
import { BiToggleLeft, BiToggleRight, BiMenu, BiX } from "react-icons/bi";
import { IoMdMoon, IoIosSunny } from "react-icons/io";

const aclonica = Aclonica({ weight: "400", subsets: ["latin"] });
const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

const routes = [
  { name: "HOME", route: "" },
  { name: "FIND USERS", route: "" },
  { name: "FIND REPOS", route: "" },
];

export default function ContainerComponent({ children }: { children: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <div className="navbar">
        <div className="mode-toggle">
          <div className="off">
            <IoIosSunny />
          </div>
          <div className="toggle">
            <BiToggleRight />
          </div>
          <div className="on">
            <IoMdMoon />
          </div>
        </div>
        <div className="menu">
          <BiMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-items">
          <div className="x">
            <BiX onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
          {routes.map((route) => (
            <a href="#" className={andadaPro.className}>
              {route.name}
            </a>
          ))}
        </div>
      )}
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
  .menu-items {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    background-color: var(--cian);
    width: 30%;
    height: 38vh;
    padding-top: 5rem;
    a {
      display: block;
      text-align: start;
      padding: 0.8rem;
      padding-left: 5rem;
      color: var(--darkBlue);
      text-decoration: none;
      font-size: 1.5rem;
    }
    .x {
      position: absolute;
      top: 1rem;
      right: 2.8rem;
      padding: 1em;
      svg {
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .navbar {
      padding: 1rem 1.3rem;
      align-items: center;
      .mode-toggle {
        margin-top: 0.6rem;
        .off {
          font-size: 1.5rem;
        }
        .toggle {
          margin-top: 0.1rem;
        }
        .on {
          font-size: 1.3rem;
        }
      }
      .menu {
        padding: 0.2rem;
        svg {
          font-size: 2.6rem;
          color: var(--cian);
        }
      }
    }
  }
`;
