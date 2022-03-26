import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	type: string;
}

const StandardInput: FC<InputProps> = ({
	name,
	label,
	type = 'text',
	onChange,
	...rest
}) => {
	return (
		<div className="form-group">
			{label && (
				<label
					className="form-label inline-block mb-2 text-gray-700 text-sm"
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<input
				type={type}
				className="
						form-control
						block
						w-full
						px-3
						py-1.5
						text-base
						font-normal
						text-gray-700
						bg-white bg-clip-padding
						border border-solid border-gray-300
						rounded
						transition
						ease-in-out
						m-0
						focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
					"
				id={name}
				name={name}
				{...rest}
			/>
		</div>
	);
};

export default StandardInput;
