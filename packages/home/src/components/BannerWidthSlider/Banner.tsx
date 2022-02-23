import React, { FC } from 'react';
import { Banner as BannerUI, BannerImage } from '@faststore/ui';
import { BannerData } from './Container';

const Banner: FC<BannerData> = (bannerData) => {
  return (
    <div data-store-banner-container>
      <BannerUI {...bannerData}>
        <BannerImage>
          <a href={bannerData?.bannerImage?.href}>
            <picture>
              {bannerData?.bannerImage?.sources?.map((source, index) => (
                <source key={`bannerSource_${index}`} media={source?.media} srcSet={source?.srcSet} />
              ))}
              <img alt={bannerData?.bannerImage?.alt} loading="lazy" width="374px" height="413px" />
            </picture>
          </a>
        </BannerImage>
      </BannerUI>
    </div>
  );
};

export default Banner;
