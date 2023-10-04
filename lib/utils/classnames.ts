function classnames(...classes: (string | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default classnames;
