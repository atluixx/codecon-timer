type UpdateCounter = {
	setFullSeconds: (updater: (prev: number) => number) => void;
	fullSeconds: number;
	isRunning: boolean;
};

type ResetTimer = {
	setIsRunning: (v: boolean) => void;
	setFullSeconds: (v: number) => void;
};

let interval: NodeJS.Timeout | null = null;

export function updateCounter({ setFullSeconds, isRunning }: UpdateCounter) {
	if (isRunning && !interval) {
		interval = setInterval(() => {
			setFullSeconds((prev) => Math.max(prev - 1, 0));
		}, 1000);
	} else if (!isRunning && interval) {
		clearInterval(interval);
		interval = null;
	}
}

export function resetTimer({ setIsRunning, setFullSeconds }: ResetTimer) {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}

	setIsRunning(false);
	setFullSeconds(30);
}
