import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent } from 'react';

type ButtonProps = {
	Icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>> | undefined;
	label?: string;
	onClick?: () => void;
	buttonColor?: string;
	transparent?: boolean;
};

export default function Button({
	Icon = undefined,
	label,
	onClick,
	buttonColor,
	transparent = false,
}: ButtonProps) {
	const hasIcon = Boolean(Icon);
	const hasLabel = Boolean(label);

	return (
		<div className="w-12 h-12 rounded-full border-gray-500 flex justify-center items-center bg-[#141414] hover:scale-105 hover:bg-[#171717] transition-all duration-300">
			<button
				type="button"
				onClick={onClick}
				className={`
        flex items-center justify-center
        rounded-md
        ${transparent ? '' : ''}
        ${hasIcon && !hasLabel ? 'w-12 h-12 p-0' : ''}
      `}
			>
				{/* @ts-expect-error: 'undefined' is not assignable to type ReactElement  */}
				{hasIcon && <Icon color={buttonColor} className="w-5 h-5" />}
				{hasLabel && <span>{label}</span>}
			</button>
		</div>
	);
}
