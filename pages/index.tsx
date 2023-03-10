import Head from "next/head";
import NavBar from "@/components/NavBar";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { Andada_Pro } from "@next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Technical Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="title">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            variants={{
              animation: {
                y: [30, 15],
                transition: {
                  yoyo: Infinity,
                  duration: 2,
                  delay: 1,
                },
              },
            }}
            initial="initial"
            animate="animation"
          >
            HELLO
          </motion.h1>
        </div>
        <div className="content">
          <div className={andadaPro.className}>
            This is a technical test solution made by
            <a
              style={{ color: "var(--cian)", textDecoration: "none" }}
              href="https://favio-pariente-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Favio Pariente
            </a>{" "}
            in order to search repositores and users from:
          </div>
          <div className="gitHub">
            <div className="logo">
              <FaGithub />
            </div>
            <span className="text">GitHub</span>
          </div>
        </div>
        <div className="buttons-row">
          <div className="element">
            <Link href="/find_users">
              <button className={andadaPro.className}>FIND USERS</button>
            </Link>
          </div>
          <div className="element">
            <Link href="/find_repos">
              <button className={andadaPro.className}>FIND REPOS</button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  user-select: none;
  position: relative;
  z-index: 1;
  .title {
    margin-bottom: 0.8rem;
    user-select: none;
    font-family: "Aclonica", sans-serif;
  }
  .title h1 {
    color: var(--cian);
    font-size: 6rem;
    position: relative;
    font-weight: 400;
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--silver);
    font-size: 2rem;
    width: 58%;
    text-align: center;
    user-select: none;

    .gitHub {
      flex-direction: column;
      font-size: 1rem;
      margin: 2rem;
      svg {
        color: var(--lightWhite);
        height: 4rem;
        width: 5rem;
      }
    }
  }
  .buttons-row {
    display: flex;
    gap: 6rem;
    flex-direction: row;
    margin-top: 10vh;
    .element {
      button {
        padding: 1rem 1.4rem;
        font-size: 1.3rem;
        background-color: transparent;
        color: var(--lightWhite);
        border-radius: 0.6rem;
        border: 2px solid var(--cian);
        &:hover {
          background-color: var(--cian);
          color: var(--darkBlue);
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    height: 75vh;
    gap: 2rem;
    .title {
      h1 {
        font-size: 3.7rem;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      font-size: 1.3rem;
      width: 70%;
      .gitHub {
        margin-top: 3rem;
      }
      .logo {
        svg {
          height: 5rem;
          width: 4rem;
        }
      }
      .text {
        font-size: 1.5rem !important;
      }
    }
    .buttons-row {
      margin-top: 0;
      gap: 1.5rem;
      flex-direction: column;
      .element {
        button {
          padding: 0.8rem 2.5rem;
          font-size: 0.9rem;
        }
      }
    }
  }
`;
