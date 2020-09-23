import {promises} from 'fs';
import {join, dirname} from 'path';
import express, {Request, Response} from 'express';

import {Worker} from 'worker_threads';
import {StaticPool} from 'node-worker-threads-pool';
import {cpus} from 'os';

//TODO add uploads folder
const imageUploadsDir = join(__dirname, '..', 'assets', 'images');
const fs = promises;
const router = express.Router();

const log = <T>(data: T): T => {
	console.log(data);
	return data;
};

const pool = new StaticPool({
	size: cpus().length,
	task: join(__dirname, '..', 'workers', 'imageResize.js'),
	workerData: {image: 'hero.jpg', w: 720}
});

const map = <T extends (a: any) => any>(fn: T) => (arr: Parameters<T>[0][]): ReturnType<T>[] => arr.map(fn);

const imageTypes = [
	".jpg",
	".png",
	".jpeg",
	".webp",
];
const checkIfImage = (str: string) => imageTypes.some(i => str.endsWith(i));

router.get('/', (req: Request, res: Response) => {
	fs.readdir(imageUploadsDir)
		.then(map((file) => checkIfImage(file) ? file + "?w=30&h=30" : file))
		.then(log)
		.then(data => res.status(200).json({data}));  
});

router.get('/:image', (req: Request, res: Response) => {
	pool
		.exec()
		.then(() => {
			res.status(200).json({params: req.params.image, query: [req.query.w, req.query.h]});
		});
});

export default router;
