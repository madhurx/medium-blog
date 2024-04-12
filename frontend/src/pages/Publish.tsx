import React from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");

	const navigate = useNavigate();
	const handleSubmit = async () => {
		const response = await axios.post(
			`${BACKEND_URL}/api/v1/blog`,
			{
				title,
				content,
			},
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("jwt")}`,
				},
			},
		);
		navigate(`/blog/${response.data.id}`);
	};
	return (
		<div>
			<Appbar />
			<div className="flex justify-center">
				<div className=" max-w-screen-xl py-2 w-5/6">
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						aria-describedby="helper-text-explanation"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4"
						placeholder="Title"
					/>

					<textarea
						id="message"
						rows={4}
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 my-4"
						placeholder="Write your thoughts here..."></textarea>

					<button
						type="button"
						className="text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 w-full my-4"
						onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Publish;
