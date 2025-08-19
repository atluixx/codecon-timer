type EditInputsType = {
	pad: (value: number) => string;
	hours: number;
	minutes: number;
	seconds: number;
	setHours: (value: number) => void;
	setMinutes: (value: number) => void;
	setSeconds: (value: number) => void;
};

export default function EditInputs({
	pad,
	hours,
	minutes,
	seconds,
	setHours,
	setMinutes,
	setSeconds,
}: EditInputsType) {
	return (
		<div className="flex justify-center items-center w-screen">
			<input
				type="number"
				min={0}
				max={23}
				value={pad(hours)}
				onChange={(e) =>
					setHours(Math.max(0, Math.min(23, Number(e.target.value))))
				}
				className="w-[15%] max-sm:w-[30%] text-center focus:outline-none"
			/>
			<span className="flex items-center">:</span>
			<input
				type="number"
				min={0}
				max={59}
				value={pad(minutes)}
				onChange={(e) =>
					setMinutes(Math.max(0, Math.min(59, Number(e.target.value))))
				}
				className="w-[15%] max-sm:w-[30%] text-center focus:outline-none "
			/>
			<span className="flex items-center">:</span>
			<input
				type="number"
				min={0}
				max={59}
				value={pad(seconds)}
				onChange={(e) =>
					setSeconds(Math.max(0, Math.min(59, Number(e.target.value))))
				}
				className="w-[15%] max-sm:w-[30%] text-center focus:outline-none "
			/>
		</div>
	);
}
