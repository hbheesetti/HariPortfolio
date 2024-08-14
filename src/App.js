import { HashRouter, Routes, Route } from "react-router-dom";
import Calendar from "./calendar";
import Portfolio from "./portfolio";
import Disclaimer from "./discliamer";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Portfolio />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/disclaimer" element={<Disclaimer />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
