import Link, { LinkProps } from 'next/link';
import Button, { ButtonProps } from '../Button/Button';
import IconButton, { IconButtonProps } from '../IconButton/IconButton';

type Props = ButtonProps & Partial<IconButtonProps> & LinkProps;

export default function LinkButton({
  children,
  href,
  icon,
  ...otherProps
}: Props): JSX.Element {
  if (icon) {
    return (
      <Link href={href}>
        <IconButton icon={icon} {...otherProps} as="div">
          {children}
        </IconButton>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <Button {...otherProps} as="div">
        {children}
      </Button>
    </Link>
  );
}
