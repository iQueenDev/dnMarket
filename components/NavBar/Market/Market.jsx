import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Market.module.css";

const Market = () => {
  //--------MARKET NAVIGATION MENU
  const market = [
    {
      name: "Market",
      link: "marketplace",
    },
    {
      name: "Create",
      link: "uploadNFT",
    },  
    {
      name: "BuyCoins",
      link: "buyCoins",
    },      
    {
      name: "Creators",
      link: "TopCreators",
    },    
    {
      name: "Transfer",
      link: "transferFunds",
    },          
    ];
  return (
    <div>
      {/* <div className={Style.box}></div>*/}
      {market.map((el, i) => (
        <div key={i + 1} className={Style.market}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Market;
