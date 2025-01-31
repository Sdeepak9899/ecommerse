/** @format */

import Link from 'next/link';
import SimpleSlider from './product_slider';

const Products_image = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <div className="flex flex-col   ">
            <Link
              href=""
              className="relative  w-32 m-4  rounded- overflow-hidden  shadow-lg hover:scale-90 duration-200 rounded-md"
            >
              <img
                src="https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-74.jpg"
                alt="abc"
                className="w-full rounded-md hover:scale-90 duration-200"
              />
            </Link>
            <Link
              href=""
              className="relative  w-32 m-4  rounded- overflow-hidden  shadow-lg hover:scale-90 duration-200 rounded-md"
            >
              <img
                src="https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-75-1.jpg"
                alt="bcd"
                className="w-full rounded-md  hover:scale-90 duration-200"
              />
            </Link>
            <Link
              href=""
              className="relative  w-32 m-4  rounded- overflow-hidden  shadow-lg hover:scale-90 duration-200 rounded-md"
            >
              <img
                src="https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-76-1.jpg"
                className="w-full  rounded-md hover:scale-90 duration-200"
                alt="cde"
              />
            </Link>
            <Link
              href=""
              className="relative  w-32 m-4  rounded- overflow-hidden rounded-md  shadow-lg hover:scale-90 duration-200 "
            >
              <img
                src="https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-77-1.jpg"
                alt="edf"
                className="w-full rounded-lg   hover:scale-90 duration-200"
              />
            </Link>
          </div>
        </div>
        <div>
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
};

export default Products_image;
