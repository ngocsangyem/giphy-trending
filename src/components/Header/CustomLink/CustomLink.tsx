import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<div>
			<Link
				to={to}
				className={`text-slate-50 transition ${!match ? 'hover:text-amber-300' : ''} font-bold text-xl px-4 py-2 ${
					match ? 'text-amber-300' : ''
				}`}
				{...props}
			>
				{children}
			</Link>
		</div>
	);
};

export default CustomLink;
