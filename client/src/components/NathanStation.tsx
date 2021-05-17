/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button, BackTop } from 'antd';
import noBonesDance from '../images/noBonesDance.gif';

const textMargin = css`
  margin: 2% 5%;
`;

const StyledButton = styled(Button)`
  background-color: darkblue;
  color: darkorchid;
  border: 1px solid darkorchid;
  margin-bottom: 2%;
  border-radius: 10px;

  &:hover {
    background-color: mediumpurple;
  }
`;

const StyledImg = styled.img`
  border-radius: 10px;
`;

const LandingPage = () => {
  return (
    <>
      <BackTop />
      <h1 css={{...textMargin}}>Hi Nathan! I made a couple of concept pages, click each button to see examples</h1>
      <StyledButton><Link to='/dad'>Linklist clone</Link></StyledButton>
      <StyledButton><Link to='/keith'>My own design</Link></StyledButton>
      <StyledImg src={noBonesDance} alt="Nathan Barnatt doing the No Bones Dance" />
      <h2 css={{...textMargin}}>I'm open to feedback, we can customize this however you like!</h2>
    </>
  );
};

export default LandingPage;