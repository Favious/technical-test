import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Andada_Pro } from "@next/font/google";
import { BiMenu, BiX } from "react-icons/bi";
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
  const [darkTheme, setDarkTheme] = useState(
    typeof window !== "undefined" &&
      window.localStorage.getItem("theme") === "dark"
      ? true
      : false
  );

  const handleToggle = (event: any) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const initialColorValue = root.style.getPropertyValue(
        "--initial-color-mode"
      );
      setDarkTheme(initialColorValue === window.localStorage.getItem("theme"));
    }
  }, []);
  return (
    <Navbar>
      <div className="navbar">
        <div className="mode-toggle">
          <div className={!darkTheme ? "on" : "off"}>
            <IoIosSunny />
          </div>
          <div className="toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className={darkTheme ? "on" : "off"}>
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
        {routes.map((route, index) => (
          <Link href={route.route} className={andadaPro.className} key={index}>
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
      gap: 0.4rem;
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
        .switch {
          position: relative;
          display: flex;
          width: 50px;
          height: 30px;
          margin-bottom: 0.8rem;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--cian);
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        input:checked + .slider {
          background-color: var(--cian);
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #33f321;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(20px);
          -ms-transform: translateX(20px);
          transform: translateX(20px);
        }

        .slider {
          border-radius: 34px;
        }

        .slider:before {
          border-radius: 50%;
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
        color: var(--darkBlue);
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
          .switch {
            width: 45px;
            height: 25px;
          }

          .slider:before {
            height: 18px;
            width: 18px;
          }
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
