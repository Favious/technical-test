import styled from "styled-components";

export default function ResourceCard(props: any) {
  return (
    <Section>
      <img />
      <div className="data">
        <div className="name"></div>
        <div className="label"></div>
        <div className="label"></div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: row;
  .data {
    flex-direction: column;
    .name {
      color: var(--cian);
    }
    .label {
      color: var(--silver);
    }
  }
`;
