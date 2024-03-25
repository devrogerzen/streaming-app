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
 
`;