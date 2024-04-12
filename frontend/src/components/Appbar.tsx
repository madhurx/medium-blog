import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Appbar = () => {
	return (
		<div className="border-b flex justify-between px-10 py-4">
			<Link to={"/"}>
				<div className="flex flex-col justify-center">Medium</div>
			</Link>
			<div>
				<Link to={"/publish"}>
					<button
						type="button"
						className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-3xl text-sm px-5 py-2 text-center mx-4">
						Add Blog
					</button>
				</Link>
				<Avatar name="madhur" />
			</div>
		</div>
	);
};

export default Appbar;
