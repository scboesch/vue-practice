module.exports = {
  verbose: true,
  testURL: "http://localhost",
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  }
};
