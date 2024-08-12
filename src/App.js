import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./calendar";
import Portfolio from "./portfolio";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Portfolio />} />
					<Route path="/calendar" element={<Calendar />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
