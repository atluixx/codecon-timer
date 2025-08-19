'use client';

import { TimerReset } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import EditButtons from './components/EditButtons';
import EditInputs from './components/EditInputs';
import InitialButtons from './components/InitialButtons';

export default function Home() {
	const [fullSeconds, setFullSeconds] = useState(30);
	const [isRunning, setIsRunning] = useState(false);
	const [edit, setEdit] = useState(false);
	const [hydrated, setHydrated] = useState(false);
	const [maximized, setMaximized] = useState(false);
	const [editHours, setEditHours] = useState(0);
	const [editMinutes, setEditMinutes] = useState(0);
	const [editSeconds, setEditSeconds] = useState(30);

	useEffect(() => {
		setHydrated(true);
		setIsRunning(false);
	}, []);

	useEffect(() => {
		if (isRunning && fullSeconds > 0) {
			const interval = setInterval(() => {
				setFullSeconds((prev) => Math.max(prev - 1, 0));
			}, 1000);
			return () => clearInterval(interval);
		} else if (fullSeconds === 0) {
			setIsRunning(false);
		}
	}, [isRunning, fullSeconds]);

	const pad = (num: number) => String(num).padStart(2, '0');

	const hours = Math.floor(fullSeconds / 3600);
	const minutes = Math.floor((fullSeconds % 3600) / 60);
	const seconds = fullSeconds % 60;

	async function toggleFullscreen() {
		if (!document.fullscreenElement) {
			await document.documentElement.requestFullscreen();
			setMaximized(true);
		} else {
			await document.exitFullscreen();
			setMaximized(false);
		}
	}

	function toggleRunning() {
		setIsRunning((prev) => !prev);
	}

	function toggleEdit() {
		setEdit((prev) => {
			if (!prev) {
				setEditHours(hours);
				setEditMinutes(minutes);
				setEditSeconds(seconds);
			}
			return !prev;
		});
	}

	function applyInputValues() {
		setFullSeconds(editHours * 3600 + editMinutes * 60 + editSeconds);
		setEdit(false);
	}

	function resetTimer() {
		setIsRunning(false);
		setEdit(false);
		setFullSeconds(30);
		setEditHours(0);
		setEditMinutes(0);
		setEditSeconds(30);
	}

	if (!hydrated)
		return (
			<div className="flex justify-center items-center w-screen h-screen animate-pulse font-orbitron text-2xl text-mint">
				Loading...
			</div>
		);

	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen text-mint font-orbitron">
			<div className="text-8xl sm:text-[10rem] flex items-center justify-center gap-4">
				{edit ? (
					<EditInputs
						pad={pad}
						hours={editHours}
						minutes={editMinutes}
						seconds={editSeconds}
						setHours={setEditHours}
						setMinutes={setEditMinutes}
						setSeconds={setEditSeconds}
					/>
				) : fullSeconds === 0 ? (
					<div className="flex flex-col items-center gap-4 text-red-500 animate-pulse">
						<h1>Time is over!</h1>
						<Button
							onClick={resetTimer}
							Icon={TimerReset}
							buttonColor="#ff0000"
							transparent
							key="reset-button"
						/>
					</div>
				) : fullSeconds <= 10 && isRunning ? (
					<div>{pad(seconds)}</div>
				) : (
					<div className="flex gap-2">
						<span>{pad(hours)}</span>
						<span>:</span>
						<span>{pad(minutes)}</span>
						<span>:</span>
						<span>{pad(seconds)}</span>
					</div>
				)}
			</div>

			{fullSeconds > 0 && (
				<div className="flex gap-6 mt-10 items-center">
					{edit ? (
						<EditButtons
							setInputValues={applyInputValues}
							toggleEdit={toggleEdit}
						/>
					) : (
						<InitialButtons
							isRunning={isRunning}
							maximized={maximized}
							toggleEdit={toggleEdit}
							toggleFullscreen={toggleFullscreen}
							toggleRunning={toggleRunning}
							setFullSeconds={setFullSeconds}
							setIsRunning={setIsRunning}
						/>
					)}
				</div>
			)}
		</div>
	);
}
