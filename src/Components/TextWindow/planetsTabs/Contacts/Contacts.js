import styled from "styled-components"

export const StyledContacts = styled.div`
  .location {
    margin-bottom: 2vw;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5vw;
    }
    img {
      width: 2.5vw;
      border: 0.2vw solid #fff;
      border-radius: 50%;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    flex-wrap: wrap;
    a {
      text-decoration: none;
      border-radius: 25%;
      width: 20%;
      img {
        width: 100%;
        border-radius: 25%;
        transition: box-shadow 0.1s ease;
        &:hover {
          box-shadow: 0 0 0.2vw 0.2vw #fff, 0 0 0.5vw 0.1vw #fff;
        }
      }
    }
  }
`
