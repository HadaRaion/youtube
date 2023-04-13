import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center bg-gray-700 text-white">
			<Header />
			<div id="detail">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
