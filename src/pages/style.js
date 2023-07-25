import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const DetailsWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    margin: 1rem 1rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 100%;
  }
`;

const CLink = styled(NavLink)`
  color: #313131;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 1rem;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  font-weight: 600;

  @media (max-width: 480px) {
    width: 50%;
    display: inline-block;
    padding: 0.5rem 0.5rem;
    margin-right: 0;
  }
`;
const Col1 = styled.div`
  width: 40%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Info = styled.div`
  margin-left: 8rem;
  width: 60%;

  @media (max-width: 480px) {
    width: 90%;
    margin-left: 0rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-family: Lobster, cursive;
  font-weight: bold;
  text-decoration: none;
  color: #313131;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  Grid,
  Card,
  DetailsWrapper,
  ButtonGroup,
  Button,
  Col1,
  Info,
  CLink,
  Logo,
  Nav,
  Box,
};
