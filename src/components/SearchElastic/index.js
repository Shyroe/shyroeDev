// Function Component Not Working
// import React, { useState } from "react"

// import { Index } from "elasticlunr"
// import { Link } from "gatsby"

// import { TagContainer, TagItem } from "../TagList/styled"

// const SearchElastic = () => {
//   const [query, setQuery] = useState("")
//   const [results, setResults] = useState([])

//   const getOrCreateIndex = () =>
//     this.index
//       ? this.index
//       : // Create an elastic lunr index and hydrate with graphql query results
//         Index.load(this.props.searchIndex)

//   const search = evt => {
//     const query = evt.target.value
//     this.index = getOrCreateIndex()
//     setQuery(query)
//     setResults([
//       this.index
//         .search(query, { expand: true })
//         .map(({ ref }) => this.index.documentStore.getDoc(ref)),
//     ])
//     // setResults(state => (
//     //   [...state]
//     // ))

//     // class
//     // this.setState({
//     //   query,
//     //   // Query the index with search string to get an [] of IDs
//     //   results: this.index
//     //     .search(query, { expand: true })
//     //     // Map over each ID and return the full document
//     //     .map(({ ref }) => this.index.documentStore.getDoc(ref)),
//     // })
//   }

//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           value={query}
//           onChange={search}
//           placeholder="Ex: React, blog, Gatsby..."
//         />
//       </form>
//       <TagContainer>
//         <ul>
//           {results.map(page => (
//             <TagItem key={page.id}>
//               <Link to={"/" + page.path}>{page.title}</Link>
//             </TagItem>
//           ))}
//         </ul>
//       </TagContainer>
//     </>
//   )
// }

// export default SearchElastic

// Class Component Funcionando
import React, { Component } from "react"

import { Index } from "elasticlunr"
import { Link } from "gatsby"

import { TagContainer, TagItem } from "../TagList/styled"
import { StyledLink } from "../../styles/styled"

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            value={this.state.query}
            onChange={this.search}
            placeholder="Ex: React, blog, Gatsby..."
          />
        </form>
        <TagContainer>
          <ul>
            {this.state.results.map(page => {
              //console.log("search item - path: ", window.location.origin);
              return (
              <TagItem key={page.id}>
                <StyledLink to={window.location.origin + page.path}>{page.title}</StyledLink>
              </TagItem>
            )})}
          </ul>
        </TagContainer>
      </>
    )
  }
}
