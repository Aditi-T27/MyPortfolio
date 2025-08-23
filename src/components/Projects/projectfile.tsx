
'use client';
import TiltedCard from '@/blocks/TiltedCard/card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../public/image.png"
// import ScrollFloat from '@/blocks/TextAnimations/ShinyText/splitText';
import AuraWorld from "../.././../public/AuraWorld.png"
import CarbonCalc from "../.././../public/CarbonCalc.png"
import EminentWorld from "../.././../public/EminentWorld.png"
import GenAI from "../.././../public/GenAI.png"
import md1 from "../.././../public/md1.png"
import Workforce from "../.././../public/Workforce.png"
import advNLP from "../.././../public/advNLP.png"
import InterviewEval from "../../../public/InterviewEval.png"

export const cardItems = [
  {
    image: "",
    title: "ChatStream",
    content: (
      <TiltedCard
        imageSrc={image.src}
        altText="ChatStream"
        captionText="ChatStream-PulseChat"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="tilted-card-demo-text text-[20px] p-1">
            {/* <TrueFocus
              sentence="True Focus"
              manualMode={false}
              blurAmount={5}
              borderColor="orange"
              animationDuration={2}
              pauseBetweenAnimations={1}
            /> */}
          </div>
        }
      />
    ),
    techStack: ["React", "Tailwind CSS", "Node.js", "Supabase", "Web Sockets"],
    about: `A real-time chatting application built for seamless and instant
    communication. Supports one-on-one messaging, real-time updates, and 
    a clean UI/UX.Users Connect via QrCode encrypted with public user key, which on scanning allows sending request
    to other users who can accept or reject on basis of validating commumnication after which live chat is enabled`,
    description: `A real-time chat app enabling secure one-on-one messaging via QR pairing and encrypted public keys.
`,
    links: {
      tech: "",
      video: "https://drive.google.com/file/d/11NnNgBRfXNjFpW-TUvzYF-UhUT3Iy6Xj/view?usp=drive_link",
      github: "https://github.com/Aditi-T27/Chat-Stream",
      live:""
    },
    vid:true,
    live:false,
    space:false,
    tech:true
  },
  // Duplicate or add more items to see carousel effect
  {
    // image: {CarbonCalc.src},
    title: "InterView Analyser",
    content: (
      <TiltedCard
        imageSrc={InterviewEval.src}
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="CarBon Count"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="tilted-card-demo-text text-[20px] p-1 opacity-0 group-hover:opacity-10">
            {/* <TrueFocus
                sentence="True Focus"
                manualMode={false}
                blurAmount={5}
                borderColor="orange"
                animationDuration={2}
                pauseBetweenAnimations={1}
              /> */}




          </div>
        }
      />
    ),techStack: ["React", "Mediapipe", "LLM Pipeline", "Flask", "OpenCV",'Whisper'],
    about: `The Interview Confidence Analyzer is a framework designed to simulate mock interview sessions and evaluate a candidate's confidence level using:
🎥 Visual cues (via webcam) and 🎤 Verbal cues (via speech transcription enhanced with agentic based dynamic question generation on selected topic and ansswer verification )
This project integrates Computer Vision (MediaPipe + OpenCV) and Natural Language Processing (Whisper) alongside an pipeline of LLM based retrival and rendering to provide real-time feedback on how confident and focused the user appears during a live quiz/interview.`,
    description: `Interview Confidence Analyzer simulates interviews, analyzing visual and verbal cues to give real-time confidence feedback.
`,

    links: {
      tech: "https://example.com/tech1",
      video: "https://youtube.com/video1",
      github: "https://github.com/Aditi-T27/InterviewAnalyser",
      live:"",
     
    },
    vid:true,
    live:false,
    space:false,
     tech:true
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    title: "Carbon Calculator",
    content: (
      <TiltedCard
        imageSrc={CarbonCalc.src}
        altText="Carbon Calculator"
        captionText="Carbon Calculator"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="tilted-card-demo-text text-[20px] pl-2 opacity-0 group-hover:opacity-100 group-hover:font-bold">
            {/* <TrueFocus
                sentence="True Focus"
                manualMode={false}
                blurAmount={5}
                borderColor="orange"
                animationDuration={2}
                pauseBetweenAnimations={1}
              /> */}



          

          </div>
        }

      />
    ),
    techStack: ["HTML", "CSS", "Node.js", "MySQL"],
    about: `Carbon Calculator is a dual-purpose web application that estimates carbon emissions for buildings and households based on real-world usage of construction materials and home utilities. Built for environmental consciousness, it enables users (especially building constructors or homeowners) to track, log, and revise their carbon footprint through an intuitive dashboard.`,
    description: `Carbon Calculator estimates emissions from buildings and homes, helping users track and revise their carbon footprint.
`,
    links: {
      tech: "https://example.com/tech1",
      video: "https://youtube.com/video1",
      github: "https://github.com/Aditi-T27/Carbon_Calculator",
      live:""
    },
    vid:false,
    live:false,
    space:true,
     tech:true
  },
  {
    image: "C:\Users\asus\MyPortfolio-Texh\my-app\public\image.png",
    title: "ASL Sign Recognizor",
    content: (
      <TiltedCard
        imageSrc={md1.src}
        altText="ASL Sign Recognizor"
        captionText="ASL Sign Recognizor"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      // overlayContent={
      //   <div className="tilted-card-demo-text text-[20px] p-1">
      //     <TrueFocus
      //       sentence="True Focus"
      //       manualMode={false}
      //       blurAmount={5}
      //       borderColor="orange"
      //       animationDuration={2}
      //       pauseBetweenAnimations={1}
      //     />
      //   </div>
      // // }
      />
    ),
    techStack: ["Python(9.1)", "OpenCV", "TensorFlow","Medipipe","Deep Learning Model"],
    about: `ASL interpretor which detects sign and converts to recepted Meaning for alphabets from A-Z, using dual models trianed with CNN and LSTM Mesh with custom datasets of 900 frames`,
    description: `ASL Interpreter converts hand signs to A–Z letters using CNN and LSTM models on custom gestures.
`,
    links: {
      tech: "https://example.com/tech1",
      video: "https://drive.google.com/file/d/10eIhLgMNCkchwsEPxicy6uAzXTumHPON/view?usp=sharing",
      github: "https://github.com/Aditi-T27/ASL_NLP",
      live:""
    },
    vid:true,
    live:false,
    space:false,
     tech:true
  },
  {
    image: "C:\Users\asus\MyPortfolio-Texh\my-app\public\image.png",
    title: "WorkForce Managemnt",
    content: (
      <TiltedCard
        imageSrc={Workforce.src}
        altText="WorkForce Managemnt"
        captionText="WorkForce Managemnt"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      // overlayContent={
      //   <div className="tilted-card-demo-text text-[20px] p-1">
      //     <TrueFocus
      //       sentence="True Focus"
      //       manualMode={false}
      //       blurAmount={5}
      //       borderColor="orange"
      //       animationDuration={2}
      //       pauseBetweenAnimations={1}
      //     />
      //   </div>
      //}
      />
    ),

techStack: ["React+Vite","LLM pipeline","RL Model","Node.Js","Flask"],
    about: `Workfoce management System Built to provide dynamic processing of employee data and schedule various Tech stack based allocation on basis of project Requirement.
    Comprises of Vairous models coupled to provide task allocation on basis of Shift-Baed, Non-Shift Based and Team-Based Approach -- Built as a part of an Hackathon Project and was selected in top 30 among 700+ teams.`,
    description: `Workforce system dynamically allocates tasks using shift, non-shift, and team models based on requirements.
`,
    links: {
      tech: "https://example.com/tech1",
      video: "https://www.youtube.com/watch?v=RHA1YU3zt1Q",
      github: "https://github.com/Aditi-T27/WorkForce_Optimizer",
      live:""
    },
    vid:true,
    live:false,
    space:false,
     tech:true
  },
  {
    image: "C:\Users\asus\MyPortfolio-Texh\my-app\public\image.png",
    title: "Advanced NLP",
    content: (
      <TiltedCard
        imageSrc={advNLP.src}
        altText="Advanced NLP"
        captionText="Advanced NLP"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="223px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
  
      />
    ),
    techStack: ["Python(10.0)","TensorFlow","Mediapipe","OpenCV","Dyncamically Captured Landmarks via webcam"],
    about: `Landmark Identification model to recognize ASL Landmarks for intepretation of words via handgestures using Mediapipe's hand and Face Landmark models`,
    description: `Landmark Identification model using Mediapipe’s hand and face landmarks to interpret ASL gestures into meaningful words.
`,
    links: {
      tech: "https://example.com/tech1",
      video: "https://drive.google.com/file/d/10eIhLgMNCkchwsEPxicy6uAzXTumHPON/view?usp=drive_link",
      github: "https://github.com/Aditi-T27/ASL-Sign_and_gesture_recognizer/tree/master",
      live:""
    },
    vid:true,
    live:false,
    space:false,
     tech:true
  }, {
    image: "C:\Users\asus\MyPortfolio-Texh\my-app\public\image.png",
    title: "AuraWorld",
    content: (
      <TiltedCard
        imageSrc={AuraWorld.src}
        altText="AuraWorld"
        captionText="AuraWorld"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      // overlayContent={
      //   <div className="tilted-card-demo-text text-[20px] p-1">
      //     <TrueFocus
      //       sentence="True Focus"
      //       manualMode={false}
      //       blurAmount={5}
      //       borderColor="orange"
      //       animationDuration={2}
      //       pauseBetweenAnimations={1}
      //     />
      //   </div>
      //}
      />
    ),
    techStack: ["Next.js","Supabase","Axios API's","Tailwind CSS",'JWT'],
    about: `NoteTaking Application demonstrating CRUD Principles, facilates taking of notes and images stored via supabase bucket for downlaoding of pdf's and custom doc formats, allows saving and future retrival and editing of stored data.`,
    description: `Note-taking app with full CRUD features, Supabase storage, PDF/custom downloads, and seamless retrieval/editing of text and image notes.
`,
    links: {
      tech: "https://example.com/tech1",
      video: "https://youtube.com/video1",
      github: "https://github.com/Aditi-T27/AuraBoard",
      live:"https://aura-board-e8zi-otrrb674n-aditi-naiks-projects.vercel.app/"
    },
    vid:false,
    live:true,
    space:false,
     tech:true
  }, {
    image: "C:\Users\asus\MyPortfolio-Texh\my-app\public\image.png",
    title: "Pdf Summarizor",
    content: (
      <TiltedCard
        imageSrc={GenAI.src}
        altText="Pdf Summarizor"
        captionText="Pdf Summarizor"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      // overlayContent={
      //   <div className="tilted-card-demo-text text-[20px] p-1">
      //     <TrueFocus
      //       sentence="True Focus"
      //       manualMode={false}
      //       blurAmount={5}
      //       borderColor="orange"
      //       animationDuration={2}
      //       pauseBetweenAnimations={1}
      //     />
      //   </div>
      //}
      />
    ),
 techStack: ["Python(10.0)","LangChain","Gemini Flash Model","GoogleGenAI","StreamLit","Vectorizor"],
    about: `Bot which studies N number of pdf insterted into the stack and translates the data into vector embedding and actively
    responds and summarizes the question realted to any of the context provided within the provided Pdf's and generates an detialed
    customized response`,
    description: `An intelligent bot embedding multiple PDFs as vectors for real-time Q&A and contextual, customized summarization.
`,
    links: {
      tech: "",
      video: "https://youtube.com/video1",
      github: "https://github.com/Aditi-T27/GenAI_PDF_BOT_QandA",
      live:""
    },
    vid:false,
    live:false,
    space:true,
     tech:true
  },
  {
    image: "C:\Users\asus\MyPortfolio-Texh\my-app\public\image.png",
    title: "EminentWorld",
    content: (
      <TiltedCard
        imageSrc={EminentWorld.src}
        altText="EminentWorld"
        captionText="EminentWorld"
        containerHeightClass="h-[100px] sm:h-[150px] md:h-[200px] lg:h-[275px]"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      // overlayContent={
      //   <div className="tilted-card-demo-text text-[20px] p-1">
      //     <TrueFocus
      //       sentence="True Focus"
      //       manualMode={false}
      //       blurAmount={5}
      //       borderColor="orange"
      //       animationDuration={2}
      //       pauseBetweenAnimations={1}
      //     />
      //   </div>
      //}
      />
    ),
    techStack: ["HTML","CSS","JavaScript","PHP"],
    about: `An Webpage for illustrating serene peaks , rivers and moutaines in the worlds and their details, uses PHP to store user info for login and signUp`,
    description: `A serene webpage showcasing global peaks, rivers, and mountains with PHP-based user login/signup system`,
    links: {
      tech: "https://example.com/tech1",
      video: "https://youtube.com/video1",
      github: "https://github.com/Aditi-T27/EminentWorld",
      live:"https://eminent-world-5dtkcrq2g-aditi-naiks-projects.vercel.app"
    },
    vid:false,
    live:true,
    space:false,
     tech:true
  },
  {
    description: "CheckOut More Projects On GitHub",
 links: {
      github: "https://github.com/Aditi-T27/EminentWorld",
         },
          tech:false,
          space:true
  }
];
