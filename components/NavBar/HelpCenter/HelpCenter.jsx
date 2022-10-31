import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About Us",
      link: "aboutus",
    },    
    {
      name: "Search",
      link: "searchPage",
    },    
    {
      name: "Register",
      link: "signUp",
    },
    {
      name: "LogIn",
      link: "login",
    },    
    {
      name: "Yo Profile",
      link: "author",
    },    
    {
      name: "News",
      link: "blog",
    },
    {
      name: "Message Us",
      link: "contactus",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div className={Style.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
