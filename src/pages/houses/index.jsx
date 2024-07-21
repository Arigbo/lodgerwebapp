import React from "react";
import Link from "next/link";
import FrontLayout from "../../layouts/front.layout";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import FooterComp from "../../components/FooterComp";
const url = 'http://localhost:3000/post'
export const getStaticProps = async () => {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    return {
        props: { product: data }
    }
}

export function SlideNext() {
    const swiper = useSwiper();

    return (

        <i className="fas fa-chevron-right" onClick={() => swiper.slideNext()}></i>
    );
}
export function SlidePrev() {
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    return (
        <i className="fas fa-chevron-left" onClick={() => swiper.slidePrev()} ></i>

    );
}

const Search = ({ product }) => {


    return (
        <div>
            <FrontLayout>
                <div className="search_page_dp">
                    <div className="search_page_dp_header">
                        <div className="search_page_dp_header_left">
                            <img src={"/images/Vector.png"} alt="mmm" />
                            <h1>Lodger</h1>
                        </div>
                        <div className="search_page_dp_header_middle">
                            <form className="search_page_dp_header_middle_search">
                                <input type="text" name="search" id="search" placeholder="Search For an Apartment" />
                                <i className="fas fa-search"></i>
                            </form>
                            <div className="search_page_dp_header_middle_filter_button">
                                <i className="fas fa-sliders"></i>
                            </div>
                        </div>
                        <div className="search_page_dp_header_right">
                            <i className="far fa-bell"></i>
                            <div className="search_page_dp_header_right_avatar">
                                <p>&#129489;</p>
                            </div>
                        </div>
                    </div>
                    <div className="search_page_dp_inner">
                        <div className="search_page_dp_inner_dashbd">
                            <div className="search_page_dp_inner_dashbd_top">
                                <i className="fas fa-house"></i>
                                <i className="far fa-envelope"></i>
                                <i className="far fa-calendar"></i>
                                <i className="far fa-bookmark"></i>
                            </div>
                            <div className="search_page_dp_inner_dashbd_bottom">
                            <i className="far fa-trash-can"></i>
                            <i className="fas fa-sign-out"></i>
                            </div>
                        </div>
                        <div className="search_page_dp_inner_results">
                            {product.map(item => (

                                <div className={`${item.availableRooms == 0 ? "none" : "search_page_dp_inner_results_result"}`} key={item.id}>
                                    <div className="search_page_dp_inner_results_result_inner">

                                        <Swiper
                                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            autoPlay={
                                                { delay: 500 }
                                            }
                                            speed={2000}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}>
                                            <div className="scroll">
                                                <SlidePrev />
                                                <SlideNext />
                                            </div>
                                            <div className="search_page_dp_inner_results_result_inner_img">
                                                <SwiperSlide><img src={item.frontyard} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.restroom} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.kitchen} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.wardrobe} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.toilet} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.backyard} alt="mmm" /></SwiperSlide>
                                            </div>

                                        </Swiper>

                                        <Link href={`/blogs/${item.id}`} >
                                            <div className="search_page_dp_inner_results_result_inner_info">
                                                <h1 className={`${item.ban == true ? "banded" : "none"}`}>Banded</h1>
                                                <div className={`${item.ban == ! true ? "search_page_dp_inner_results_result_inner_info_inner" : "none"}`}>
                                                    <h1 className="price">${item.price}</h1>
                                                    <h1 className="location">{item.houseNo} {item.streetName} {item.state}</h1>
                                                    <div className="search_page_dp_inner_results_result_inner_info_inner_x-details">
                                                        <h1>Available Rooms: {item.availableRooms}</h1>
                                                        <i className="fas fa-bookmark"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>


                                </div>

                            ))}

                        </div>
                    </div>
                </div>
                <div className="search_page_mobile">
                    <div className="search_page_mobile_header">
                        <div className="search_page_mobile_header_logo">
                            <img src={"/images/Vector.png"} alt="mmm" />
                        </div>
                        <div className="search_page_mobile_header_text">
                            <h1>Rent an apartment with ease</h1>
                        </div>
                    </div>
                    <div className="search_page_mobile_inner">
                        <div className="search_page_mobile_inner_filter">
                            <form className="search_page_mobile_inner_filter_search">
                                <i className="fas fa-search"></i>
                                <input type="text" name="search" id="search" placeholder="Search For an Apartment" />
                            </form>
                            <div className="search_page_mobile_inner_filter_filter_button">
                                <i className="fas fa-sliders"></i>
                            </div>
                        </div>
                        <div className="search_page_mobile_inner_top_picks">
                            <div className="search_page_mobile_inner_top_picks_header">
                                <h1>Top Picks</h1>
                            </div>
                            <div className="search_page_mobile_inner_top_picks_inner">
                                <ul>
                                    <li ><i className="fas fa-house"></i><br /> <span>Self Contain</span></li>
                                    <li><i className="fas fa-house"></i><br /> <span>One Room</span></li>
                                    <li><i className="fas fa-house" ></i><br /> <span>One Bedroom</span></li>
                                    <li><i className="fas fa-house"></i><br /> <span>Two Bedroom</span></li>
                                    <li><i className="fas fa-house"></i><br /> <span>Self Contain</span></li>
                                    <li><i className="fas fa-house"></i><br /> <span>Self Contain</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="search_page_mobile_inner_scope_button">
                            <a href="http://"><button type="submit"><i className="fas fa-calendar"></i> <span>Book An Apointment with
                                the Landlord</span></button></a>
                        </div>
                        <div className="search_page_mobile_inner_results">
                            {product.map(item => (

                                <div className={`${item.availableRooms == 0 ? "none" : "search_page_inner_results_result"}`} key={item.id}>
                                    <div className="search_page_mobile_inner_results_result_inner">

                                        <Swiper
                                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            autoPlay={
                                                { delay: 500 }
                                            }
                                            speed={2000}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}>
                                            <div className="scroll">
                                                <SlidePrev />
                                                <SlideNext />
                                            </div>
                                            <div className="search_page_mobile_inner_results_result_inner_img">
                                                <SwiperSlide><img src={item.frontyard} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.restroom} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.kitchen} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.wardrobe} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.toilet} alt="mmm" /></SwiperSlide>
                                                <SwiperSlide><img src={item.backyard} alt="mmm" /></SwiperSlide>
                                            </div>

                                        </Swiper>

                                        <Link href={`/blogs/${item.id}`} >
                                            <div className="search_page_mobile_inner_results_result_inner_info">
                                                <h1 className={`${item.ban == true ? "banded" : "none"}`}>Banded</h1>
                                                <div className={`${item.ban == ! true ? "search_page_inner_results_result_inner_info_inner" : "none"}`}>
                                                    <h1 className="price">${item.price}</h1>
                                                    <h1 className="location">{item.houseNo} {item.streetName} {item.state}</h1>
                                                    <div className="search_page_inner_results_result_inner_info_inner_x-details">
                                                        <h1>Available Rooms: {item.availableRooms}</h1>
                                                        <i className="fas fa-bookmark"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>


                                </div>

                            ))}

                        </div>

                    </div>
                </div>
            </FrontLayout>
        </div>
    )
}
export default Search