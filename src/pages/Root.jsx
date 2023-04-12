import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<p>헤더</p>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
