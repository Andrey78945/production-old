export type Mods = Record<string, boolean | string | undefined>;

export function classNames(cls: string, mods?: Mods, additional: Array<string | undefined> = []): string {
  const result = [cls];
  const arr: string[] = additional.map((value) => {
    if (!value) return '';
    return value;
  });
  if (additional.length > 0) result.push(...arr.filter(Boolean));
  if (mods) {
    result.push(
      ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([classNames]) => classNames)
    );
  }
  return result.join(' ');
}
