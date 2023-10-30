// interface TakePhoto {
// 	cameraMode: string;
// 	filter: string;
// 	burst: number;
// }

// interface Story {
// 	createStory(): void;
// }

// class Instagram implements TakePhoto {
// 	constructor(
// 		public cameraMode: string,
// 		public filter: string,
// 		public burst: number
// 	) {}
// }

// class Youtube implements TakePhoto, Story {
// 	constructor(
// 		public cameraMode: string,
// 		public filter: string,
// 		public burst: number,
// 		public short: string
// 	) {}
// 	createStory(): void {}
// }

abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {}

	abstract getSepia(): void;
	getReelTime(): number {
		//some complex calculation
		return 8;
	}
}

class Instagram extends TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter);
	}

	getSepia(): void {
		console.log('Sepia');
	}
}

const nv = new Instagram('test', 'test', 8);

nv.getReelTime();
