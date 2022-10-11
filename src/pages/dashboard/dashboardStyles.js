import styled from "styled-components";
import Colors from "../../themes/themes";

export const HeaderDash = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: 767px) {
    justify-content: space-between;
    width: 500px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 0;
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
        justify-content: space-between;
        width: 500px;
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

  .tecnologias {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    gap: 20px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: ${Colors.gray3};
      font-size: 20px;
      border-radius: 5px;
    }

    @media (min-width: 767px) {
      justify-content: space-between;
      width: 500px;
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

export const ContainerTecs = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
  height: max-content;
  margin: 0 auto;
  padding: 8px;
  border-radius: 3px;
  background-color: ${Colors.gray2};

  @media (min-width: 767px) {
    width: 500px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 48.73px;
    padding: 10px;
    background-color: ${Colors.gray1};
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: ${Colors.gray3};
    }

    p {
      font-weight: 700;
      font-size: 1rem;
      line-height: 24px;
      color: ${Colors.text.gray0};
    }

    .status {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 22px;
        color: ${Colors.text.gray1};
      }
    }
  }
`;
