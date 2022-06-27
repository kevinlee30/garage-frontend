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
        <h3 className='title' style={{padding:"2rem 0"}}>
            { content.name }
        </h3>
    
    const itemHeadingTop = 
        <h3 className='title title-box'>
            { content.name }
        </h3>

    return(
        <a href={ link } className="col-6 col-lg-4" style={{textDecoration:"none"}}>
            <div key={content.id} className="item-container rounded-5" style={backgroundImage}>
                <div className='title-container'>
                    { content.name && titlePosition === "botIn" && itemHeadingTop }
                </div>
            </div>
            { content.name && titlePosition === "botOut" && itemHeadingBot }
        </a>
    );

}

export default CarouselItem;
// modification ends