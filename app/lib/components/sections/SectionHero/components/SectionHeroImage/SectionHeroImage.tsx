'use client';

import johannPicture from '@/assets/img/johann-main-crop.jpeg';
import { useAnimation } from '@/services/hooks/useAnimation';
import classNames from '@/services/utils/classNames';
import Image from 'next/image';
import styles from './SectionHeroImage.module.scss';

export default function SectionHeroImage() {
  const { classes, ref } = useAnimation<HTMLDivElement>({
    animations: {
      origin: 'center-center',
      duration: 1000,
      easing: 'ease',
      start: {
        opacity: 0,
        translate: 'left',
      },
      end: {
        opacity: 100,
        translate: 'center',
      },
    },
  });
  return (
    <div
      className={classNames(
        ...classes,
        styles['section-hero-image'],
        'fill-content',
      )}
      ref={ref}
    >
      <Image
        alt="Picture of Johann"
        className={`${styles['section-hero-image__image']}`}
        src={johannPicture}
      />
    </div>
  );
}
