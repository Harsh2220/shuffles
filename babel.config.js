module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { unstable_transformProfile: "hermes-stable" }],
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            crypto: "react-native-quick-crypto",
            stream: "stream-browserify",
            buffer: "@craftzdog/react-native-buffer",
          },
        },
      ],
    ],
  };
};
