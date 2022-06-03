import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./EventDetail.css";

import { getData } from "../../data";

class EventDetail extends React.Component{
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
                    Event Detail
                    {/* put your code above */}
                </main>
                <Footer/>
            </div>
        );
    };
};

export default EventDetail;