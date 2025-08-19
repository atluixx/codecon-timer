import { Check, XIcon } from 'lucide-react';
import Button from './Button';

export default function EditButtons({
	toggleEdit = () => {},
	setInputValues = () => {},
}: {
	toggleEdit: () => void;
	setInputValues: () => void;
}) {
	return (
		<>
			<Button
				transparent
				Icon={XIcon}
				buttonColor="#ff0000"
				onClick={toggleEdit}
				key="x-button"
			/>
			<Button
				transparent
				Icon={Check}
				onClick={setInputValues}
				buttonColor="#00ff00"
				key="check-button"
			/>
		</>
	);
}
