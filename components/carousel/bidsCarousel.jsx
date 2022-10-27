import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "tippy.js/dist/tippy.css";
import { bidsData } from "../../data/bids_data";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { bidsModalShow } from "../../redux/counterSlice";
import { useDispatch } from "react-redux";
import Likes from "../likes";
import {ethers} from 'ethers'
const BidsCarousel = ({ nft }) => {
  const dispatch = useDispatch();

  const handleclick = () => {
    console.log("clicked on ");
  };
  console.log(nft?.length);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          565: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".bids-swiper-button-next",
          prevEl: ".bids-swiper-button-prev",
        }}
        className=" card-slider-4-columns !py-5"
      >
        {nft?.map((item) => {
          const { tokenId, image, name, description, owner, price, seller } =
            item;
          return (
            <SwiperSlide className="text-white" key={tokenId?.toString()}>
              <article>
                <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg text-jacarta-500">
                  <figure>
                    {/* {`item/${itemLink}`} */}
                    <Link href={"/item/" + tokenId?.toString()}>
                      <a>
                        <div className="w-full">
                          <img
                            src={image?.toString()}
                            alt={name}
                            height={230}
                            width={230}
                            layout="responsive"
                            objectFit="cover"
                            className="rounded-[0.625rem] w-full"
                            loading="lazy"
                          />
                        </div>
                      </a>
                    </Link>
                  </figure>
                  <div className="mt-4 flex items-center justify-between">
                    <Link href={"/item/" + tokenId?.toString()}>
                      <a>
                        <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                          {name}
                        </span>
                      </a>
                    </Link>
                    <span className="dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2">
                      <Tippy content={<span>ETH</span>}>
                        <img
                          src="/images/eth-icon.svg"
                          alt=""
                          className="w-3 h-3 mr-1"
                        />
                      </Tippy>

                      <span className="text-green text-sm font-medium tracking-tight">
                        {parseFloat(
                    Number(
                      ethers.utils.formatEther(
                        price?.toString() || 0
                      )
                    ) || 0
                  ).toFixed(3) || 0}{" "} ETH
                      </span>
                    </span>
                  </div>
                 

                  <div className="mt-8 flex items-center justify-between">
                    <button
                      type="button"
                      className="text-accent font-display text-sm font-semibold"
                      onClick={() => dispatch(bidsModalShow())}
                    >
                      Place bid
                    </button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <!-- Slider Navigation --> */}
      <div className="group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden">
        <MdKeyboardArrowLeft />
      </div>
      <div className="group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden">
        <MdKeyboardArrowRight />
      </div>
    </>
  );
};

export default BidsCarousel;
