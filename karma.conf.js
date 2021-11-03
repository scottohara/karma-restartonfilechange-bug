module.exports = config => {
	config.set({
		frameworks: ["jasmine"],
		files: ["test.js"],
		browsers: ["ChromeHeadless"],
		restartOnFileChange: false
	});
};