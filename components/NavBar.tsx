import React, { useState } from "react";
import styled from "styled-components";
import { Andada_Pro } from "@next/font/google";
import { BiToggleLeft, BiToggleRight, BiMenu, BiX } from "react-icons/bi";
import { IoMdMoon, IoIosSunny } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  { name: "HOME", route: "/" },
  { name: "FIND USERS", route: "/find_users" },
  { name: "FIND REPOS", route: "/find_repos" },
];

const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

const menuVariants = {
  open: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      stiffness: 260,
      damping: 20,
    },
  },
  closed: {
    scale: 0,
    x: "34%",
    y: "-34%",
    transition: {
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <Navbar>
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
      <motion.div
        className="menu-items"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="x">
          <BiX onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        {routes.map((route) => (
          <Link href={route.route} className={andadaPro.className}>
            {router.pathname === route.route ? ">" : ""} {route.name}
          </Link>
        ))}
      </motion.div>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  position: relative;
  z-index: 2;
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
    width: 30vw;
    height: 38vh;
    padding-top: 5rem;
    border-radius: 0.6rem;
    a {
      display: block;
      text-align: start;
      padding: 0.8rem;
      padding-left: 5rem;
      color: var(--darkBlue);
      text-decoration: none;
      font-size: 1.5rem;
      user-select: none;
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
    .menu-items {
      height: 28vh;
      padding-top: 5rem;
      min-width: 195px;
      width: 40%;
      a {
        display: block;
        text-align: start;
        padding: 0.6rem;
        padding-left: 2rem;
        color: var(--darkBlue);
        text-decoration: none;
        font-size: 1.2rem;
        user-select: none;
      }
      .x {
        position: absolute;
        top: 1rem;
        right: 1rem;
        padding: 1em;
        svg {
          font-size: 2.6rem;
        }
      }
    }
  }
`;
