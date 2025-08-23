import React from "react";
import image from "../../public/tech_girl.jpg";
import image1 from "../../public/Aditi_Naik.jpg"
import image2 from "../../public/AN.jpg"

import DecryptedText from "@/blocks/TextAnimations/decrypt_text";
const Profile = () => {
  return (
    
   <div className="w-full md:w-[30%] bg-[#212122] rounded-2xl p-2 m-3 px-2 flex flex-col items-center mx-auto mr-2 ml-2">

      {/* Image */}
      <div className="border-2 rounded-3xl w-full max-w-[220px] mt-4 h-[220px] flex items-center justify-center">
        <img className="rounded-3xl object-cover w-full h-full" src={image1.src} alt="Profile" />
      </div>

      {/* Name */}
      <div
        style={{ fontFamily: "Poppins", color: "#F2F0EF" }}
        className="text-xl md:text-xl font-bold text-center mt-3"
      >
        Aditi S Naik
      </div>

      {/* Role */}
      <div
        style={{ fontFamily: "Poppins", color: "#F2F0EF", backgroundColor: "#373737" }}
        className="rounded-md text-center px-2 py-1 text-[10px] mt-2"
      >

        {/* Example 3: Animate on view (runs once) */}
     
          <DecryptedText
            text="Developer"
            animateOn="view"
            revealDirection="center"
          />
      
   
      </div>

      <hr className="w-full max-w-[350px] my-4 border-gray-500" />

      {/* Info Sections */}
      <div className="flex flex-col space-y-2 w-[85%] text-white ">
        {/* Email */}
        <InfoItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#facc15"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          }
          heading="Email"
          content="aditinaik277@gmail.com"
        />

        {/* Degree */}
        <InfoItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.14 12.94a7.07 7.07 0 0 0 0-1.88l2.03-1.58a.5.5 0 0 0 .12-.66l-1.91-3.3a.5.5 0 0 0-.61-.22l-2.39.96a7.14 7.14 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.82a.5.5 0 0 0-.5.42l-.36 2.54a7.14 7.14 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.61.22l-1.91 3.3a.5.5 0 0 0 .12.66l2.03 1.58a7.07 7.07 0 0 0 0 1.88L2.49 14.5a.5.5 0 0 0-.12.66l1.91 3.3a.5.5 0 0 0 .61.22l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.82a.5.5 0 0 0 .5-.42l.36-2.54c.59-.24 1.13-.56 1.63-.94l2.39.96a.5.5 0 0 0 .61-.22l1.91-3.3a.5.5 0 0 0-.12-.66l-2.03-1.58zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
            </svg>
          }
          heading="Degree"
          content="B.E - Computer Science"
        />

        {/* LinkedIn */}
        <InfoItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#facc15" className="h-5 w-5">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
    2.76 2.24 5 5 5h14c2.76 0 
    5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
    19h-3v-10h3v10zm-1.5-11.27c-.97 
    0-1.75-.79-1.75-1.76s.78-1.75 
    1.75-1.75 1.75.78 
    1.75 1.75-.78 1.76-1.75 
    1.76zm13.5 11.27h-3v-5.5c0-1.1-.9-2-2-2s-2 
    .9-2 2v5.5h-3v-10h3v1.41c.84-1.17 
    2.71-1.58 4-1.07s2 1.94 
    2 3.32v6.34z" />
            </svg>
          }
          heading="LinkedIn"
          content={<a href="https://www.linkedin.com/in/aditinaik27/">My Account</a>}
        />

        {/* GitHub */}
        <InfoItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582
        0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
        1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93
        0-1.31.47-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3
        .404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22
        0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.877-.015 3.27 0 .322.216.7.825.58C20.565 21.795 24 17.295 24 12
        24 5.37 18.63 0 12 0z" />
            </svg>
          }
          heading="Github"
          content={<a href="https://github.com/Aditi-T27">Aditi-T27</a>}
        />

        {/* Interests */}
        <InfoItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="18" height="18">
              <path d="M4 5h16v11H4V5zm0-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5v2H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-3v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4z" />
            </svg>
          }
          heading="Interests"
          content="Web Dev, AIML, Cryptography, Blockchains"
        />
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  heading: string;
  content: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, heading, content }) => (
  <div style={{ fontFamily: "Poppins" }} className="flex items-start w-full">
    <div className="w-[20%] p-2 flex justify-center items-center m-auto">{icon}</div>
    <div className="w-[80%] p-2">
      <div className="text-slate-300 text-[10px]">{heading}</div>
      <div className="text-white text-[10px]">{content}</div>
    </div>
  </div>
);

export default Profile;






// import React, { useRef, useEffect, useState } from "react";
// import image from '../../public/tech_girl.jpg'
// const Profile = () => {
//   return (
//     <>
//       <div style={{ backgroundColor: "#212122" }} className="w-[25%] rounded-2xl p-4 ml-4 ">
//         <div className="border-2 rounded-3xl w-[350px] h-[350px] flex items-center m-auto">
//           <img className="rounded-3xl" src={image.src} alt="" />
//         </div><br />
//         <div style={{ fontFamily: "Poppins", color: "#F2F0EF" }} className="flex text-4xl font-bold items-center justify-center m-auto w-full">
//           Aditi S Naik
//         </div><br />
//         <div style={{ fontFamily: "Poppins", color: "#F2F0EF", backgroundColor: "#373737" }} className=" flex rounded-md  items-center justify-center m-auto w-[30%] p-2 ">
//           Developer
//         </div><br />
//         <hr style={{ color: "white", width: "350px" }} className="flex justify-center m-auto" />

