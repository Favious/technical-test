import NavBar from "@/components/NavBar";
import styled from "styled-components";
import { Aclonica } from "@next/font/google";
import { Andada_Pro } from "@next/font/google";
import { motion } from "framer-motion";

const aclonica = Aclonica({ weight: "400", subsets: ["latin"] });
const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

export default function FindUsersPage() {
  return (
    <>
      <NavBar />
      <Section>
        <div className="title">
          <motion.h1
            className={aclonica.className}
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
            FIND USERS
          </motion.h1>
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
  .title {
    margin-bottom: 0.8rem;
    user-select: none;
  }
  .title h1 {
    color: var(--cian);
    font-size: 6rem;
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
