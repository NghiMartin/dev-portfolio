import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center">
          I am a frontend developer passionate about building responsive and
          user-friendly web and mobile applications. My expertise lies in
          <strong> React, Next.js, React Native, and TypeScript</strong>, with
          hands-on experience using <strong>Tailwind CSS, Firebase, Supabase,</strong> 
          and <strong>REST APIs</strong> to deliver seamless solutions. 
          <br />
          <br />
          I enjoy turning ideas into functional products, optimizing
          performance, and continuously learning new technologies to create
          meaningful experiences for users.
        </p>
      </div>
    </section>
  );
};

export default About;
