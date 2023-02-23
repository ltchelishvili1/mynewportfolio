import { Autoplay, Navigation } from "swiper";

import Lshop from "../../assets/LSHOP.png";
import Ecomm from "../../assets/Ecomm.png";
import CvCreat from "../../assets/cvcreator.png";
import Chat from "../../assets/chat.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Button, CustSlider, Image, SwiperCont } from "./slider.styles";

const SliderComponent = () => {
  return (
    <SwiperCont
      spaceBetween={10}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <CustSlider>
        <Image src={Lshop} alt="lshop" />
        <a href="https://guileless-nougat-f8a4fa.netlify.app/">
          <Button>visit website</Button>
        </a>
      </CustSlider>
      <CustSlider>
        <Image src={Ecomm} alt="ecomm" />
        <a href="https://taupe-brioche-1ae683.netlify.app/">
          <Button>visit website</Button>
        </a>
      </CustSlider>
      <CustSlider>
        <Image src={CvCreat} alt="cvcreator" />
        <a href="https://inspiring-ganache-8aee97.netlify.app/">
          <Button>visit website</Button>
        </a>
      </CustSlider>
      <CustSlider>
        <Image src={Chat} alt="chat" />
        <a href="https://endearing-wisp-8077bb.netlify.app/">
          <Button>visit website</Button>
        </a>
      </CustSlider>
    </SwiperCont>
  );
};

export default SliderComponent;
