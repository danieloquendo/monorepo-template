import React from 'react';
import { Story } from '@storybook/react';
import BannerWithSlider, { BannerWithSliderProps } from '../../../src/components/BannerWidthSlider/Container';
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
          srcSet:
            'https://eobando.vtexassets.com/assets/vtex.file-manager-graphql/images/82fabdab-0d47-4519-a5e7-b17e5e0c8738___72e6bb7013d7b6d3a18b2a0065fd1161.jpg'
        },
        {
          media: '(max-width: 40em)',
          srcSet:
            'https://eobando.vtexassets.com/assets/vtex.file-manager-graphql/images/53c77c92-776d-4fe3-bcb0-e22f6a000a15___3c52819c4d63487ddfcf43627670fb78.jpg'
        }
      ],
      href: '/about',
      alt: 'Banner Promoción'
    }
  },
  sliderData: {
    allItems: [
      {
        sources: [
          {
            media: '(min-width: 40em)',
            srcSet:
              'https://eobando.vtexassets.com/assets/vtex.file-manager-graphql/images/26c92b29-6871-43f3-8413-7c17f06cd992___9ef67146f9aea2e5b59c0c7c709844df.jpg'
          },
          {
            media: '(max-width: 40em)',
            srcSet:
              'https://eobando.vtexassets.com/assets/vtex.file-manager-graphql/images/e911ab08-acd9-4f74-ab89-6d777f7c0e4f___9ef67146f9aea2e5b59c0c7c709844df.jpg'
          }
        ],
        href: '/about',
        alt: 'First Image'
      },
      {
        sources: [
          {
            media: '(min-width: 40em)',
            srcSet:
              'https://eobando.vtexassets.com/assets/vtex.file-manager-graphql/images/fb487a32-23d8-4cfd-a6e4-da6c7d6a7abf___bb69e38f8e88b3b285b5e5b473603b98.jpg'
          },
          {
            media: '(max-width: 40em)',
            srcSet:
              'https://eobando.vtexassets.com/assets/vtex.file-manager-graphql/images/df337e6c-1f61-4e09-8698-437f01bb972c___bb69e38f8e88b3b285b5e5b473603b98.jpg'
          }
        ],
        href: '/about',
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
