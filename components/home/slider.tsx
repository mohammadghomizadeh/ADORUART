// @flow 
import * as React from 'react';
import Slider from "react-slick";
type Props = {
    data?:any
};
export const SliderShow = (props: Props) => {
    const {data} = props;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        arrows:false,
        beforeChange: function(currentSlide:any, nextSlide:any) {
        },
        afterChange: function(currentSlide:any) {
        }
    };
    return (
        <div>
            {/*{*/}
            {/*    data.sliders ? (*/}
            {/*            <Slider {...settings}>*/}
            {/*                {*/}
            {/*                    data.sliders.map((item:any,i:number)=>*/}
            {/*                        <img src={"http://127.0.0.1:8000"+item.image} className={"py-8"} />*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            </Slider>*/}
            {/*    ):(*/}
                    <Slider {...settings}>
                        <img src={"/images/homeslider/slider5.png"} className={"py-8"} />
                        <img src={"/images/homeslider/slider1.png"} className={"py-8"} />
                        <img src={"/images/homeslider/slider2.png"} className={"py-8"} />
                        <img src={"/images/homeslider/slider3.png"} className={"py-8"} />
                        <img src={"/images/homeslider/slider4.png"} className={"py-8"} />
                    </Slider>
            {/*    )*/}
            {/*}*/}

        </div>
    );
};
