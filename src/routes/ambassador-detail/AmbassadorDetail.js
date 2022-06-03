import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./AmbassadorDetail.css";

import { getData } from "../../data";

class AmbassadorDetail extends React.Component{
    constructor() {
        super();
        let mockData = getData();
        this.state = {
            data: mockData,
        };
    };

    render() {
        return(
            <div>
                <Header/>
                <main>
                    {/* put your code below */}
                    Ambassador Detail
                    {/* put your code above */}
                </main>
                <Footer/>
            </div>
        );
    };
};

export default AmbassadorDetail;