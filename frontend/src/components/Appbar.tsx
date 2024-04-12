import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Appbar = () => {
	return (
		<div className="border-b flex justify-between px-10 py-4">
			<Link to={"/"}>
				<div className="flex flex-col justify-center">Medium</div>
			</Link>
			<div>
				<Avatar name="madhur" />
			</div>
		</div>
	);
};

export default Appbar;
