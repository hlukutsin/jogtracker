module.exports = {
  verbose: true,
  setupFiles: ["jest-localstorage-mock"],
  setupFilesAfterEnv: ["jest-enzyme"],
  testEnvironment: "enzyme",
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
