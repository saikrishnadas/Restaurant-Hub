import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="main">
			<div className="navbar-container">
				<NavBar />
			</div>
			<div className="body-container">
				<Header />
				<Routes>
					<Route path="/" element={<Orders />} />
					<Route path="/menu" element={<Menu />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
