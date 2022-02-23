import React from 'react';
import { Story } from '@storybook/react';
import BannerWithSlider, { BannerWithSliderProps } from '../../../src/components/BannerWidthSlider/Container';
import carouselImage1 from './static/carousel-image-1.jpg';
import carouselImage2 from './static/carousel-image-2.jpg';
import carouselImage3 from './static/carousel-image-3.jpg';
import bannerImageDesktop from './static/banner-image-desktop.jpg';
import bannerImageMobile from './static/banner-image-mobile.jpg';
import './BannerWithSlider.scss';

const BannerWithSliderStory = {
  component: BannerWithSlider,
  title: 'Organisms/Banner With Slider'
};

export default BannerWithSliderStory;

const Template: Story<BannerWithSliderProps> = (args) => <BannerWithSlider {...args} />;

export const Default = Template.bind({});

Default.args = {
  bannerData: {
    bannerImage: {
      sources: [
        {
          media: '(min-width: 40em)',
          srcSet: bannerImageDesktop
        },
        {
          media: '(max-width: 40em)',
          srcSet: bannerImageMobile
        }
      ],
      href: '/',
      alt: 'Banner Promoción'
    }
  },
  sliderData: {
    allItems: [
      {
        sources: [
          {
            media: '(min-width: 40em)',
            srcSet: carouselImage1
          },
          {
            media: '(max-width: 40em)',
            srcSet: carouselImage1
          }
        ],
        href: '/',
        alt: 'First Image'
      },
      {
        sources: [
          {
            media: '(min-width: 40em)',
            srcSet: carouselImage2
          },
          {
            media: '(max-width: 40em)',
            srcSet: carouselImage2
          }
        ],
        href: '/',
        alt: 'Second Image'
      },
      {
        sources: [
          {
            media: '(min-width: 40em)',
            srcSet: carouselImage3
          },
          {
            media: '(max-width: 40em)',
            srcSet: carouselImage3
          }
        ],
        href: '/',
        alt: 'Second Image'
      }
    ],
    controls: 'complete',
    transition: {
      duration: 500,
      property: 'ease-out',
      timing: '0s'
    },
    infiniteMode: true
  }
};
