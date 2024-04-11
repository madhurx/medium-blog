import { SignupType } from "@madhurx/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
	const navigate = useNavigate();
	const [postInputs, setPostInputs] = useState<SignupType>({
		name: "",
		email: "",
		password: "",
	});

	async function sendRequest() {
		try {
			const response = await axios.post(
				`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
				postInputs,
			);
			const {jwt} = response.data;
			localStorage.setItem("jwt", jwt);
			navigate("/blogs");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className=" h-screen flex justify-center flex-col items-center">
			<AuthHeader type={type} />

			{type === "signup" ? (
				<>
					<LabelledInput
						label="Email"
						placeholder="jane@mail.com"
						name="email"
						type="email"
						onChange={(e) => {
							setPostInputs((c) => ({ ...c, [e.target.name]: e.target.value }));
						}}
					/>
					<LabelledInput
						type="password"
						label="Password"
						placeholder="123456"
						name="password"
						onChange={(e) => {
							setPostInputs((c) => ({ ...c, [e.target.name]: e.target.value }));
						}}
					/>
					<LabelledInput
						label="Full name"
						placeholder="Full name"
						name="Jane"
						onChange={(e) => {
							setPostInputs((c) => ({ ...c, [e.target.name]: e.target.value }));
						}}
					/>
					<LabelledButton buttonText="Sign Up" sendRequest={sendRequest} />
				</>
			) : (
				<>
					<LabelledInput
						label="Email"
						placeholder="jane@mail.com"
						name="email"
						type="email"
						onChange={(e) => {
							setPostInputs((c) => ({ ...c, [e.target.name]: e.target.value }));
						}}
					/>
					<LabelledInput
						type="password"
						label="Password"
						placeholder="123456"
						name="password"
						onChange={(e) => {
							setPostInputs((c) => ({ ...c, [e.target.name]: e.target.value }));
						}}
					/>
					<LabelledButton buttonText="Sign In" sendRequest={sendRequest} />
				</>
			)}
		</div>
	);
};

export default Auth;

interface LabelledInputType {
	label: string;
	placeholder: string;
	name: string;
	type?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelledInput({
	label,
	placeholder,
	onChange,
	name,
	type,
}: LabelledInputType) {
	return (
		<div className="mb-6 w-1/2">
			<label
				htmlFor="email"
				className="block mb-2 text-sm font-medium text-gray-900">
				{label}
			</label>
			<input
				type={type || "text"}
				id="email"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder={placeholder}
				required
				onChange={onChange}
				name={name}
			/>
		</div>
	);
}

function LabelledButton({
	buttonText,
	sendRequest,
}: {
	buttonText?: string;
	sendRequest: () => void;
}) {
	return (
		<button
			type="button"
			className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-6 w-1/2"
			onClick={sendRequest}>
			{buttonText}
		</button>
	);
}

function AuthHeader({ type }: { type: string }) {
	return (
		<div className="text-center mb-6">
			<span className="font-bold text-3xl">
				{type === "signup" ? "Create an Account" : "Welcome back"}
			</span>
			<br />

			<span className="text-slate-500 font-semibold">
				{type === "signup"
					? "Already have an account? "
					: "Don't have an account? "}
			</span>

			<span className="text-slate-500 font-semibold underline">
				{type === "signup" ? (
					<Link to="/signin">Sign In</Link>
				) : (
					<Link to="/signup">Sign Up</Link>
				)}
			</span>
		</div>
	);
}
