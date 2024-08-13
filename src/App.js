import { HashRouter, Routes, Route } from "react-router-dom";
import Calendar from "./calendar";
import Portfolio from "./portfolio";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Portfolio />} />
					<Route path="/calendar" element={<Calendar />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
