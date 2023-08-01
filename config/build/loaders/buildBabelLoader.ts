export function buildBabelLoader(isDev: boolean) {
  return {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }], '@babel/preset-react'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true, // false
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json', // t("key", {ns: "locale-file"})
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
