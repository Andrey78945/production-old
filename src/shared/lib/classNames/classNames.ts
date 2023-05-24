type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[],
): string {
  const result = [cls];
  if (additional) result.push(...additional.filter(Boolean));
  if (mods) {
    result.push(
      ...Object.entries(mods)
        .filter(([classNames, value]) => Boolean(value))
        .map(([classNames]) => classNames),
    );
  }
  return result.join(' ');
}
