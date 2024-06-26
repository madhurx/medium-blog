import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import FullBlog from "./pages/FullBlog";
import Publish from "./pages/Publish";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/" element={<Blog />} />
					<Route path="/publish" element={<Publish />} />
					<Route path="/blog/:id" element={<FullBlog />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
