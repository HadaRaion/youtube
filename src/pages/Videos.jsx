import { useParams } from 'react-router-dom';

export default function Videos() {
	const { query } = useParams();
	return (
		<div>
			<h1>Videos {query}</h1>
		</div>
	);
}
