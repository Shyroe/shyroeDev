import React from "react"

// import * as S from "../../styles/styled"
import { StyledLink } from "../../styles/styled"
import { WrapperPagination, Pagination } from "./styled"
import { Link } from "gatsby"

const index = ({
  currentPage,
  numPages,
  isLast,
  isFirst,
  nextPage,
  prevPage,
}) => {
  console.log("PrevPage: ", prevPage)
  console.log("NextPage: ", nextPage)
  return (
    <WrapperPagination>
      <Pagination>
        <>
          {!isFirst && <StyledLink to={prevPage}>Anterior</StyledLink>}
          <span>
            {currentPage} de {numPages}
          </span>
          <p>{!isLast && <StyledLink to={nextPage}>Próxima</StyledLink>}</p>
        </>
      </Pagination>
    </WrapperPagination>
  )
}

export default index
