import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
	it('should render modal', () => {
		const { container } = render(<Modal title='This is Modal' onClose={() => {}}><p>This is Modal content</p></Modal>);
		expect(screen.getByText('This is Modal')).toBeInTheDocument();
		expect(container.querySelector('div')).toBeInTheDocument();
	});
})