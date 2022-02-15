import React, { FC } from 'react';
import { CarouselProps } from '@faststore/ui';
import Banner from './Banner';
import Slider from './Slider';

interface Source {
  media: string;
  srcSet: string;
}

interface Item {
  sources: Source[];
  href: string;
  alt: string;
}

export interface SilderData extends CarouselProps {
  allItems: Item[];
}

export interface BannerData {
  bannerImage: Item;
  bannerLink: string;
}

export interface BannerWithSliderProps {
  sliderData: SilderData;
  bannerData: BannerData;
}

const Container: FC<BannerWithSliderProps> = ({ sliderData, bannerData }) => {
  return (
    <div data-store-bannerwidthslider-container>
      <Slider {...sliderData} />
      <Banner {...bannerData} />
    </div>
  );
};

export default Container;
