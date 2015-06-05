var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/(test-main|test-helpers).js/.test(file)) {
        continue;
    }
    if (/t\/js\/.*\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
    baseUrl: '/base',
    waitSeconds: 0,
    paths: {
    },
    packages: [
    ],
    deps: tests,
    callback: window.__karma__.start
});
