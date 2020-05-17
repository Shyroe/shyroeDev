import React from "react"

import { WrapperAuthor } from "./styled"
import { useStaticQuery, graphql } from "gatsby"

const Author = ({ author }) => {
  return (
    <WrapperAuthor>
      <figure>
        <img src="./assets/author-avatar.jpg" alt="" />
      </figure>
      <h3>Sobre mim</h3>
      <p> {author.summary} </p>
      <h3>Habilidades</h3>
      <ul>
        {author.habilities.map(hab => (
          <li>
            <a href="#"> {hab} </a>
          </li>
        ))}
      </ul>
      <h3>Contato</h3>
      <ul>
        {author.contacts.map(contato => (
          <li>
            <a href="#"> {contato} </a>
          </li>
        ))}
      </ul>
    </WrapperAuthor>
  )
}

export default Author
