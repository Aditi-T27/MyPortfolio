
// import React from "react";
// import RotatingText from "@/blocks/TextAnimations/rotating_components";
// import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
// const AboutMe = () => {
//   const handleAnimationComplete = () => {
//     console.log('All letters have animated!');
//   };

//   return (
//     <>
//       <div className="w-[90%] md:w-[70%] text-white p-2 m-2 ml-4 md:ml-8">
//         <div style={{ backgroundColor: "#212122" }} className="w-full h-auto rounded-2xl p-2 px-8">
//           <br />
//           <div className="flex">
//             <div style={{ fontFamily: "Poppins",fontSize:"10px" }} className="text-slate-200 font-bold  w-[30%]">

//               <SplitText
//                 text="About Me"
//                 className="text-slate-200 font-bold text-2xl"
//                 delay={100}
//                 duration={0.6}
//                 ease="power3.out"
//                 splitType="chars"
//                 from={{ opacity: 0, y: 40 }}
//                 to={{ opacity: 1, y: 0 }}
//                 threshold={0.1}
//                 rootMargin="-50px"
//                 textAlign="center"
//                 onLetterAnimationComplete={handleAnimationComplete}
//               />
//             </div>
//             <div style={{ fontFamily: "Poppins" }} className="text-slate-200 font-bold text-2xl ml-auto justify-end">


//               <RotatingText
//                 texts={['Building', 'Harnessing', 'Learning']}
//                 mainClassName="px-2 sm:px-2 md:px-3 bg-yellow-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
//                 staggerFrom={"last"}
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 exit={{ y: "-120%" }}
//                 staggerDuration={0.025}
//                 splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//                 transition={{ type: "spring", damping: 30, stiffness: 400 }}
//                 rotationInterval={2000}
//               />
//             </div>
//           </div>
         
//           <svg width="100" height="4" xmlns="http://www.w3.org/2000/svg">
//             <line x1="0" y1="2" x2="100" y2="2" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
//           </svg>
//           <br />
//           <div
//             style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "lighter" }}
//             className="text-white"
//           >
//             I’m an engineering student passionate about creating meaningful digital experiences.
//             With a strong foundation in programming and design, I enjoy building clean, user-friendly interfaces.
//             <br /><br />
//             I believe in writing efficient, scalable code and constantly seek opportunities to learn and grow.
//             Problem-solving and collaboration drive my work ethic.
//             Currently exploring the intersection of technology, design, and real-world impact.
//             Eager to contribute to innovative projects and grow with a dynamic team.I’m driven by curiosity, backed by logic, and powered by caffeine.
//             Looking forward to contributing meaningfully in a team that values innovation and clarity.
//           </div>

//           <br /><br />
//           <div style={{ fontFamily: "Poppins" }} className="text-slate-200 font-bold text-xl">
//             What I'm Doing?
//           </div>
//           <br />

//           {/* Card Container Row 1 */}
//         <div className="flex flex-wrap gap-4 m-2 justify-center">
//   {[1, 2].map((_, index) => (
//     <div
//       key={index}
//       style={{ fontFamily: "Poppins" }}
//       className="bg-[#1a1a1a] w-full md:w-[45%] p-6 text-white rounded-lg shadow-md flex items-start border border-[#2a2a2a]"
//     >
//       <div className="p-2 rounded-md bg-[#2a2a2a] flex items-center justify-center">
//         <svg
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="#FFD700"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M3 4v16h18V4z" />
//           <path d="M3 8h18" />
//           <path d="M7 4v4" />
//         </svg>
//       </div>
//       <div className="px-2">
//         <h3 className="text-base font-medium pt-1">Web Development</h3>
//         <p className="text-xs text-gray-400 pt-1">
//           Modern, high-quality design built professionally.
//           Modern, high-quality design built professionally.
//         </p>
//       </div>
//     </div>
//   ))}
// </div>


//           {/* Card Container Row 2 */}
//           <div className="flex flex-wrap gap-4 m-2 justify-center">
//   {[1, 2].map((_, index) => (
//     <div
//       key={index}
//       style={{ fontFamily: "Poppins" }}
//       className="bg-[#1a1a1a] w-full md:w-[45%] p-6 text-white rounded-lg shadow-md flex items-start border border-[#2a2a2a]"
//     >
//       <div className="p-2 rounded-md bg-[#2a2a2a] flex items-center justify-center">
//         <svg
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="#FFD700"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M3 4v16h18V4z" />
//           <path d="M3 8h18" />
//           <path d="M7 4v4" />
//         </svg>
//       </div>
//       <div className="px-2">
//         <h3 className="text-base font-medium pt-1">Web Development</h3>
//         <p className="text-xs text-gray-400 pt-1">
//           Modern, high-quality design built professionally.
//           Modern, high-quality design built professionally.
//         </p>
//       </div>
//     </div>
//   ))}
// </div>


//           <br />
//           <br />
//         </div>
//       </div>
    
//     </>
//   );
// };

// export default AboutMe;


import React from "react";
import RotatingText from "@/blocks/TextAnimations/rotating_components";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

