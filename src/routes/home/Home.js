import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Carousel from "../../components/carousel/Carousel"

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
                    {/* by brandon 6/9/2022 */}
                    <section className="about container">
                        {/* Intro section */}
                        <h2>About</h2>
                        <p>
                            Garage@EEE is a student-led maker space in the School of Electrical and Electronic Engineering. We provide the environment, materials, and funding for students to develop their ideas, alongside their technical skills. Furthermore, we run creative initiatives to provide opportunities for our ambassadors to enhance other holistic skills. Aided by our strong industry connections and extensive alumni network, Garage@EEE creates not only engineers of today, but thinkers, entrepreneurs, and world leaders of tomorrow.
                        </p>
                        <div className="objective">
                        <h4>Objective</h4>
                            <br/>
                            <p>
                                To encourage innovation and cultivate the spirit of entrepreneurship amongst students in the School of EEE, NTU.
                            </p>
                            <br/>
                            <p>
                                To instill a passion for engineering ideation across students in the EEE community. 
                            </p>
                        </div>
                    </section>
                    <section className="member-track container">
                        {/* Ambassadors section */}
                        <h2>Member tracks</h2>

                        <div className="ambassadors">
                            <h3>Ambassadors</h3>
                            <br/>
                            <p>
                                The Ambassador Track focuses on giving students a platform to learn and grow. Students will get to propose and facilitate unique initiatives for the NTU community. The Ambassador Track consists of 6 portfolios, namely Branding & Marketing, Business Development, Operations, Start-Up, Training & Development and Welfare. Students also ensure that Garage will be a efficient and impactful makerspace..
                            </p>
                            <div style={{marginTop:"6.25rem"}}>
                                <Gallery data={{
                                                    content: this.state.data.ambassadors,
                                                    titlePosition: "top"
                                                }}/>
                            </div>

                        </div>

                        <div className="innovators">
                            <div className="img">
                                <img src="https://media.istockphoto.com/vectors/tiny-people-working-from-different-countries-vector-id1302907498?k=20&m=1302907498&s=612x612&w=0&h=G-fj4cN5xQ26x4AzZ27pK_nawAYAR8HVHAYaP9w_7vk=" alt="innovators branding" />
                            </div>

                            <div className="texts">
                                <h3>Inovators</h3>   
                                <br/>
                                <p>
                                    The Innovator Track focuses on exposing eager and passionate students to the Start-Up maker community, promoting an entrepreneurial mindset, and bringing student self-initiated ideas to reality by providing proper guidance and learning opportunities. Therefore, we encourage you to come with a start up idea in mind and bedazzle the minds of the panel so that you can realise your ideas right here at the Garage!
                                </p>
                                <br/>
                                <h4>
                                    Innovator’s Track Recruitment
                                </h4>
                                <br/>
                                <p>
                                    Kick-start your own start-up HERE with your friends from ANY schools. You will have the chance to get up to 2.5k of funding, receive mentorships, gain connections, have access to facilities, and many more benefits.
                                </p>
                                <br/>
                                <p>
                                    Applications close on 24th September 2021
                                </p>
                                <br/>
                                <button className="btn btn-light">
                                    <p>
                                        Sign ups closed
                                    </p>
                                </button>
                            </div>          
                        </div>
                    </section>
                    {/* modification ends */}
                    {/* by brandon 6/13/2022 */}
                    <section className="project-showcase container">
                        <h2>project showcase</h2>

                        <div style={{marginTop:"6.25rem", width:"100%"}}>
                            <Carousel data={{
                                content: this.state.data.projects
                            }}/>
                        </div>
                        <button className="view-all">
                            <p>
                                View All
                            </p>
                        </button>
                    </section>
                    {/* modification ends */}
                    {/* by brandon 6/14/2022 */}
                    <section className="flagship-events container">
                        <h2>our flagship events</h2>
                        <div style={{marginTop:"6.25rem", width:"100%"}}>
                            <Carousel data={{
                                    content: this.state.data.projects
                                }}/>
                        </div>
                    </section>
                    <section className="workshops container">
                        <h2>workshops</h2>
                        <div style={{marginTop:"6.25rem", width:"100%"}}>
                            <Gallery data = {{
                                                content: this.state.data.workshops,
                                                titlePosition: "bot"
                                              }}/>
                        </div>
                    </section>
                    {/* modification ends */}
                    {/* you may continue the code according to the UI designed in figma */}
                    {/* Insert your code above */}
                </main>
                <Footer/>
            </div>
        );
    };
};

export default Home;