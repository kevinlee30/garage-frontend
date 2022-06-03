import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";

import { getData } from "../../data";

import "./Home.css";

class Home extends React.Component{
    constructor() {
        super();
        let mockData = getData();
        this.state = {
            data: mockData,
        };
    };

    render() {
        return(
            <div id="home">
                <Header/>
                <main>
                    {/* Insert your code below */}
                    <div className="banner">
                        <h1>Garage</h1>
                        <div className="transparant-cover"></div>
                    </div>
                    {/* Please always put section into section tag */}
                    <section>
                        {/* Intro section */}
                        <h2>What is garage</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </section>
                    <section>
                        {/* Ambassadors section */}
                        <h2>Ambassadors</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Carousel data={this.state.data.ambassadors}/>
                    </section>
                        {/* you may continue the code according to the UI designed in figma */}
                    {/* Insert your code above */}
                </main>
                <Footer/>
            </div>
        );
    };
};

export default Home;