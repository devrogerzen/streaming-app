import styled from "styled-components";

//!Header.tsx
export const NavbarWrapper = styled.div`
  .logo {
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: 2px;
    background: linear-gradient(to right, #8a12b3, #45d014);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .navLinks,
  .loginBtn {
    margin-left: auto;
  }

  .navLinks {
    border-top: 2px solid red;
  }

  .links {
    color: #fff;
    font-size: 1rem;
    margin-right: 20px;
  }

  @media (max-width: 1060px) {
    .logo {
      font-size: 1.6rem;
    }

    .links,
    .loginBtn {
      font-size: 12px;
    }
  }
`;

//!DisplayItems.tsx
export const MovieShowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
  background: #1f1f1e;

  .loadingOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(3, 37, 65, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    z-index: 9999;
    > p {
      font-size: 2rem;
      margin-top: 1rem;
      font-family: "Acme", sans-serif;
      letter-spacing: 2px;
    }
  }

  .movieHeading {
    width: 100%;
    > h1 {
      color: #fff;
      font-family: "Agdasima", sans-serif;
      margin-bottom: 1.5rem;
      margin-left: 3rem;
      text-transform: capitalize;
    }
  }

  .movieCard {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    .movie {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all 0.4s ease-in-out;
      margin-bottom: 1rem;
      .movieImage {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        > img {
          width: 150px;
          border-radius: 10px;
          border-bottom-right-radius: 25px;
          box-shadow: 1px 1px 10px 1px #000;
          padding: 5px;
        }
        > span {
          border: none;
          height: 35px;
          width: 35px;
          border-radius: 360px;
          background-color: purple;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          color: #fff;
          padding: 3px;
          font-family: "Agdasima", sans-serif;
          font-size: 14px;
          position: relative;
          bottom: 22px;
        }
      }

      &:hover {
        transform: scale(1.05);
      }
    }

    .movieInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
      position: relative;
      bottom: 25px;
      letter-spacing: 0.5px;
      > h4 {
        color: #fff;
        margin-bottom: 0;
        width: 150px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }
      > p {
        margin: 8px 0;
        color: grey;
        border-bottom: 1px solid grey;
        letter-spacing: 1px;
        font-size: 12px;
        color: #f76429;
      }
    }

    .buttons {
      text-align: center;
      border: none;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 90%;
      color: #fff;
      margin: -1rem auto;
      > p {
        font-family: "Agdasima", sans-serif;
        font-weight: 900;
      }
    }
    .btnPrev,
    .btnNext {
      border: none;
      outline: none;
      color: #fff;
      font-size: 20px;
      padding: 5px 10px;
      font-weight: bold;
      background-color: purple;
      font-family: "Acme", sans-serif;
      border-radius: 5px;

      &:hover {
        background-color: #000;
        cursor: pointer;
      }
    }
  }
`;

//!CoverPage.tsx Starts
export const Cover = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  position: relative;
  text-transform: capitalize;

  .coverText {
    position: absolute;
    color: #fff;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    text-shadow: 1px 1px 3px black;
    letter-spacing: 1px;
    line-height: 1;
    > h1 {
      font-size: 4rem;
      font-family: "Roboto", sans-serif;
    }
    > p {
      font-size: 20px;
    }
    em {
      font-size: 15px;
      margin-top: 10px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 340px;
    background-color: rgba(3, 37, 65, 0.7);
    border-bottom-left-radius: 240px;
    border-bottom-right-radius: 240px;
  }
  > img {
    height: 340px;
    width: 100%;
    border-bottom-left-radius: 240px;
    border-bottom-right-radius: 240px;
  }

  @media (max-width: 1020px) {
    .coverText {
      letter-spacing: 1px;
      line-height: 0.2;
      > h1 {
        font-size: 2.2rem;
      }
      > p,
      em {
        font-size: 15px;
      }
    }
    &::before {
      img {
        height: 240px;
      }
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    margin: 5.2rem auto 0;
    .coverText {
      line-height: 1;
      > h1 {
        font-size: 2.2rem;
      }
      > p,
      em {
        font-size: 15px;
      }
    }
    &::before {
      img {
        height: 240px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`;
//!CoverPage.tsx Finish
//!SearchBar.tsx Starts

export const SearchBar = styled.div`
  > input,
  > button {
    height: 45px;
    margin: auto;
    outline: none;
    border: none;
    border-radius: 20px;
    position: absolute;
    top: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  > input {
    width: 70%;
    box-shadow: 1px 1px 6px 2px grey;
    padding: 10px;
    font-size: 18px;
    &::placeholder {
      font-size: 16px;
    }
  }

  > button {
    padding: 0 25px;
    left: 80%;
    font-size: 15px;
    background: linear-gradient(
        90deg,
        rgba(15, 255, 184, 1) 33%,
        rgba(7, 110, 112, 1)
      )
      100%;
    font-weight: bolder;
    cursor: pointer;
  }
`;
