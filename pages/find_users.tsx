import { useState } from "react";
import NavBar from "@/components/NavBar";
import styled from "styled-components";
import { Andada_Pro } from "@next/font/google";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import ResourceCard from "@/components/ResourceCard";
import { useIsSmall } from "@/hooks/useMediaQuery";

const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

const mockData = [
  {
    name: "George Entenman",
    userName: "Ge",
    location: "Chapel Hill, NC",
    profileLink: "",
    imageUrl: "https://avatars.githubusercontent.com/u/4415?s=120&v=4",
  },
  {
    name: "George Entenman",
    userName: "Ge",
    location: "Chapel Hill, NC",
    profileLink: "",
    imageUrl: "https://avatars.githubusercontent.com/u/4415?s=120&v=4",
  },
  {
    name: "George Entenman",
    userName: "Ge",
    location: "Chapel Hill, NC",
    profileLink: "",
    imageUrl: "https://avatars.githubusercontent.com/u/4415?s=120&v=4",
  },
  {
    name: "George Entenman",
    userName: "Ge",
    location: "Chapel Hill, NC",
    profileLink: "",
    imageUrl: "https://avatars.githubusercontent.com/u/4415?s=120&v=4",
  },
  {
    name: "George Entenman",
    userName: "Ge",
    location: "Chapel Hill, NC",
    profileLink: "",
    imageUrl: "https://avatars.githubusercontent.com/u/4415?s=120&v=4",
  },
];

export default function FindUsersPage() {
  const isSmall = useIsSmall();
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [inputAnimationVariants, setInputAnimationVariants] = useState({
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  });

  function getClick(clickFlag: any) {
    setIsSearchClicked(true);
    setInputAnimationVariants({
      animation: {
        y: -15,
      },
    });
  }

  return (
    <>
      <NavBar />
      <Section>
        <motion.div
          variants={{
            animation: {
              y: [0, isSmall ? 0 : -60],
              transition: {
                duration: 0.5,
              },
            },
          }}
          animate={isSearchClicked ? "animation" : ""}
        >
          <div className="title">
            <h1 className={andadaPro.className}>FIND USERS</h1>
          </div>
          <motion.h1
            variants={inputAnimationVariants}
            initial="initial"
            animate="animation"
          >
            <SearchBar sendClickState={getClick} />
          </motion.h1>
        </motion.div>
        {isSearchClicked && (
          <div className="results-container">
            <div className="label-results">
              <div className={andadaPro.className}>Results: </div>
            </div>
            <div className="results">
              {mockData.map((element: any, index: any) => (
                <ResourceCard
                  name={element.name}
                  firstLabel={element.userName}
                  secondLabel={element.location}
                  imageUrl={element.imageUrl}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
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
    text-align: center;
    margin-bottom: 2rem;
    user-select: none;
  }
  .title h1 {
    color: var(--lightWhite);
    font-size: 4rem;
    position: relative;
  }
  .results-container {
    position: relative;
    .label-results {
      position: absolute;
      top: -3.2rem;
      left: 2rem;
      color: var(--lightWhite);
      font-size: 2rem;
    }
    .results {
      display: grid;
      grid-template-columns: auto auto;
      gap: 1rem 10vw;
    }
  }

  @media screen and (max-width: 700px) {
    height: 75vh;
    gap: 2rem;
    .title {
      h1 {
        font-size: 2.5rem;
      }
    }
    .results-container {
      margin-top: 0.4rem;
      .label-results {
        top: -2.5rem;
        font-size: 1.4rem;
      }
      .results {
        grid-template-columns: auto;
      }
    }
  }
`;
