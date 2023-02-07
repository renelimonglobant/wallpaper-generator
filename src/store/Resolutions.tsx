interface RatioOptions {
  key: string;
  label: string;
  height: number;
  width: number;
}

export const Resolutions: RatioOptions[] = [
  {
    key: 'mi-watch',
    label: 'Mi Watch',
    width: 460, // 454
    height: 460, // 454
  },
  {
    key: 'apple-watch-7-8-42',
    label: 'Apple Watch Series 8 and 7 42mm',
    width: 352,
    height: 430,
  },
  {
    key: 'apple-watch-3',
    label: 'Apple Watch Series 3',
    width: 312,
    height: 390,
  },
  {
    key: 'apple-watch-4-5-6-se-20-22',
    label: 'Apple Watch Series 6, 5, 4, and SE (2020 / 2022)',
    width: 368,
    height: 448,
  },
  {
    key: 'apple-watch-7-8-45',
    label: 'Apple Watch Series 8 and 7 45mm',
    width: 396,
    height: 484,
  },
];
