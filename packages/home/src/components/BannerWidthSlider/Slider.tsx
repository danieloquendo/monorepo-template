import React, { FC } from 'react';
import { Carousel } from '@faststore/ui';
import { SilderData } from './Container';

const Slider: FC<SilderData> = (sliderData) => {
  return (
    <div data-store-slider-container>
      <Carousel {...sliderData}>
        {sliderData?.allItems?.map((item, index) => (
          <a href={item?.href} key={`carouselItem_${index}`}>
            <picture>
              {item?.sources?.map((source, index2) => (
                <source key={`carouselItemSource_${index2}`} media={source?.media} srcSet={source?.srcSet} />
              ))}
              <img alt={item?.alt} loading="lazy" width="100%" height="100%" />
            </picture>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
