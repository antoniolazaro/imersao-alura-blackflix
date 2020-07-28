import React from 'react';
import { ImageCardContainer } from './styles';



function ImageCard({ imageTitle, imageURL,linkAmazonUrl, categoryColor }) {
  return (
    <ImageCardContainer
      url={imageURL}
      href={linkAmazonUrl}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={imageTitle}
    />
  );
}

export default ImageCard;
