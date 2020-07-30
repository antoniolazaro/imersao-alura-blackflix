import React from 'react';
import styled, { css } from 'styled-components';
import EmojiMario from '../../assets/img/emoji-mario.png';
import EmojiJu from '../../assets/img/emoji-ju.png';

const EmojiLoadingDiv = styled.div`

margin-bottom: 30px;
margin-top: 30px;

`;

const Image = styled.img`

height: 50px;
width: 50px;

animation: rotation 1.0s infinite linear;
  @keyframes rotation {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }

`;

function EmojiLoading() {

  return (
    <EmojiLoadingDiv>
      <Image
        as="img"
        src={EmojiMario}
        alt="Loading"
      />
      <Image
        as="img"
        src={EmojiJu}
        alt="Loading"
      />
    </EmojiLoadingDiv>
  );
}

export default EmojiLoading;
