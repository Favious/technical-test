import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export default function HomePage({
  aclonica,
  andadaPro,
}: {
  aclonica: any;
  andadaPro: any;
}) {
  return (
    <Section>
      <div className="title">
        <h1 className={aclonica.className}>HELLO</h1>
      </div>
      <div className="content">
        <div className={andadaPro.className}>
          This is a technical test solution made by Favio Pariente in order to
          search repositores and users from:
        </div>
        <div className="gitHub">
          <FaGithub />
          GitHub
        </div>
      </div>
      <div className="buttons-row">
        <div className="element">
          <button className={andadaPro.className}>FIND USERS</button>
        </div>
        <div className="element">
          <button className={andadaPro.className}>FIND REPOS</button>
        </div>
      </div>
    </Section>
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
  }
  .title h1 {
    color: var(--cian);
    font-size: 5rem;
    position: relative;
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--silver);
    font-size: 2rem;
    width: 58%;
    text-align: center;

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
    gap: 4rem;
    flex-direction: row;
    margin-top: 10vh;
    .element {
      button {
        padding: 0.8rem 1.2rem;
        font-size: 1rem;
        background-color: transparent;
        color: var(--lightWhite);
        border-radius: 0.4rem;
        border: 2px solid var(--cian);
        &:hover {
          background-color: var(--cian);
          color: var(--darkBlue);
          cursor: pointer;
        }
      }
    }
  }
`;
