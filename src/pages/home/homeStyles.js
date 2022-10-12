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

  .routes {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1000px) {
      width: 100%;
      justify-content: space-around;
    }

    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 40px;
      border-radius: 5px;
      color: ${Colors.text.gray0};
      cursor: pointer;
      transition: 0.5s ease;

      :nth-child(1) {
        background-color: ${Colors.primary};
        border: 2px solid ${Colors.primary};

        :hover {
          background-color: ${Colors.primaryNegative};
          border: 2px solid ${Colors.primaryNegative};
        }
      }

      :nth-child(2) {
        background-color: ${Colors.gray4};
        border: 2px solid ${Colors.gray4};

        :hover {
          background-color: ${Colors.gray3};
          border: 2px solid ${Colors.gray3};
        }
      }
    }
  }
`;

export const DivSearch = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 0 auto;

  @media (min-width: 767px) {
    width: 300px;
  }

  @media (min-width: 1000px) {
    width: 600px;
  }

  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 0 auto;

    @media (min-width: 767px) {
      width: 300px;
    }

    @media (min-width: 1000px) {
      width: 600px;
    }

    input {
      position: relative;
      width: 300px;
      border: none;

      @media (min-width: 767px) {
        width: 300px;
      }

      @media (min-width: 1000px) {
        width: 600px;
      }
    }

    button {
      position: relative;
      width: 0;
      height: 0;
      padding: 0;

      .iconSearch {
        position: absolute;
        right: 15px;
      }
    }
  }
`;

export const DivListDevs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 767px) {
    margin: 0 auto;
    width: 400px;
  }

  @media (min-width: 1000px) {
    width: 100vw;
    height: 100vh;
  }

  ul {
    display: flex;
    max-width: 320px;
    width: 100%;
    height: 350px;
    gap: 20px;
    padding: 0 20px;
    padding-bottom: 15px;
    overflow-x: auto;

    @media (min-width: 1000px) {
      flex-wrap: wrap;
      width: 90%;
      max-width: 100%;
      height: 100vh;
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      gap: 20px;
      min-width: 230px;
      height: 100%;
      margin: 0 auto;
      padding: 10px;
      background-color: ${Colors.gray3};
      border-radius: 4px;

      @media (min-width: 1000px) {
        width: 300px;
        height: 346px;
      }

      h2 {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: ${Colors.text.gray0};
      }

      h3 {
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.2rem;
        color: ${Colors.text.gray1};
      }

      p {
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 1.2rem;
        color: ${Colors.text.gray1};
      }

      span {
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 1.2rem;
        color: ${Colors.text.gray1};
      }
    }
  }

  .listPages {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 8px;
    margin-top: 20px;

    @media (min-width: 767px) {
      justify-content: space-between;
      width: 300px;
    }

    @media (min-width: 1000px) {
      justify-content: space-around;
      width: 100vw;
    }

    button {
      width: 100px;
      color: ${Colors.text.gray0};
      background-color: ${Colors.primaryNegative};
      border: 2px solid ${Colors.primaryNegative};
      transition: 0.5s ease;

      :hover {
        filter: brightness(1.3);
      }
    }
  }
`;
