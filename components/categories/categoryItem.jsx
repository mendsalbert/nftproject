import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Likes from "../likes";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import { useDispatch, useSelector } from "react-redux";
import { buyModalShow } from "../../redux/counterSlice";
import { ethers } from "ethers";
const CategoryItem = ({ nft }) => {
  const { sortedtrendingCategoryItemData } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
      {nft?.map((item) => {
        const { tokenId, image, name, description, owner, price, seller } =
          item;

        return (
          <article key={tokenId?.toString()}>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <Link href={`/item/${tokenId?.toString()}`}>
                  <a>
                    <img
                      src={image?.toString()}
                      alt="item 5"
                      className="w-full h-[230px] rounded-[0.625rem] object-cover"
                    />
                  </a>
                </Link>

                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    {/* <Link href={`/item/${itemLink}`}>
                      <a>
                        <Tippy content={<span>creator: {creator.name}</span>}>
                          <img
                            src={creator.image}
                            alt="creator"
                            className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white"
                          />
                        </Tippy>
                      </a>
                    </Link> */}
                    {/* <Link href={`/item/${tokenId?.toString()}`}>
                      <a>
                        <Tippy content={<span>creator: {owner.name}</span>}>
                          <img
                            src={owner.image}
                            alt="owner"
                            layout="fill"
                            className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white"
                          />
                        </Tippy>
                      </a>
                    </Link> */}
                  </div>
                </div>
              </figure>
              <div className="mt-7 flex items-center justify-between">
                <Link href={`/item/${tokenId?.toString()}`}>
                  <a>
                    <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                      {name}
                    </span>
                  </a>
                </Link>

                {/* auction dropdown  */}
              </div>
              <div className="mt-2 text-sm">
                <span className="dark:text-jacarta-200 text-jacarta-700 mr-1">
                  {parseFloat(
                    Number(ethers.utils.formatEther(price?.toString() || 0)) ||
                      0
                  ).toFixed(3) || 0}{" "}
                  ETH
                </span>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="text-accent font-display text-sm font-semibold"
                  onClick={() => dispatch(buyModalShow())}
                >
                  Buy now
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CategoryItem;

