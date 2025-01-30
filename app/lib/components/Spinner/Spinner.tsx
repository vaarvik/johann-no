import classNames from '@/services/utils/classNames';
import { FontSize } from '@/types/text';
import styles from './Spinner.module.scss';

interface Props {
  size?: FontSize;
}
export default function Spinner({ size = 'md' }: Props) {
  return (
    <div
      className={classNames(styles.spinner, styles[`spinner--size-${size}`])}
    ></div>
  );
}
