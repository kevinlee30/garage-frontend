import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import useWindowDimensions from "../../hooks/useWindowDimensions"; 
import './Carousel.css'
import '@splidejs/react-splide/css';
import Tile from '../../components/tile/Tile'

function Carousel(props) {
    const width = useWindowDimensions().width
    const contentList = props.data.content
    const tilesRenderList = []

    // dynamically generate perPage prop for the carousel
    let SplidePageNum = (pageWidth) => {
        if(pageWidth > 1600) {
            return 3
        } else if (pageWidth > 800) {
            return 2
        } else if (pageWidth > 0) {
            return 1
        } 
    }

    for (let i = 0; i < contentList.length; i++){
        tilesRenderList.push(
            <SplideSlide key={i}>
                <Tile 
                    data={{
                        itemContent: contentList[i],
                        titlePosition: "botIn"
                    }}
                />  
            </SplideSlide>
        )
    }

    return(
        <div className="carousel">
            <Splide aria-label="a carousel"
                options={{
                    type: 'loop',
                    perPage: SplidePageNum(width),
                    perMove: 1,
                    gap: "3rem"
                }}>
                { tilesRenderList }
            </Splide>
        </div>
    )
}

export default Carousel