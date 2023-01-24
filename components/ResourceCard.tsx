import styled from "styled-components";
import { Andada_Pro } from "@next/font/google";
import { BsInfoCircleFill } from "react-icons/bs";

const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

export default function ResourceCard(props: any) {
  return (
    <Section>
      <img src={`${props.imageUrl})`} />
      <div className={andadaPro.className}>
        <div className="data">
          <div className="name">{props.name}</div>
          <div className="label">{props.firstLabel}</div>
          <div className="label">{props.secondLabel}</div>
        </div>
      </div>
      <a className="info" href={props.profileLink} target="_blank">
        <BsInfoCircleFill />
      </a>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem 2rem;
  align-items: center;
  user-select: none;
  font-size: 1.2rem;
  .data {
    flex-direction: column;
    .name {
      color: var(--cian);
    }
    .label {
      color: var(--silver);
    }
  }
  .info {
    color: var(--lightWhite);
    font-size: 1.7rem;
    cursor: pointer;
  }
  img {
    height: 75px;
    width: 75px;
    border-radius: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    gap: 0.4rem 1rem;
  }
`;
