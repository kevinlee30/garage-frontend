// by brandon 6/9/2022
import React from 'react';
import './Tile.css'

function CarouselItem(props) {
    const content = props.data.itemContent;
    const titlePosition = props.data.titlePosition;

    const link = props.data.link || "https://reactjs.org/"
    const backgroundImage = {
        backgroundImage: `url(${content.displayImage})`
    }

    const itemHeadingBot =             
        <h3 style={{padding:"2rem 0"}}>
            { content.name }
        </h3>
    
    const itemHeadingTop = 
        <h3 style={{padding:"1.5rem"}}>
            { content.name }
        </h3>

    return(
        <a href={ link } className="col-12 col-sm-6 col-lg-4" style={{textDecoration:"none"}}>
            <div key={content.id} className="item-container" style={backgroundImage}>
                { content.name && titlePosition === "top" && itemHeadingTop }
            </div>
            { content.name && titlePosition === "bot" && itemHeadingBot }
        </a>
    );

}

export default CarouselItem;
// modification ends