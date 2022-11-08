import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: Teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>We currently only deliver locally (Prices vary). Please stay tuned as we expand our wares and network. Thank you for your understanding. </Container>;
};

export default Announcement;
