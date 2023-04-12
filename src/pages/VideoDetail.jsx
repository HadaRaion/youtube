import { useParams } from 'react-router-dom';

export default function VideoDetail() {
	const { videoId } = useParams();
	return (
		<div>
			<h1>Video {videoId}</h1>
		</div>
	);
}
