import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RLG Variety.</Logo>
        <Desc>
          We are a locally owned and operated business based out of Hawaii. We sell a variety of products from clothing to jewelry. We are always looking to expand our product line and are always looking for new products to sell. If you have any questions or concerns please feel free to contact us.
        </Desc>
        <SocialContainer>
          <a href="https://www.facebook.com/RLGvariety/">
            <SocialIcon color="3B5999" >
              <Facebook />
            </SocialIcon>
          </a>
          <a href="https://instagram.com/rlg_variety?igshid=YmMyMTA2M2Y=">
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Earrings</ListItem>
          <ListItem>Necklaces</ListItem>
          <ListItem>Bracelets</ListItem>
          <ListItem>Anklets</ListItem>
          <ListItem>Apparel</ListItem>
          <ListItem>Healing Stones</ListItem>
          <ListItem>Accesories</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Ewa Beach, HI
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 808 428 0492
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> rlg393@yahoo.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
