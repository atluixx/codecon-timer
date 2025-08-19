import { Edit2, Maximize, Minimize, Pause, Play, Square } from 'lucide-react';
import { resetTimer } from '../script/counter';
import Button from './Button';

type InitialButtonsType = {
	maximized: boolean;
	toggleFullscreen: () => void;
	toggleRunning: () => void;
	toggleEdit: () => void;
	isRunning: boolean;
	setFullSeconds: (v: number) => void;
	setIsRunning: (v: boolean) => void;
};

export default function InitialButtons({
	maximized = false,
	toggleFullscreen = () => {},
	toggleEdit = () => {},
	toggleRunning = () => {},
	isRunning = false,
	setFullSeconds = () => {},
	setIsRunning = () => {},
}: InitialButtonsType) {
	return (
		<>
			{maximized ? (
				<Button
					transparent
					onClick={toggleFullscreen}
					Icon={Minimize}
					buttonColor="#fff"
					key="minimize-button"
				/>
			) : (
				<Button
					transparent
					onClick={toggleFullscreen}
					Icon={Maximize}
					buttonColor="#fff"
					key="maximize-button"
				/>
			)}
			<Button
				transparent
				Icon={Edit2}
				buttonColor="#fff"
				onClick={toggleEdit}
				key="edit-button"
			/>
			<Button
				transparent
				Icon={Square}
				buttonColor="#ff0000"
				onClick={() => resetTimer({ setFullSeconds, setIsRunning })}
				key="stop-button"
			/>
			{isRunning ? (
				<Button
					transparent
					onClick={toggleRunning}
					Icon={Pause}
					buttonColor="#ebe14a"
					key="pause-button"
				/>
			) : (
				<Button
					transparent
					onClick={toggleRunning}
					Icon={Play}
					key="play-button"
				/>
			)}
		</>
	);
}
