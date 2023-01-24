import { useState } from "react";
import NavBar from "@/components/NavBar";
import styled from "styled-components";
import { Andada_Pro } from "@next/font/google";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import ResourceCard from "@/components/ResourceCard";
import Pagination from "@/components/Pagination";
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
  {
    name: "George Entenman2",
    userName: "Ge",
    location: "Chapel Hill, NC",
    profileLink: "",
    imageUrl: "https://avatars.githubusercontent.com/u/4415?s=120&v=4",
  },
  {
    name: "George Entenman2",
    userName: "Ge",
    location: "Chapel Hill, NC",
    profileLink: "",
    imageUrl: "https://avatars.githubusercontent.com/u/4415?s=120&v=4",
  },
];

export default function FindUsersPage() {
  const isSmall = useIsSmall();
  const numberOfElementsPerPage = 5;
  const totalElements = mockData.length;
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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

  function getClick() {
    setIsSearchClicked(true);
    setInputAnimationVariants({
      animation: {
        y: -15,
      },
    });
  }

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  const indexOfLastElement = currentPage * numberOfElementsPerPage;
  const indexOfFirstElement = indexOfLastElement - numberOfElementsPerPage;
  let currentElements = mockData.slice(indexOfFirstElement, indexOfLastElement);

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
              {currentElements.map((element: any, index: any) => (
                <ResourceCard
                  name={element.name}
                  firstLabel={element.userName}
                  secondLabel={element.location}
                  imageUrl={element.imageUrl}
                  key={index}
                />
              ))}
            </div>
            <Pagination
              elementsPerPage={numberOfElementsPerPage}
              totalElements={totalElements}
              paginate={paginate}
            />
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
      min-height: 257px;
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
        display: flex;
        flex-direction: column;
        min-height: 440px;
        grid-template-columns: auto;
      }
    }
  }
`;
