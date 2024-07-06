import './EmblaCarousel/embla.css';
import { EmblaCarousel } from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { RibonBanner } from './RibonBanner';
import { Customizing } from './Customizing';
import { BestItemList } from './BestItemList';

/**
 * @todo banner images data fetch api
 */
const Main = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = ['images/banner_img_01.png', 'images/banner_img_02.png', 'images/banner_img_03.png'];

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <RibonBanner />
      <Customizing />
      <BestItemList />
    </>
  );
};

export default Main;
