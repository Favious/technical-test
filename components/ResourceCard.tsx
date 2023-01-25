import styled from "styled-components";
import { Andada_Pro } from "@next/font/google";
import { BsInfoCircleFill } from "react-icons/bs";

const andadaPro = Andada_Pro({ weight: "400", subsets: ["latin"] });

interface ResourceCardProps {
  name: string; // name of resource
  firstLabel: string; // first label of resource
  secondLabel: string; // second label of resource
  imageUrl: string; // url of resource's image
  profileLink: string; // link to resource's profile
}

export default function ResourceCard(props: ResourceCardProps) {
  return (
    <Section>
      <div className="profile">
        <img src={`${props.imageUrl})`} />
        <div className={andadaPro.className}>
          <div className="data">
            <a className="name">{props.name}</a>
            <div className="label">{props.firstLabel}</div>
            <div className="label">{props.secondLabel}</div>
          </div>
        </div>
      </div>
      <a
        className="info"
        href={props.profileLink}
        target="_blank"
        rel="noreferrer noopener"
      >
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
  font-size: 1.1rem;
  min-width: 300px;
  justify-content: space-between;
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    .data {
      flex-direction: column;
      margin-left: 1.4rem;
      .name {
        text-decoration: none;
        color: var(--cian);
      }
      .label {
        color: var(--silver);
        font-size: 0.8rem;
      }
    }
    img {
      height: 75px;
      width: 75px;
      border-radius: 0.5rem;
    }
  }
  .info {
    color: var(--lightWhite);
    font-size: 1.7rem;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    min-width: 280px;
    max-width: 280px;
    gap: 0.4rem 1rem;
    .profile {
      .data {
        .name {
        }
        .label {
          width: 100px;
          font-size: 0.7rem;
        }
      }
      img {
        height: 60px;
        width: 60px;
      }
    }
  }
`;
