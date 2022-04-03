import { render } from '@testing-library/react';
import StandardInput from '../StandardInput';

describe('StandardInput', () => {
	it('should render input', () => {
		const { container } = render(
			<StandardInput
				type="text"
				name="name"
				label=""
				value="abc"
				onChange={() => {}}
			/>
		);
		expect(container.querySelector('input')).toBeInTheDocument();
	});

	it('should render input with label', () => {
		const { container } = render(
			<StandardInput
				type="text"
				name="name"
				label="label"
				value="abc"
				onChange={() => {}}
			/>
		);
		expect(container.querySelector('label')).toBeInTheDocument();
	});

	it('should render input number', () => {
		const { container } = render(
			<StandardInput
				type="number"
				name="name"
				label=""
				value="abc"
				onChange={() => {}}
			/>
		);
		expect(
			container.querySelector('input[type="number"]')
		).toBeInTheDocument();
	});
});
