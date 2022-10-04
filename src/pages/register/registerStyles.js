import styled from "styled-components";
import Colors from "../../themes/themes";

export const HeaderRegister = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 13px 0 13px;
  margin: 0 auto;
  width: 300px;

  h1 {
    font-size: 1rem;
    font-weight: 900;
    line-height: 1rem;
    color: ${Colors.primary};
  }

  button {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    width: 100px;
    height: 31.95px;
    background-color: ${Colors.gray3};
    border: 1px solid ${Colors.gray3};
    border-radius: 4px;
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: ${Colors.text.gray0};
    transition: 0.8s ease;
  }

  button:hover {
    background-color: ${Colors.gray4};
    border: 1px solid ${Colors.gray4};
  }
`;

export const DivForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 10px 10px;
  margin: 40px auto;
  width: 295.83px;
  height: 710px;
  background-color: ${Colors.gray2};
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 800;
    color: ${Colors.text.gray0};
    align-self: center;
  }

  span {
    font-size: 0.7rem;
    line-height: 1rem;
    font-weight: 500;
    color: ${Colors.text.gray1};
    align-self: center;
  }

  select {
    display: flex;
    align-items: center;
    padding: 0 14px;
    gap: 8px;
    width: 265px;
    height: 39px;
    background-color: ${Colors.gray3};
    border: 1px solid ${Colors.gray5};
    border-radius: 3px;
    color: ${Colors.text.gray0};
  }

  button {
    background-color: ${Colors.primaryHover};
    border: 1px solid ${Colors.primaryHover};
    color: ${Colors.text.white};
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 500;
    transition: 0.7s;
  }

  button:hover {
    background-color: ${Colors.primary};
  }
`;
