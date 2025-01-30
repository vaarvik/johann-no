export default function classNames(...args: string[]) {
  const classes = args.filter(Boolean).join(" ");
  return classes;
}
