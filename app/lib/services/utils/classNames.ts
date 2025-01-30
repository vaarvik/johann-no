export default function classNames(...args: (string | boolean | undefined)[]) {
  return args.filter(Boolean).join(' ');
}
