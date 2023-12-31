import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem 0rem;
`;

const Card = styled.div`
  min-height: 16rem;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    position: absolute;
  }
  p {
    position: absolute;
    width: 90%;
    left: 50%;
    bottom: 5%;
    z-index: 10;
    transform: translate(-50%, -5%);
    color: white;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
  }
`;

const VeggieCard = styled(Card)`
  min-height: 12rem;

  p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.2rem;
    bottom: 5%;
    transform: translate(-50%, -5%);
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const List = styled.div`
  display: flex;
  gap: 2rem;
  width: 40%;
  margin: 2rem auto;

  @media (max-width: 480px) {
    width: 100%;
    gap: 0.8rem;
  }
`;

const FormStyle = styled.form`
  width: 80%;
  position: relative;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 1rem 3rem;
    outline: none;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-item: center;

    @media (max-width: 480px) {
      padding: 0.5rem 3rem;
    }
  }

  svg {
    position: absolute;
    top: 5%;
    left: 0%;
    transform: translate(50%, 100%);
    font-size: 1.3rem;
    color: white;
    @media (max-width: 480px) {
      top: 2%;
      transform: translate(50%, 50%);
    }
  }
`;

export { Wrapper, Card, Gradient, List, FormStyle, VeggieCard };
