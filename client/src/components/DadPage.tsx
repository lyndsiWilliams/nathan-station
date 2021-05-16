import { useState } from 'react';
import { Card, Avatar, BackTop } from 'antd';
import styled from '@emotion/styled';
import dad from '../images/dad.jpg';
import server from '../images/server.png';
import youtube from '../images/youtube.png';
import bandcamp from '../images/bandcamp.png';
import itunes from '../images/itunes.jpg';
import spotify from '../images/spotify.png';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 50px;
  background-color: cornflowerblue;
  color: midnightblue;
  margin-bottom: 4%;

  .ant-card-meta-title {
    color: midnightblue;
    font-size: 1.8em;
    margin-right: 50px;
  }

  .ant-card-body {
    border-radius: 50px;

    &:hover, &:focus {
      background-color: rgb(50,109,207);
      transition: 0.3s;

      .ant-card-meta-title {
        color: darkslateblue;
      }
    }
`;

const StyledImage = styled.img`
  width: 135px;
  margin: 2% 0;
  border-radius: 300px;
`;

const StyledLink = styled.a`
  width: 100%;
  text-decoration: none;
  color: midnightblue;

  &:hover {
    color: darkslateblue;
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;

  @media (max-width: 650px) {
    width: 550px;
  }

  @media (max-width: 550px) {
    width: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }

  @media (max-width: 350px) {
    width: 250px;
  }
`;

const DadPage = () => {
  const [glitchText, setGlitchText] = useState<string>('YouTube');

  const triggerGlitchText = (text: string) => {
    if (text === 'YouTube') {
      setGlitchText('SERVER');
        setTimeout(() => {
          setGlitchText('YouTube');
          setTimeout(() => {
            setGlitchText('YouTube')
          }, 200);
        }, 300);
    }
  }

  const dadCard = (
    <StyledCard onMouseOver={() => triggerGlitchText(glitchText)}>
      <Meta
        avatar={<Avatar size='large' src={youtube} />}
        title={glitchText}
      />
    </StyledCard>
  );
  
  const serverCard = (
    <StyledCard style={{ backgroundColor: 'firebrick' }}>
      <Meta
        avatar={<Avatar size='large' src={server} />}
        title={glitchText}
      />
    </StyledCard>
  );

  return (
    <>
      <BackTop />
      <StyledButtonGroup>
        <StyledImage src={dad} alt='dad'/>
        <h1>@dadfeels</h1>
        <StyledLink
          href="http://bit.ly/2GVKh3N"
          target="_blank"
          rel="noreferrer"
        >
          {glitchText === 'YouTube' ? dadCard : serverCard}
        </StyledLink>
        <StyledLink
          href="http://bit.ly/30j2SMs"
          target="_blank"
          rel="noreferrer"
        >
          <StyledCard>
            <Meta
            avatar={<Avatar size='large' src={dad} />}
            title='Merchandise'
          />
          </StyledCard>
        </StyledLink>
        <StyledLink
          href="https://dadfeels.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledCard>
            <Meta
            avatar={<Avatar size='large' src={bandcamp} />}
            title='Bandcamp'
          />
          </StyledCard>
        </StyledLink>
        <StyledLink
          href="https://t.co/9jPJGVCcTl?amp=1"
          target="_blank"
          rel="noreferrer"
        >
          <StyledCard>
            <Meta
            avatar={<Avatar size='large' src={spotify} />}
            title='Spotify'
          />
          </StyledCard>
        </StyledLink>
        <StyledLink
          href="https://music.apple.com/us/album/music/1472298941"
          target="_blank"
          rel="noreferrer"
        >
          <StyledCard>
            <Meta
            avatar={<Avatar size='large' src={itunes} />}
            title='iTunes'
          />
          </StyledCard>
        </StyledLink>
      </StyledButtonGroup>
    </>
  );
};

export default DadPage;