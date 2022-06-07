module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/.next/"], //quais pastas quero ignorar nos testes
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ], //array de arquivos que queremos que o Jest execute antes de executar os testes
  transform: { // como se fossem os Loaders dentro do webpack, arquivos com tais extensões quero transformar o código antes de executar, pois os arquivos escritos em TS precisam ser convertidos com o babel para uma maneira que o Jest consiga entender
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom', //em que ambiente nossos testes estão executando
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx", // poderia ser {js,jsx}
    "!src/**/*.spec.tsx", //excluindo os .spec.tsx, _app, _document
    "!src/**/_app.tsx", 
    "!src/**/_document.tsx", 

  ],
  coverageReporters: ["lcov", "json"]
};

