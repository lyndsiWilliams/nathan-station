import styled from '@emotion/styled';
import { Card, Avatar } from 'antd';
import keithBanner from '../images/keithBanner.jpeg';
import keithApicaryYoutube from '../images/keithApicaryYoutube.jpeg';
import youtube from '../images/youtube.png';
import twitch from '../images/twitch.jpg';
import instagram from '../images/instagram.png';
import keithApicaryInstagram from '../images/keithApicaryInstagram.jpeg';
import twitter from '../images/twitter.png';
import keithApicaryTwitter from '../images/keithApicaryTwitter.jpeg';

const { Meta } = Card;

const StyledComponent = styled.div`
  width: 100%;
  background: linear-gradient(rgba(249,208,1), red);
  background-size: auto 500%;
  font-family: 'Courier Prime', monospace;
`;

const StyledBanner = styled.div`
  background-color: rgba(249,208,1);
  width: -webkit-fill-available;
  border-bottom: 5px solid rgb(11,69,106);
`;

const StyledImage = styled.img`
  margin-top: -70px;
  position: abosolute;
  z-index: -1;

  @media (max-width: 800px) {
    margin-left: -100px;
  }
`;

const StyledCardGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: rgb(226,222,203);

  .ant-card-body {
    width: 100%;
  }
`;

const StyledCardPic = styled.img`
  border: 3px solid rgb(226,222,203);
  width: 300px;
`;

const StyledLink = styled.a`
  margin: 2%;
  text-decoration: none;
  color: black;
`;

const StyledCardWrapper = styled.div`
  display: flex;
`;

const KeithPage = () => {
  return (
    <StyledComponent>
      <StyledBanner>
        <StyledImage src={keithBanner} alt='Keith Apicary standing in front of a NEO-GEO cabinet' />
      </StyledBanner>
      <StyledCardGroup>
        {/* ----------- Twitch ----------- */}
        <StyledLink
            href="https://www.twitch.tv/keithapicary"
            target="_blank"
            rel="noreferrer"
        >
          <StyledCardWrapper>
            <StyledCardPic
              alt="Keith Apicary's Twitch profile pic - drawing by Emilee Beeson https://instagram.com/emileebeeson"
              src={keithApicaryYoutube}
            />
            <StyledCard>
              <Meta
                avatar={<Avatar src={twitch} />}
                title="Twitch"
                description="Minecraft OP overlord and CEO of Sega."
              />
            </StyledCard>
          </StyledCardWrapper>
        </StyledLink>
        {/* ----------- Twitter ----------- */}
        <StyledLink
            href="https://www.instagram.com/KeithApicary/"
            target="_blank"
            rel="noreferrer"
        >
          <StyledCardWrapper>
            <StyledCardPic
              alt="Keith Apicary's Twitter profile pic"
              src={keithApicaryTwitter}
            />
            <StyledCard>
              <Meta
                avatar={<Avatar src={twitter} />}
                title="Twitter"
                description="Good at shadow boxing but if I do it too long I'll defeat the air & everyone will suffocate. CEO of SEGA. Not the best Minecrafter but the COOLEST Minecrafter!"
              />
            </StyledCard>
          </StyledCardWrapper>
        </StyledLink>
        {/* ----------- YouTube ----------- */}
        <StyledLink
            href="https://www.youtube.com/channel/UCwLS4EsdMiDHl0PKNA_F2dg"
            target="_blank"
            rel="noreferrer"
        >
          <StyledCardWrapper>
            <StyledCardPic
              alt="Keith Apicary's YouTube profile pic - drawing by Emilee Beeson https://instagram.com/emileebeeson"
              src={keithApicaryYoutube}
            />
            <StyledCard>
              <Meta
                avatar={<Avatar src={youtube} />}
                title="YouTube"
                description="Major gamor Keith Apicary plays Minecraft!"
              />
            </StyledCard>
          </StyledCardWrapper>
        </StyledLink>
        {/* ----------- Instagram ----------- */}
        <StyledLink
            href="https://www.instagram.com/KeithApicary/"
            target="_blank"
            rel="noreferrer"
        >
          <StyledCardWrapper>
            <StyledCardPic
              alt="Keith Apicary's Instagram profile pic"
              src={keithApicaryInstagram}
            />
            <StyledCard>
              <Meta
                avatar={<Avatar src={instagram} />}
                title="Instagram"
                description="Say Gah"
              />
            </StyledCard>
          </StyledCardWrapper>
        </StyledLink>
      </StyledCardGroup>
    </StyledComponent>
  )
};

export default KeithPage;