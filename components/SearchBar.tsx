import { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

interface SearchBarProps {
  sendClickState: (searchButtonClicked: boolean) => void;
  sendInputValue: (inputValue: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    if (inputValue !== "") {
      setSearchButtonClicked(true);
      props.sendInputValue(inputValue);
      props.sendClickState(searchButtonClicked);
    }
  }

  return (
    <Search>
      <div className="border">
        <input
          type="text"
          className="input"
          placeholder="Type something..."
          onChange={(e) => setInputValue(e.target.value)}
        />
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
    width: 500px;
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
  @media screen and (max-width: 700px) {
    .border {
      height: 6vh;
      min-width: 300px;
      max-width: 300px;
    }
    .input {
      font-size: 1.2rem;
    }
    .search {
      height: 5.9vh;
      font-size: 1.5rem;
      border-radius: 0 0.6rem 0.6rem 0;
    }
  }
`;
