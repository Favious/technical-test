import { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";

export default function SearchBar(props: any) {
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  function handleClick() {
    setSearchButtonClicked(true);
    props.sendClickState(searchButtonClicked);
  }

  return (
    <Search>
      <div className="border">
        <input type="text" className="input" placeholder="Type something..." />
        <button className="search" onClick={() => handleClick()}>
          <BiSearchAlt2 />
        </button>
      </div>
    </Search>
  );
}

const Search = styled.div`
  display: flex;
  .border {
    display: flex;
    background-color: transparent;
    border: 2px solid var(--cian);
    border-radius: 0.6rem;
    width: 40vw;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
  }
  .input {
    background-color: transparent;
    color: var(--lightWhite);
    width: 90%;
    height: 100%;
    padding-left: 2rem;
    font-size: 1.5rem;
    border: none;
    &:focus {
      outline-width: 0;
    }
  }
  .search {
    background-color: var(--cian);
    height: 100%;
    width: 60px;
    color: var(--darkBlue);
    font-size: 2rem;
    border: none;
    cursor: pointer;
  }
`;