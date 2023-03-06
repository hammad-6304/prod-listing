import styled from "styled-components";

export const CardContainer = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  width: "200px",
  height: "200px",
  borderRadius: "8px",
  overflow: "hidden",
});

export const CardBackground = styled.div<{ backgroundImage: string }>(
  (props) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    filter: "brightness(0.6)",
  })
);

export const TitleContainer = styled.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "12px",
  backgroundImage:
    "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%)",
});

export const Title = styled.h3({
  margin: "0",
  fontSize: "14px",
  fontWeight: 600,
  color: "#fff",
});
