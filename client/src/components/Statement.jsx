import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: BLACK;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Statement = () => {
  return <Container>Website Built and Maintained by Ryson Wong ⓒ 2022</Container>;
};

export default Statement;
