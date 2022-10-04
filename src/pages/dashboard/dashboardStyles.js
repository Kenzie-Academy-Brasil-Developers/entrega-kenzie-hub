import styled from "styled-components";
import Colors from "../../themes/themes";

export const HeaderDash = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: 767px) {
    justify-content: space-evenly;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1rem;
    color: ${Colors.primary};
  }

  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80px;
    height: 32px;
    padding: 0;
    background-color: ${Colors.gray2};

    color: ${Colors.text.gray0};
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  padding: 5px;
  margin: 60px auto;

  height: 130px;
  background-color: ${Colors.gray1};

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 12px 0 12px 10px;
    border-top: 1px solid ${Colors.gray3};
    border-bottom: 1px solid ${Colors.gray3};

    li {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;

      @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-evenly;
        margin: 10px auto;
      }

      h2 {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: ${Colors.text.gray0};
      }

      p {
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 1.2rem;
        color: ${Colors.text.gray1};
      }
    }
  }

  div {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 20px;

    @media (min-width: 767px) {
      display: flex;
    }

    h3 {
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 1.2rem;
      color: ${Colors.text.gray0};
    }

    span {
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.4rem;
      color: ${Colors.text.white};
    }
  }
`;
