import styled from "styled-components"

export const WrapperAuthor = styled.div`
  width: 100%;
  height: auto;
  padding: 0 2rem;

  & > figure {
    width: 15rem;
    height: 15rem;
    margin: 0 auto 1.5rem auto;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  & > ul {
    /* border: 2px solid green; */
    padding-left: 3rem;
    color: ${({ theme }) => theme.primary};
    & > li > a {
      cursor: pointer;
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.primary};

      &:hover {
        border-bottom: 2px dashed #00a8ff;
      }
    }
  }

  & > p {
    font-size: 1.4rem;
  }

  & > h3 {
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  & > h3,
  & > p {
    color: ${({ theme }) => theme.primary};
  }
`
