const {join} = require('path');
const {parentPort, workerData} = require('worker_threads');
const sharp = require('sharp');

const resize = async function() {
	const outputPath = join(__dirname, "..", 'assets', 'images', 'uploads', 'test.jpg');
	const {image, w} = workerData;

	console.log(image, w);

	await sharp(join(__dirname, '..', 'assets', 'images', image))
		.resize({
			width: 500,
			fit: sharp.fit.cover
		})
		.toFile(outputPath);

	parentPort.postMessage(outputPath);
};

parentPort.on("message", async param => {
	resize();
});
