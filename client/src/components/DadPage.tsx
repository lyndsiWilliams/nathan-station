import { Card, Avatar, BackTop } from 'antd';
import styled from '@emotion/styled';
import dad from '../images/dad.jpg';
import youtube from '../images/youtube.png';
import bandcamp from '../images/bandcamp.png';
import itunes from '../images/itunes.jpg';
import spotify from '../images/spotify.png';

const { Meta } = Card;

const StyledCard = styled(Card)`
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
  }
`;

const StyledImage = styled.img`
  width: 15%;
  margin: 2% 0;
  border-radius: 300px;
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

const cardStyle = {
  width: 600,
  borderRadius: '50px',
  backgroundColor: 'cornflowerblue',
  color: 'midnightblue',
};

const DadPage = () => {
  return (
    <>
      <BackTop />
      <StyledImage src={dad} alt='dad'/>
      <h1>@dadfeels</h1>
      <StyledButtonGroup>
        <StyledLink
          href="http://bit.ly/2GVKh3N"
          target="_blank"
          rel="noreferrer"
        >
          <StyledCard style={cardStyle}>
            <Meta
            avatar={<Avatar size='large' src={youtube} />}
            title='Youtube'
          />
          </StyledCard>
        </StyledLink>
        <StyledLink
          href="http://bit.ly/30j2SMs"
          target="_blank"
          rel="noreferrer"
        >
          <StyledCard style={cardStyle}>
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
          <StyledCard style={cardStyle}>
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
          <StyledCard style={cardStyle}>
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
          <StyledCard style={cardStyle}>
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