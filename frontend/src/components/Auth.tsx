import { Link } from "react-router-dom";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
	return (
		<div className=" h-screen flex justify-center flex-col items-center">
			<div className="text-center">
				<span className="font-bold text-3xl">
					{type === "signup" ? "Create an Account" : "Welcome back"}
				</span>
				<br />
				<span className="text-slate-500 font-semibold">
					{type === "signup"
						? "Already have an account? "
						: "Want to create an account? "}
				</span>
				<span className="text-slate-500 font-semibold underline">
					{type === "signup" ? (
						<Link to="/signin">Sign In</Link>
					) : (
						<Link to="/signup">Sign Up</Link>
					)}
				</span>
			</div>
		</div>
	);
};

export default Auth;
