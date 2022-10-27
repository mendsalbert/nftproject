import React, { useState, useEffect, useContext } from "react";
import {
  Hero,
  Bids,
  Top_collection,
  Tranding_category,
  NewseLatter,
} from "../../components/component";
import { ethers } from "ethers";
import Meta from "../../components/Meta";
import { AuthContext } from "../../utils/AuthProvider";

const Home_1 = () => {
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);

  const [nfts, setnft] = useState([]);
  async function loadNFTS() {
    const nft = await signer?.fetchMarketItems();
    setnft(nft);
  }
  useEffect(() => {
    loadNFTS();
  }, [signer]);

//   console.log(nfts);
  return (
    <main>
      <Meta title="Home 1 || Xhibiter | NFT Marketplace Next.js Template" />
      <Hero />
      <Bids nft={nfts} />
      {/* <Top_collection /> */}
      <Tranding_category />
      {/* <NewseLatter /> */}
    </main>
  );
};

export default Home_1;
