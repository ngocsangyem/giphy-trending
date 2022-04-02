import { IGif } from '@giphy/js-types';
import styled from 'styled-components';
import { Fragment, ReactNode } from 'react';

const ModalContainer = styled.div`
	min-height: calc(100% - 3.5rem);
	@media only screen and (min-width: 576px) {
		/* max-width: 500px; */
		margin: 1.75rem auto;
	}
`;

type ModalType = {
	title: string;
	onClose: () => void;
	children: ReactNode;
};

const Modal = ({ title, onClose, children }: ModalType) => {
	return (
		<Fragment>
			<div
				className="bg-overlay fade fixed top-0 left-0 w-full h-full"
				onClick={onClose}
			></div>
			<div
				className="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
				id="exampleModalCenter"
				tabIndex={-1}
				aria-labelledby="exampleModalCenterTitle"
				aria-modal="true"
				role="dialog"
			>
				<ModalContainer className="flex items-center justify-center modal-dialog modal-dialog-centered relative w-auto pointer-events-none px-4">
					<div className="modal-content border-none shadow-lg relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
						<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
							<h5
								className="text-xl font-medium leading-normal text-gray-800"
								id="exampleModalScrollableLabel"
							>
								{title}
							</h5>
							<button
								type="button"
								className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body relative p-4">
							{children}
						</div>
						<div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
							<button
								type="button"
								className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  active show px-3"
								data-bs-dismiss="modal"
								onClick={onClose}
							>
								Close
							</button>
						</div>
					</div>
				</ModalContainer>
			</div>
		</Fragment>
	);
};

export default Modal;
