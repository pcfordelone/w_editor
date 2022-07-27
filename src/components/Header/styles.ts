import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  background: ${(props) => props.theme["gray-900"]};
  border-bottom: 3px solid ${(props) => props.theme["custom-green"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
