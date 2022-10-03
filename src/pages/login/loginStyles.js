import styled from "styled-components";
import Colors from "../../themes/themes";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1rem;
    color: ${Colors.primary};
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33.6911px 17.6477px;
  gap: 17.65px;
  width: 296px;
  height: 402.69px;
  background: ${Colors.gray2};

  span {
    font-weight: 600;
    font-size: 0.7rem;
    line-height: 1rem;
    color: ${Colors.text.gray1};
  }

  button:nth-child(3) {
    background-color: ${Colors.gray4};
    border: 1px solid ${Colors.gray4};
    color: ${Colors.text.gray0};
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.1rem;
    transition: 1s ease;
  }

  button:nth-child(3):hover {
    background-color: ${Colors.gray3};
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    h2 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.1rem;
      color: ${Colors.text.gray0};
      background-color: transparent;
    }

    button {
      background-color: ${Colors.primary};
      border: 1px solid ${Colors.primary};
      color: ${Colors.text.white};
      font-size: 0.8rem;
      font-weight: 500;
      line-height: 1.1rem;
      transition: 1s ease;
    }

    button {
      background-color: ${Colors.primaryHover};
      border: 1px solid ${Colors.primaryHover};
    }
  }
`;
