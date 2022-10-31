import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/blog.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const blog = () => {
  const founderArray = [
    {
      name: "Niamh Brena",
      position: "Co-founder & CEO",
      images: images.founder1,
    },
    {
      name: "Jason Lizana",
      position: "Co-founder & Accountant",
      images: images.founder2,
    },
    {
      name: "Orla Dwyer",
      position: "Co-founder, Chairman",
      images: images.founder3,
    },
    {
      name: "Dara Frazier",
      position: "Chief Strategy Officer",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "25 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "250,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "250+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.blog}>
      <div className={Style.blog_box}>
        <div className={Style.blog_box_hero}>
          <div className={Style.blog_box_hero_left}>
            <h1>👋 Welcome.</h1>
            <p>
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.blog_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.blog_box_title}>
          <h2>⛱ Makin It</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.blog_box_founder}>
          <div className={Style.blog_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.blog_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.blog_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.blog_box_title}>
          <h2>🚀 Quick Points</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.blog_box_facts}>
          <div className={Style.blog_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.blog_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default blog;
