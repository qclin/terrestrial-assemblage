module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "i18next-extract",
      {
        locales: ["en", "de"],
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: ["en"],
        useI18nextDefaultValue: ["en"],
        discardOldKeys: true,
        outputPath: "config/locales/{{locale}}/{{ns}}.json",
        customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]],
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
};
