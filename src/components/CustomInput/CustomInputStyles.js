import styled from "styled-components";
import Colors from "../../themes/themes";

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 8px;
  width: 265px;
  height: 39px;
  background-color: ${Colors.gray3};
  border: 1px solid ${Colors.gray5};
  border-radius: 3px;

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
