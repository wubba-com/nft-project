import Slider from "react-slick";
import nft1 from "../components/img/nft-slider-1.webp"
import nft2 from "../components/img/nft-slider-2.webp"
import nft3 from "../components/img/nft-slider-3.webp"
import nft4 from "../components/img/nft-slider-4.webp"
import nft5 from "../components/img/nft-slider-5.webp"
import nft6 from "../components/img/nft-slider-6.webp"
import nft7 from "../components/img/nft-slider-7.webp"
import nft8 from "../components/img/nft-slider-8.webp"


const NftSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        speed: 4000,
        cssEase: "linear",
        adaptiveHeight: true,
        arrows: false,
    };

    let items = [
        nft1, nft2, nft3,
        nft4, nft5, nft6,
        nft7, nft8,
    ]

    return (
        <div className="wrapper-sliders">

            <Slider {...settings}>
                {/*{items.map((classItem, i) =>*/}
                {/*    <div key={i}>*/}
                {/*        <div className={classItem}></div>*/}
                {/*    </div>*/}
                {/*)}*/}

                {items.map((item, i) =>
                    <div key={i} className="slider-items-nft">
                        <img src={item}/>
                    </div>
                )}
            </Slider>
        </div>
    );
}

export default NftSlider