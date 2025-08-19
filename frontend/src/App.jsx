import React,{} from "react";
import './style.css';
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";

const App = () => {
    return(
        <>
            <Header />
            <Slider />
            <Footer />
        </>
    )
}

export default App;