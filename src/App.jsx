import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Root from './pages/Root';
import Home from './pages/Home';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'videos/:query', element: <Videos /> },
			{ path: 'videos/watch/:videoId', element: <VideoDetail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
