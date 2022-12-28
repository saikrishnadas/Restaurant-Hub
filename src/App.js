import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Orders from "./components/Orders";

function App() {
	return (
		<div className="main">
			<div className="navbar-container">
				<NavBar />
			</div>
			{/* <div className="body-container">
				<Header />
				<Menu />
			</div> */}
			<div className="body-container">
				<Header />
				{/* <Menu /> */}
				<Orders />
			</div>
		</div>
	);
}

export default App;
