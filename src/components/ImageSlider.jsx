
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const data = [
    {
        id: "1",
        Text: "lorem33333333",
        Btn: "Get Started",
        Img: "https://media-cdn.bnn.in.th/150788/MacBook_Pro_14-in_Silver_PDP_Image_Position-1__TH-square_medium.jpg"
    },
    {
        id: "2",
        Text: "'ljjsshjf'",
        Btn: "Get Started",
        Img: "https://media-cdn.bnn.in.th/150788/MacBook_Pro_14-in_Silver_PDP_Image_Position-1__TH-square_medium.jpg"
    },
    {
        id: "3",
        Text: "'ljjsshjf'",
        Btn: "Get Started",
        Img: "https://media-cdn.bnn.in.th/150788/MacBook_Pro_14-in_Silver_PDP_Image_Position-1__TH-square_medium.jpg"
    }
]

const ImageSlider = ({data}) => {
    return ( 
        <>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          { data.map( user => (
            <SwiperSlide key={user.id}>
                {user.Text}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
     );
}
 
export default ImageSlider;