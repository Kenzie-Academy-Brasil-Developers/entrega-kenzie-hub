import styled from "styled-components";
import Colors from "../../themes/themes";

export const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 150px;
  padding: 10px;
  margin: 0 auto;

  @media (min-width: 767px) {
    width: 300px;
  }

  @media (min-width: 1000px) {
    width: 980px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1rem;
    color: ${Colors.primary};
  }

  a {
    color: ${Colors.text.gray0};

    &:hover {
      color: ${Colors.text.gray50};
    }
  }

  .routes {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1000px) {
      width: 100%;
      justify-content: space-around;
    }

    a:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 40px;
      border-radius: 5px;
      color: ${Colors.text.gray0};
      cursor: pointer;
      transition: 0.5s ease;
      background-color: ${Colors.primary};
      border: 2px solid ${Colors.primary};

      :hover {
        background-color: ${Colors.primaryNegative};
        border: 2px solid ${Colors.primaryNegative};
      }
    }

    a:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 40px;
      border-radius: 5px;
      color: ${Colors.text.gray0};
      cursor: pointer;
      transition: 0.5s ease;
      background-color: ${Colors.gray4};
      border: 2px solid ${Colors.gray4};

      :hover {
        background-color: ${Colors.gray3};
        border: 2px solid ${Colors.gray3};
      }
    }
  }
`;

export const DevContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  .userData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: 100px;
    padding: 10px;
    border-top: 1px solid ${Colors.gray4};
    border-bottom: 1px solid ${Colors.gray4};

    @media (min-width: 767px) {
      align-items: center;
    }

    h2 {
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 1.2rem;
      color: ${Colors.text.gray0};
    }

    span {
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.4rem;
      color: ${Colors.text.gray50};
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    padding: 10px;

    @media (min-width: 767px) {
      align-items: center;
    }

    h2 {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.2rem;
      color: ${Colors.text.gray0};
    }

    h3 {
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: ${Colors.text.gray50};
    }
  }

  .techs {
    display: flex;
    padding: 10px;
    margin-top: 20px;

    @media (min-width: 767px) {
      justify-content: space-evenly;
      width: 600px;
      margin: 30px auto;
    }

    h2 {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.2rem;
      color: ${Colors.text.gray0};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 90%;
    }

    li {
      display: flex;
      flex-direction: column;
      padding: 10px;
      width: 100%;

      .eachTech {
        display: flex;
        justify-content: space-between;

        p {
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.2rem;
          color: ${Colors.text.gray0};
        }

        span {
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 1.2rem;
          color: ${Colors.text.gray50};
        }
      }
    }
  }

  .works {
    display: flex;
    width: 100%;
    padding: 10px;
    margin-top: 20px;

    @media (min-width: 767px) {
      justify-content: space-evenly;
      width: 600px;
      margin: 30px auto;
    }

    h2 {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.2rem;
      color: ${Colors.text.gray0};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 90%;
    }

    li {
      display: flex;
      flex-direction: column;
      padding: 10px;
      width: 100%;

      .eachWork {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        p {
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.2rem;
          color: ${Colors.text.gray0};
        }

        span {
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 1.2rem;
          color: ${Colors.text.gray50};
        }

        a {
          text-align: right;
        }
      }
    }
  }

  .badNotifications {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
