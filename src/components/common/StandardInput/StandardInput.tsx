import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
}

const StandardInput: FC<InputProps> = ({ name, label }) => {
	return <div className="form-group"></div>;
};

export default StandardInput;
