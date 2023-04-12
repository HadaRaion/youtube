import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
	const [text, setText] = useState('');
	const navigate = useNavigate();

	const handleChange = e => setText(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();

		if (text.trim().length === 0) {
			return;
		}

		navigate(`videos/${text}`);
		setText('');
	};

	return (
		<header>
			<h1>
				<span></span>Youtube
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="bg-gray-950 p-1"
					type="text"
					placeholder="Search..."
					value={text}
					onChange={handleChange}
				/>
				<button type="submit">검색</button>
			</form>
		</header>
	);
}
