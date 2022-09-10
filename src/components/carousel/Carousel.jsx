import React, { useRef, useState }  from "react";
import { useSwiper } from "swiper/react";
import "./carousel.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel () {
    let [currentSlide, setCurrentSlide] = useState(1)
    const swiper = useSwiper();
    const swiperRef = useRef();

    function carouselNav(e) {
        if (e.target.id === "swiperPrev") swiperRef.current.slidePrev()
        if (e.target.id === "swiperNext") swiperRef.current.slideNext()
    }

    return (
        <section id="carouselSection">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={4}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                    centeredSlides={true}
                    className="carousel"
                >
                            <SwiperSlide>
                                <div className="carouselSlideInner" id="carouselWater">                                    
                                    <h2>Save watter</h2>
                                    <div>Taking on the issue of ensuring access to safe water requires worldwide effort.</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carouselSlideInner" id="carouselTrees">                                    
                                    <h2>Plant trees</h2>
                                    <div>Taking on the issue of ensuring access to safe water requires worldwide effort.</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carouselSlideInner" id="carouselOrganic">                                    
                                    <h2>Choose organic</h2>
                                    <div>Taking on the issue of ensuring access to safe water requires worldwide effort.</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carouselSlideInner" id="carouselPlastic">
                                    <h2>Avoid plastic</h2>
                                    <div>Taking on the issue of ensuring access to safe water requires worldwide effort.</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carouselSlideInner" id="carouselWater">
                                    <h2>Save watter</h2>
                                    <div>Taking on the issue of ensuring access to safe water requires worldwide effort.</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carouselSlideInner" id="carouselEnergy">
                                    <h2>Save energy</h2>
                                    <div>Taking on the issue of ensuring access to safe water requires worldwide effort.</div>
                                </div>
                            </SwiperSlide>
                </Swiper>
                <div id="swiperNav">
                    <span id="swiperPrev" onClick={carouselNav}> {"<"} </span>
                    <span id="slidesNum">{currentSlide}<span> / 6</span> </span>
                    <span id="swiperNext" onClick={carouselNav}> {">"} </span>
                </div>
        </section>
    )
}
