import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';

export default function Header() {
	const { query } = useParams();
	const [text, setText] = useState('');
	const navigate = useNavigate();

	const handleChange = e => setText(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		navigate(`videos/${text}`);
	};

	useEffect(() => setText(query || ''), [query]);

	return (
		<header className="w-full flex p-4 mb-4 text-2xl border-b border-zinc-600">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl text-brand" />
				<h1 className="font-bold text-3xl ml-2">Youtube</h1>
			</Link>

			<form className="w-full flex justify-center" onSubmit={handleSubmit}>
				<input
					className="bg-gray-950 p-2 w-7/12 outline-none text-gray-50"
					type="text"
					placeholder="Search..."
					value={text}
					onChange={handleChange}
				/>
				<button className="bg-zinc-600 p-4" type="submit">
					<BsSearch />
				</button>
			</form>
		</header>
	);
}
