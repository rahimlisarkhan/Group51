import styled from "styled-components";

export const TypographyStyled = styled.div`
  font-size: ${(props) => {
    switch (props.font) {
      case "xsmall":
        return "14px";
      case "small":
        return "16px";
      case "medium":
        return "18px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};
`;
