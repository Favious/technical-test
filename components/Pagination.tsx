import styled from "styled-components";

export default function Pagination(props: any) {
  const pageNumbers = [];

  for (
    let pageNumber = 1;
    pageNumber <= Math.ceil(props.totalElements / props.elementsPerPage);
    pageNumber++
  ) {
    pageNumbers.push(pageNumber);
  }

  function sendNewCurrentPage(value: number) {
    props.setCurrentPage(value);
  }

  return (
    <Section>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <a
              onClick={() => {
                props.paginate(number);
                sendNewCurrentPage(number);
              }}
              className={`page-link ${
                props.currentPage === number ? "current" : ""
              }`}
            >
              {number}
              {props.currentPage === number && <div className="dot">.</div>}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.nav`
  display: flex;
  color: var(--lightWhite);
  position: absolute;
  bottom: -7rem;
  width: 100%;
  justify-content: center;
  user-select: none;
  .pagination {
    display: flex;
    justify-content: center;
    gap: 2rem;
    .page-item {
      text-decoration: none;
      display: inline;
      font-size: 2rem;
      .page-link {
        gap: 1rem;
        cursor: pointer;
        .dot {
          position: absolute;
          bottom: -1.5rem;
          font-size: 3rem;
        }
      }
    }
    .current {
      color: var(--cian);
    }
  }
  @media screen and (max-width: 700px) {
    bottom: -5.5rem;
    .pagination {
      gap: 1.5rem;
      .page-item {
        display: inline;
        font-size: 1.5rem;
        .page-link {
          cursor: pointer;
          .dot {
            position: absolute;
            left: 3.7rem;
            font-size: 3rem;
          }
        }
      }
      .current {
        color: var(--cian);
      }
    }
  }
`;
