import styled from "styled-components";

export const Container = styled.main`
  flex: 1;

  width: 70rem;
  margin: 1rem auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  h2 {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme["custom-green"]};
    text-align: center;
    padding-bottom: 0.5rem;
    font-weight: normal;
    font-size: 1.7rem;
  }

  a.buyMeACoffee {
    background: transparent;
    border: 3px solid ${(props) => props.theme["gray-600"]};
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme["gray-300"]};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: border-color 0.3s;

    &:hover {
      border-color: ${(props) => props.theme["custom-green"]};
    }
  }

  div.ads {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;
    border: 3px solid ${(props) => props.theme["gray-600"]};
    border-radius: 8px;
    min-width: 30rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  div.editorContainer {
    flex: 1;
    border: 2px solid ${(props) => props.theme["gray-600"]};
    border-radius: 8px;
    min-height: 10rem;
  }

  div.renderedText {
    position: relative;
    flex: 1;
    border: 2px solid ${(props) => props.theme["gray-600"]};
    border-radius: 8px;
    min-height: 13rem;

    p {
      padding: 1rem 5rem 1rem 1rem;
    }

    button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem;
      cursor: pointer;

      background: ${(props) => props.theme["custom-green"]};

      border-radius: 4px;
      border: 2px solid ${(props) => props.theme["custom-green"]};
      color: #000;
      font-size: 0.8rem;
      font-weight: 900;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
