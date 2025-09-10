import MainPage from "@/app/mainPage/page"

export const metadata = {
  title: 'Aditi S Naik | Full Stack Developer',
  description: 'Portfolio of Aditi S Naik, Full Stack Developer',
  icons: '/tech_girl.jpg',
};

export default function Home() {
  return (
   <>

        {/* Add your fonts or meta here */}
   

       
    <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
   <MainPage/>
    </>
  
  );
}
