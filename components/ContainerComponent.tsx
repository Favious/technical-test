import styles from "@/styles/Home.module.css";
import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

export default function ContainerComponent() {
  return (
    <Container>
      <div className="title">
        <h1>HELLO</h1>
      </div>
      <div className="content">
        <div>
          This is a technical test solution made by Favio Pariente in order to
          search repositores and users from:
        </div>
        <div className="gitHub">
          <FaGithub />
          GitHub
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-bottom: 25vh;
  .title {
    margin-bottom: 1.5rem;
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
    width: 60%;
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
`;
