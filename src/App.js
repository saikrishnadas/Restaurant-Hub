import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

function App() {
	return (
		<div className="main">
			<div className="navbar-container">
				<NavBar />
			</div>
			<div className="body-container">
				<Header />
				<Menu />
			</div>
		</div>
	);
}

export default App;
