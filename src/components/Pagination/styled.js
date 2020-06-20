import styled from "styled-components"

export const WrapperPagination = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;
  /* border: 2px solid blue; */
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  & span {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    margin: 0 auto;
  }
`
