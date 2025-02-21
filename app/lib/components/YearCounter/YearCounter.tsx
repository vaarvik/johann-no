'use client';

import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import { AllColors } from '@/types/colors';
import { ScreenOptions } from '@/types/layout';
import { useYearCount } from './service/useYearCount';
import styles from './YearCounter.module.scss';

export type YearCounterSizes = '2xl' | 'xl' | 'lg' | 'md' | 'sm';

export type YearCounterProps = {
  startDate: Date;
  decimals: number;
  color?: AllColors;
  size?: YearCounterSizes | ScreenOptions<YearCounterSizes>;
};

function YearCounter({
  startDate,
  decimals,
  color,
  size = 'xl',
}: YearCounterProps) {
  const yearCount = useYearCount(startDate).toFixed(decimals);
  const digits = yearCount.split('');

  return (
    <div
      className={classNames(
        styles['year-counter'],
        color && styles[`year-counter--color-${color}`],
        ...generateClassNamesByStringOrObject(
          size,
          styles,
          'year-counter--size',
        ),
      )}
    >
      {digits.map((digit, index) => {
        const fontSize = 1 * Math.pow(0.75, index);
        const curve = 1.1;
        const opacity = 1 - Math.pow(index / (decimals - 1), curve);

        return (
          <span
            key={index}
            className={classNames(styles['year-counter__number'])}
            style={{
              fontSize: `${fontSize}em`,
              opacity: opacity.toFixed(2),
            }}
          >
            {digit}
          </span>
        );
      })}
    </div>
  );
}

export default YearCounter;
