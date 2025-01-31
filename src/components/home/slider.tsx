/** @format */
'use client';

import Image from 'next/image';
import Slider from 'react-slick';

function PauseOnHover() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // vertical: true,
    // verticalSwiping: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="w-full bg-orange-600 p-10">
        <div
          className="flex items-center flex-col justify-between h-full px-10"
          style={{ display: 'flex', width: '100%' }}
        >
          <div className="w-1/2">
            <h1>Hello World</h1>
          </div>
          <div className="w-1/2">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jdwt2N7y2W3PQUx4KBBIGiLC-jjyaGonWA&s"
              alt="Image"
              className="h-96 w-96 object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
