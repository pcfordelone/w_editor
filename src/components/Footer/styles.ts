import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vmax;
  background: ${(props) => props.theme["gray-900"]};
  padding: 1rem;

  .container {
    width: 70rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      gap: 0.2rem;
    }
  }
`;
