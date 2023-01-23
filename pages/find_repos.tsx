import NavBar from "@/components/NavBar";
import styled from "styled-components";
import { Andada_Pro } from "@next/font/google";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";

const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

export default function FindReposPage() {
  return (
    <>
      <NavBar />
      <Section>
        <div className="title">
          <h1 className={andadaPro.className}>FIND REPOS</h1>
        </div>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          variants={{
            animation: {
              y: [0, -15],
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
          <SearchBar />
        </motion.h1>
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
  .title {
    margin-bottom: 2rem;
    user-select: none;
  }
  .title h1 {
    color: var(--lightWhite);
    font-size: 4rem;
    position: relative;
  }

  @media screen and (max-width: 700px) {
    height: 75vh;
    gap: 2rem;
    .title {
      h1 {
        font-size: 3.7rem;
      }
    }
  }
`;
