import React from "react";

import "./Header.css";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {menuIsActive: false}
        this.wrapperRef = React.createRef();
        this.menuRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.menuIsActive ? this.setState({menuIsActive: false}) : this.setState({menuIsActive: true});
    }

    render() {
        return(
            <div>
                <header>
                    <h1>LOGO</h1>
                    <div id="menu-icon-container" className={this.state.menuIsActive ? "change" : null}>
                        <div onClick={this.handleClick}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                </header>
                <div id="menu" style={{right: `${this.state.menuIsActive ? "0px" : "-300px"}`}}>
                    {/* insert hyperlinks below */}
                    <a href="#"><h2>Link 1</h2></a>
                    <a href="#"><h2>Link 2</h2></a>
                    <a href="#"><h2>Link 3</h2></a>
                </div>
            </div>
            
        )
    };
};

export default Header;