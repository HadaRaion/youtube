import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Root() {
	return (
		<div className="min-h-screen flex flex-col items-center bg-gray-700 text-white">
			<Header />
			<div id="detail">
				<Outlet />
			</div>
		</div>
	);
}
