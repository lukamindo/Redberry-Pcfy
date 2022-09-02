import styled from "styled-components";

export const StyledRadioContainer = styled.div`
  margin-right: 60px;
  margin-top: 27px;
  flex-shrink: 0;

  label {
    display: flex;
    font-weight: 400;
    font-size: 16px;
  }

  input[type="radio"] {
    appearance: none;
    margin: 0 18px 0 0;

    font: inherit;
    width: 20px;
    height: 20px;
    border: 2px solid #4d9ac3;
    border-radius: 20px;
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 20px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #4d9ac3;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }
`;