const AboutMe = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const data =[
    {
      heading:"Web Development",
      content:`Blending backend and frontend tech to craft something new and exciting`,
      svg:(  <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 4v16h18V4z" />
                  <path d="M3 8h18" />
                  <path d="M7 4v4" />
                </svg>)
    },{
       heading:"AIML",
      content:`Teaching machines to spot patterns, make smart guesses, and sometimes surprise me with what they’ve learned.`,
      svg:(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="none"
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Brain-like shape */}
    <path d="M8 3a4 4 0 0 0-4 4v2a4 4 0 0 0 0 8v2a4 4 0 0 0 4 4" />
    <path d="M16 3a4 4 0 0 1 4 4v2a4 4 0 0 1 0 8v2a4 4 0 0 1-4 4" />
    {/* Circuit nodes */}
    <circle cx="12" cy="6" r="1.2" fill="#FFD700" />
    <circle cx="9" cy="12" r="1.2" fill="#FFD700" />
    <circle cx="15" cy="12" r="1.2" fill="#FFD700" />
    <circle cx="12" cy="18" r="1.2" fill="#FFD700" />
    {/* Circuit connections */}
    <path d="M12 6v4M12 14v4M9 12h6" />
  </svg>
)
    }
    ,{
       heading:"Agentic AI & LLMs",
      content:`Building AI agents that feel alive, able to think, adapt, and carry out tasks like curious, tireless teammates`,
      svg:(
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Chat bubble */}
    <path d="M4 5h16v10H8l-4 4V5z" />
    {/* Center dot */}
    <circle cx="12" cy="10" r="2" fill="#FFD700" stroke="#FFD700" />
  </svg>

)
    },
    ,{
       heading:"Digital Outreach",
      content:`Creating ideas that connect with people, spark interest, and drive action`,
      svg:( <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="48"
    height="48"
    aria-hidden="true"
    role="img"
    fill="none"
    stroke="#FFD700"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* outer ring */}
    <circle cx="32" cy="32" r="30" stroke="#FFD700" />

    {/* center paper plane (pitch/send) */}
    <g transform="translate(0,0)">
      <path
        d="M16 32 L48 20 L34 34 L28 42 L24 36 Z"
        fill="#FFD700"
        stroke="#FFD700"
      />
      <path d="M16 32 L24 36" stroke="#FFFFFF" strokeWidth="1" opacity="0.18" />
    </g>

    {/* top - video (triangle) */}
    <g transform="translate(32,10)">
      <circle cx="0" cy="0" r="5" fill="#FFD700" stroke="#FFD700" />
      <polygon points=" -1.2,-1.6 2.8,0  -1.2,1.6 " fill="#fff" />
    </g>

    {/* right - camera (square with circle) */}
    <g transform="translate(50,32)">
      <rect x="-5" y="-5" width="10" height="8" rx="1.5" fill="#FFD700" stroke="#FFD700" />
      <circle cx="0" cy="-1" r="2.2" fill="#fff" />
      <rect x="3" y="-6" width="2" height="2" rx="0.5" fill="#FFD700" />
    </g>

    {/* bottom - chat bubble */}
    <g transform="translate(32,54)">
      <path d="M-6,-4 h12 a4,4 0 0 1 4,4 v4 a1,1 0 0 1 -1,1 h-5 l-4,4 v-4 h-6 a4,4 0 0 1 -4,-4 v-4 a4,4 0 0 1 4,-4 z" fill="#FFD700" stroke="#FFD700" transform="translate(0,-4) scale(0.6)"/>
      <circle cx="0" cy="0" r="0.9" fill="#fff" />
      <circle cx="-2.5" cy="0" r="0.9" fill="#fff" />
    </g>

    {/* left - hashtag (trending) */}
    <g transform="translate(14,32)" stroke="#FFD700" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <line x1="-3" y1="-6" x2="6" y2="-6" />
      <line x1="-3" y1="-1" x2="6" y2="-1" />
      <line x1="-1.5" y1="-8" x2="-1.5" y2="2" />
      <line x1="3.5" y1="-8" x2="3.5" y2="2" />
    </g>
  </svg>)
    },
  ]

  return (
    <div style={{fontFamily:"Poppins"}} className="w-full flex justify-center px-1 py-3">
      <div className="w-full max-w-screen-xl bg-[#212122] rounded-2xl p-4 sm:p-6 md:p-8 text-white">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="w-full sm:w-auto text-left">
            <SplitText
              text="About Me"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <svg width="100" height="4" xmlns="http://www.w3.org/2000/svg" className="mt-2">
              <line x1="0" y1="2" x2="100" y2="2" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <div className="mt-4 sm:mt-0 font-extrabold text-2xl">
            <RotatingText
              texts={["Building", "Harnessing", "Learning"]}
              mainClassName="px-2 sm:px-3 bg-yellow-300 text-black overflow-hidden py-1 sm:py-1.5 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        {/* Paragraph */}
        <p className="mt-6 text-xs sm:text-base leading-relaxed font-light" style={{ fontFamily: "Poppins" }}>
          I’m an engineering student passionate about creating meaningful digital experiences.
           My development space revolves around the web and server connections, focusing on a cleaner  and a more systematic approach.
          <br /><br />
          I believe in writing efficient, scalable code and constantly seek opportunities to learn and grow.
          Problem-solving and collaboration drive my work ethic.
          Currently exploring the intersection of technology, design, and real-world impact.
          Passionate about bringing fresh ideas to life and making a positive impact on sustainability. Guided by curiosity and grounded in logic, I thrive on exploring creative solutions that blend innovation with purpose
        </p>

        {/* What I'm Doing Section */}
      <h2
  className="mt-10 text-xl sm:text-2xl font-bold"
  style={{ fontFamily: "Poppins" }}
>
  What I&apos;m Doing?
</h2>


        <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 flex items-start gap-4"
              style={{ fontFamily: "Poppins" }}
            >
              <div className="p-3 rounded-md bg-[#2a2a2a] flex items-center justify-center">
                {item?.svg}
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">{item?.heading}</h3>
                <p className="text-xs text-gray-400">
                 {item?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default AboutMe;
