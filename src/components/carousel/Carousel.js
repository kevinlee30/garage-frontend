import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import useWindowDimensions from "../../hooks/useWindowDimensions"; 
import './Carousel.css'
import '@splidejs/react-splide/css';

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

    let imgSrc = ""
    for (let i = 0; i < contentList.length; i++){
        let content = contentList[i]
        imgSrc = content.displayImage
        tilesRenderList.push(
            <SplideSlide key={i}>
                <div className="card h-100 border-0 rounded-5">
                    <img src={imgSrc} className="card-img-top square-fit" alt="..."/>
                    <div className="card-body p-4">
                        <div className="card-title h3 position-relative top-50 start-50 translate-middle">
                            { content.name }
                        </div>
                    </div>
                </div>
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