import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
        <a href="/">
          <Image src={images.logo} alt="footer logo" height={100} width={100} /> 
          { /*<a href="/"> */}
            {/*<DiJqueryLogo className={Style.footer_box_social_logo} />*/}
            <h3>dotNart MarketPlace</h3>
          </a>
          <p>
          The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items. -  And also dotNart MetaVerse MarketPlace is one of the
              world finest & largest NFT Asset marketplaces on the planet.
          </p>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Directory</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Discover</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>GameOn Please Subscribe</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter A good email address here *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
            We have an excellent Gaming Newsletter - which we think you would really like. To help you 
              Discover, Sell, Trade and collect some extraordinary NFT Assets at dotNart MetaVerse MarketPlace - Which is the
              one of the world's first & largest gaming marketplaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
