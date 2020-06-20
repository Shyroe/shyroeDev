import styled, { css } from "styled-components"

import { Tag } from "@styled-icons/boxicons-solid"
import {
  FacebookWithCircle,
  TwitterWithCircle,
  YoutubeWithCircle,
  LinkedinWithCircle,
} from "@styled-icons/entypo-social/"

import { Link } from "gatsby"

export const SocialIconSkeleton = css`
  width: 3rem;
  height: 3rem;
  margin-right: 1.5rem;
  color: white;
  cursor: pointer;
`

export const IconFacebook = styled(FacebookWithCircle)`
  ${SocialIconSkeleton}
  fill: blueviolet;
`
export const IconTwitter = styled(TwitterWithCircle)`
  ${SocialIconSkeleton}
  fill: cyan;
`
export const IconLinkedin = styled(LinkedinWithCircle)`
  ${SocialIconSkeleton}
  fill: blue;
`
export const IconYoutube = styled(YoutubeWithCircle)`
  ${SocialIconSkeleton}
  fill: red;
`

export const SocialLink = styled.a.attrs(props => ({
  href: props.link,
}))`
  text-decoration: none;
`

export const WrapperSocial = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 3rem;

  & > h2 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.primary};
  }
`

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
`

export const WrapperOuterPost = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
`

//Social Icons

export const WrapperPost = styled.div`
  width: inherit;
  height: auto;
  font-family: Roboto, sans-serif;
  color: ${({ theme }) => theme.primary};

  & header {
    margin-bottom: 5rem;
  }

  & > section {
    line-height: 1.6rem;
    letter-spacing: 0.1rem;

    & > p {
      margin-bottom: 0.6rem;
    }

    & > h2 {
      margin-bottom: 2rem;
      margin-top: 2rem;
      line-height: 1.4rem;
    }

    & > h3 {
      margin-bottom: 1.3rem;
      line-height: 1.2rem;
      margin-top: 1.3rem;
    }

    & > ul {
      margin-left: 3rem;
    }

    & > a {
      text-decoration: none;
      color: red;
    }
  }
`

export const PostContentTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const PostContentInfo = styled.div`
  display: flex;

  & > span {
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    margin-bottom: 1.7rem;
    margin-right: 1rem;
  }
`

export const PostContentTagList = styled.ul`
  display: flex;
`

export const PostContentTag = styled.li`
  background-color: #00a8ff;
  display: inline-block;
  padding: 0.3rem 0.3rem;
  margin-right: 2rem;
  position: relative;
  text-transform: capitalize;

  & > a {
    font-size: 1.1rem;
    font-weight: 400;
    color: #222;
  }
  & > ${StyledLink} {
    font-size: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -1.3rem;
    border: 10px solid transparent;
    border-left-color: #00a8ff;
    width: 1.3rem;
    height: 100%;
  }
`

// export const

export const PostRecomendedWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.5rem;
  margin-top: 1.5rem;
`

export const PostRecomended = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 0.3rem;
  padding: 1.5rem 1.5rem;
  color: white;
  cursor: pointer;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.imgBg});
  background-size: cover;
  background-position: center center;

  & > span {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  & > h2 {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`

export const PostRecomendedLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 40%;
  height: auto;
`
export const PostRecomendedAnterior = styled(PostRecomended)`
  justify-content: flex-start;
  align-items: flex-start;
`

export const PostRecomendedProximo = styled(PostRecomended)`
  justify-content: flex-start;
  align-items: flex-end;
`

export const StyledAutorText = styled.p`
  color: ${props => props.theme.primary};
`

export const StyledContainer = styled.div`
  max-width: 1100rem;
  width: 80%;
  height: auto;
  margin: 5rem auto;
`

export const StyledSearchWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding-bottom: 50vh;
  & h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
  }

  & form {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    height: auto;
    & input {
      width: inherit;
      height: auto;
      padding: 0.5rem 1rem;
      border: 2px solid ${({ theme }) => theme.primary};
      border-radius: 1rem;
      font-size: 1.3rem;

      &:focus {
        border: 2px solid #00a8ff;
        outline: none;
      }
    }
  }
`

export const StyledWrapperOuter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bg};
  & footer {
    margin-top: auto;
    width: 100%;
    height: auto;
    padding: 1rem 0;
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primary};
  }
`

export const StyledHeader = styled.nav`
  width: 100%;
  height: 7rem;
  margin: auto 0;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8rem;

  & ul {
    display: flex;
    list-style: none;
    margin-left: auto;

    & li {
      margin-right: 1rem;
      & a {
        text-decoration: none;
        color: ${({ theme }) => theme.primary};

        &:hover {
          color: orangered;
        }
      }
    }
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid blue;
`

export const BlogListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  width: 60%;
  cursor: pointer;
  &:hover {
    border: 2px solid cyan;
    padding: 1rem;
  }

  & div:first-of-type(1) {
    display: flex;
    flex-flow: column nowrap;

    & .title {
      color: #000;
    }

    & h4 {
      color: #666;
    }
  }
  & nav {
    display: flex;
    align-items: center;

    & ul {
      list-style: none;
      display: flex;

      & li {
        color: orangered;
        font-weight: 600;
        letter-spacing: 0.2rem;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`

export const IconTag = styled(Tag)`
  display: block;
  margin: 0 1rem;
  color: red;
  width: 1rem;
  height: 1rem;
`

export const StyledLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`

export const TagContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: auto 1rem;
  border-radius: 10rem;
`

export const DisqusWrapper = styled.footer`
  margin-top: 3rem;
`
