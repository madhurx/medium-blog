import { Link } from "react-router-dom";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
	return (
		<div className=" h-screen flex justify-center flex-col items-center">
			<div className="text-center mb-6">
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
			{type === "signup" ? (
				<>
					<LabelledInput
						label="Email"
						placeholder="Email"
						onChange={() => {}}
					/>
					<LabelledInput
						label="Password"
						placeholder="Password"
						onChange={() => {}}
					/>
					<LabelledInput
						label="Confirm Password"
						placeholder="Confirm Password"
						onChange={() => {}}
					/>
				</>
			) : (
				<>
					<LabelledInput
						label="Email"
						placeholder="Email"
						onChange={() => {}}
					/>
					<LabelledInput
						label="Password"
						placeholder="Password"
						onChange={() => {}}
					/>
				</>
			)}
		</div>
	);
};

export default Auth;

interface LabelledInputType {
	label: string;
	placeholder: string;
	onChange: () => void;
}
function LabelledInput({ label, placeholder, onChange }: LabelledInputType) {
	return (
		<div className="mb-6 w-1/2">
			<label
				htmlFor="email"
				className="block mb-2 text-sm font-medium text-gray-900">
				{label}
			</label>
			<input
				type="email"
				id="email"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder={placeholder}
				required
				onChange={onChange}
			/>
		</div>
	);
}
