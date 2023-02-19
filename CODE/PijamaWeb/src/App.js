import { Container, CssBaseline } from "@mui/material";
import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import Layout from "./components/layout";
import HomePage from "./views/home";

function App() {
	return (
		<>
			<CssBaseline />
			<Header />
      <Banner />
			<Container>
				<HomePage></HomePage>
			</Container>
			<Footer />
		</>
	);
}

export default App;
