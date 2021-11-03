Reproduction of a possible bug in [karma-runner/karma](https://github.com/karma-runner/karma) with `restartOnFileChange: true`.

(See previous occurrence of a [similar bug](https://github.com/karma-runner/karma/issues/1640) back in 2015)

Steps to reproduce:

1. Clone this repo (`git clone https://github.com/scottohara/karma-restartonfilechange-bug`)
2. Change into directory (`cd karma-restartonfilechange-bug`)
3. Install npm dependencies (`npm install`)
4. Start karma (`karma start`)
5. Open the `test.js` file, and repeatedly hit save.  Note that the test successfully re-runs on each save.
6. Stop karma (`CTRL-C`)
7. Edit `karma.conf.js` and set `restartOnFileChange: true`
8. Start karma (`karma start`)
9. Open the `test.js` file, and repeatedly hit save.  Note that the test does not re-run on each save.