//         <br />
//         {/* Side Main Box */}
//         <div className="flex flex-col space-y-4 text-white m-auto justify-center w-[71%]">

//           {/* //email box */}
//           <div id="email" style={{ fontFamily: "Poppins" }} className="flex  h-auto w-[90%] ">
//             <div id="email-svg" className="p-2 flex items-center w-[20%] r">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="#facc15"  // Tailwind yellow-400
//                 viewBox="0 0 24 24"
//                 width="32"
//                 height="32"
//                 className="inline-block"
//               >
//                 <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
//               </svg>

//             </div>
//             <div id="email-details" className="p-2 ">
//               <div className="flex text-slate-300 " id="heading">
//                 Email
//               </div>
//               <div className="flex justify-center" id="contetn">
//                 aditinaik277@gmail.com
//               </div>
//             </div>
//           </div>

//           <div id="degree" style={{ fontFamily: "Poppins" }} className="flex  h-auto w-[90%] ">
//             <div id="degree-svg" className="p-2 flex items-center w-[20%] ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-yellow-400"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M19.14 12.94a7.07 7.07 0 0 0 0-1.88l2.03-1.58a.5.5 0 0 0 .12-.66l-1.91-3.3a.5.5 0 0 0-.61-.22l-2.39.96a7.14 7.14 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.82a.5.5 0 0 0-.5.42l-.36 2.54a7.14 7.14 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.61.22l-1.91 3.3a.5.5 0 0 0 .12.66l2.03 1.58a7.07 7.07 0 0 0 0 1.88L2.49 14.5a.5.5 0 0 0-.12.66l1.91 3.3a.5.5 0 0 0 .61.22l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.82a.5.5 0 0 0 .5-.42l.36-2.54c.59-.24 1.13-.56 1.63-.94l2.39.96a.5.5 0 0 0 .61-.22l1.91-3.3a.5.5 0 0 0-.12-.66l-2.03-1.58zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
//               </svg>


//             </div>
//             <div id="degree-details" className="p-2 ">
//               <div className="flex text-slate-300 " id="heading">
//                 Degree
//               </div>
//               <div className="flex justify-center" id="contetn">
//                 B.E    -  Computer Science
//               </div>
//             </div>
//           </div>

//           <div id="linkedIn" style={{ fontFamily: "Poppins" }} className="flex h-auto w-[90%] ">
//             <div id="linkedIn-svg" className="p-2 flex items-center w-[20%] ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="#facc15"  // Tailwind's yellow-400
//                 className="h-6 w-6"
//               >
//                 <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0
//     2.76 2.24 5 5 5h14c2.76 0
//     5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11
//     19h-3v-10h3v10zm-1.5-11.27c-.97
//     0-1.75-.79-1.75-1.76s.78-1.75
//     1.75-1.75 1.75.78
//     1.75 1.75-.78 1.76-1.75
//     1.76zm13.5 11.27h-3v-5.5c0-1.1-.9-2-2-2s-2
//     .9-2 2v5.5h-3v-10h3v1.41c.84-1.17
//     2.71-1.58 4-1.07s2 1.94
//     2 3.32v6.34z" />
//               </svg>



//             </div>
//             <div id="linkedIn-details" className="p-2 ">
//               <div className="flex text-slate-300 " id="heading">
//                 LinkedIn
//               </div>
//               <div className="flex " id="content">
//                 <a href="">My Account</a>
//               </div>
//             </div>
//           </div>
//           {/* Github */}
//           <div id="github" style={{ fontFamily: "Poppins" }} className="flex h-auto w-[90%] ">
//             <div id="github-svg" className="p-2 flex items-center w-[20%] ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="#FFD700"  // Yellow color
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6"
//               >
//                 <path
//                   d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582
//         0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
//         1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93
//         0-1.31.47-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3
//         .404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22
//         0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.877-.015 3.27 0 .322.216.7.825.58C20.565 21.795 24 17.295 24 12
//         24 5.37 18.63 0 12 0z"
//                 />
//               </svg>

//             </div>
//             <div id="github-details" className="p-2 ">
//               <div className="flex text-slate-300 " id="heading">
//                 Github
//               </div>
//               <div className="flex " id="content">
//                 <a href="">Aditi-T27</a>
//               </div>
//             </div>
//           </div>

//           <div id="intrests" style={{ fontFamily: "Poppins" }} className="flex h-auto w-[90%] ">
//             <div id="intrest-svg" className="p-2 flex items-center w-[20%] ">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="24" height="24">
//     <path d="M4 5h16v11H4V5zm0-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5v2H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-3v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4z"/>
//   </svg>

//             </div>
//             <div id="intrest-details" className="p-2 ">
//               <div className="flex text-slate-300 " id="heading">
//                 Intrests
//               </div>
//               <div className="flex " id="content">
//                 <a href="">Web Dev, AIML, Cryptography, Blockchains </a>
//               </div>
//             </div>
//           </div>

//         </div>




//       </div>


//     </>
//   );
// }
// export default Profile;

