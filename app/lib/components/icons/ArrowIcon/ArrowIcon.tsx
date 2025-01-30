import { IconSVGProps } from '@/types/icons';
import styles from './ArrowIcon.module.scss';

interface Props extends IconSVGProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ArrowIcon({
  color = 'currentcolor',
  direction = 'down',
  size,
  ...props
}: Props) {
  const classNames = [styles['arrow-icon'], styles[`arrow-icon--${direction}`]];

  if (size) {
    classNames.push(styles[`arrow-icon--size-${size}`]);
  }

  if (color !== 'currentcolor') {
    classNames.push(styles[`arrow-icon--color-${color}`]);
  }

  return (
    <svg
      className={classNames.join(' ')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
      />
    </svg>
  );
}
