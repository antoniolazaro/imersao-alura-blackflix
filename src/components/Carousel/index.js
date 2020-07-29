import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import ImageCard from './components/ImageCard';
import Slider, { SliderItem } from './components/Slider';

function Carrousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          if(video.linkAmazonUrl){
            return (
              <SliderItem key={video.titulo}>
                <ImageCard
                  imageTitle={video.titulo}
                  imageURL={video.url}
                  linkAmazonUrl={video.linkAmazonUrl}
                  categoryColor={categoryColor}
                />
              </SliderItem>
            );
          }else{
          return (
              <SliderItem key={video.titulo}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor={categoryColor}
                />
              </SliderItem>
            );
          }
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carrousel;
