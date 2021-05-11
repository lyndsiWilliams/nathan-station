import { Button } from 'reactstrap';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import dad from '../images/dad.jpg';
import youtube from '../images/youtube.png';
import bandcamp from '../images/bandcamp.png';
import itunes from '../images/itunes.jpg';
import spotify from '../images/spotify.png';

const StyledImage = styled.img`
  width: 15%;
  margin: 2% 0;
  border-radius: 300px;
`;

const StyledLogo = styled.img`
  width: 7%;
  border-radius: 300px;
  margin-right: 210px;
`;

const StyledLink = styled.a`
  width: 600px;
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
`;

const buttonStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4% 0;
  width: 100%;
  border-radius: 30px;
  background-color: cornflowerblue;
  color: midnightblue;

  &:hover, &:focus {
    background-color: rgb(50,109,207);
    color: darkslateblue;
  }
`;

const LinkListClone = () => {
  return (
    <>
      <StyledImage src={dad} alt='dad'/>
      <h1>@dadfeels</h1>
      <StyledButtonGroup>
        <StyledLink
          href="http://bit.ly/2GVKh3N"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" block css={{...buttonStyle}}>
            <StyledLogo src={youtube} alt='youtube logo'/>
            Youtube
          </Button>
        </StyledLink>
        <StyledLink
          href="http://bit.ly/30j2SMs"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" block css={{...buttonStyle}}>
            <StyledLogo src={dad} alt='dad logo' />
            Merchandise
          </Button>
        </StyledLink>
        <StyledLink
          href="https://dadfeels.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" block css={{...buttonStyle}}>
            <StyledLogo src={bandcamp} alt='bandcamp logo' />
            Bandcamp
          </Button>
        </StyledLink>
        <StyledLink
          href="https://t.co/9jPJGVCcTl?amp=1"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" block css={{...buttonStyle}}>
            <StyledLogo src={spotify} alt='spotify logo' />
            Spotify
          </Button>
        </StyledLink>
        <StyledLink
          href="https://music.apple.com/us/album/music/1472298941"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" block css={{...buttonStyle}}>
            <StyledLogo src={itunes} alt='itunes logo' />
            iTunes
          </Button>
        </StyledLink>
      </StyledButtonGroup>
    </>
  );
};

export default LinkListClone;