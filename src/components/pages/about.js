import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      &emsp; I am Noah Daniels. I was born and raised in Jewell, Kansas and lived there for the first 18 years of my life. After a year at Barton County Community College and an Associate's Degree in Computer Science, I spent a semester in Tokyo, Japan. While in Tokyo, I really learned to come out of my comfort zone and experienced a completely different culture than I was used to. Coming back, the United States was anything but easy for me. While in Japan I worked as an intern at a full-stack software engineering bootcamp where I first learned about being a software engineer. Having a taste of tech industry, I tried my best to re-immerse myself into the tech world. After a few years of difficulty, I found an opportunity that helped me re-imagine my goals and helped me achieve them. 
        <br/><br/>
      &emsp; Hard-work, perseverce, and patience is what has gotten me as far as I am now in life. Being able to recognize and take an opportunity when shown has also been a vital skill. If there was one word to describe me then it is: Genuine. I haven't made it this far on my own and I've had help from lots of different people. I may have a curious mind but that doesn't mean I know everything. I may make mistakes but that doesn't mean I need to make excuses. One thing I strive for is trying to be the best me I can be, and that includes making myself better every single day.
      </div>
    </div>
  );
}
