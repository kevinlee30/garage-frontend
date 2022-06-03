import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./WorkshopDetail.css";

import { getData } from "../../data";

class WorkshopDetail extends React.Component{
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
                    Workshop Detail
                    {/* put your code above */}
                </main>
                <Footer/>
            </div>
        );
    };
};

export default WorkshopDetail;