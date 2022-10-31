import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Marketplace",
      link: "marketplace",
    },    
    {
      name: "Creators",
      link: "TopCreators",
    },
    {
      name: "Collections",
      link: "collection",
    },    
    {
      name: "NFT Details",
      link: "NFT-details",
    },    
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },    
    {
      name: "Account Setting",
      link: "account",
    },    
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    ];
  return (
    <div>
      {/* <div className={Style.box}></div>*/}
      {discover.map((el, i) => (
        <div className={Style.discover} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
