import classNames from '@/services/utils/classNames';
import { generateClassNamesByStringOrObject } from '@/services/utils/generateClassNamesByStringOrObject';
import { ScreenOptions, Widths } from '@/types/layout';
import { ElementType } from 'react';
import ContentPadded, {
  ContentPaddedProps,
} from '../ContentPadded/ContentPadded';
import styles from './Container.module.scss';

export type TextAlign = 'left' | 'center' | 'right';

interface Props extends ContentPaddedProps {
  as?: ElementType;
  textAlign?: TextAlign | ScreenOptions<TextAlign>;
  width?: Widths | ScreenOptions<Widths>;
  fillContent?: boolean;
}

export default function Container({
  as: HTMLTag = 'div',
  className,
  textAlign = 'left',
  width = 'default',
  padding = { mobile: { x: '400' }, tablet: { x: '800' } },
  children,
  fillContent,
  ...otherProps
}: Props) {
  const widthClassNames = generateClassNamesByStringOrObject(
    width,
    styles,
    'container--width',
  );

  const alignClassNames = generateClassNamesByStringOrObject(
    textAlign,
    styles,
    'container--text',
  );

  return (
    <HTMLTag
      className={classNames(
        styles['container'],
        ...widthClassNames,
        ...alignClassNames,
        fillContent && 'fill-content',
        className,
      )}
      {...otherProps}
    >
      <ContentPadded fillContent padding={padding}>
        {children}
      </ContentPadded>
    </HTMLTag>
  );
}
