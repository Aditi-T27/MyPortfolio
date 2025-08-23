import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] border-t border-[#292929] text-white py-6 px-4" style={{fontFamily:"poppins"}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Text */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Developed by{" "}
            <span className= "font-semibold">Aditi S Naik</span>. All
            rights reserved.
          </p>
        </div>

        {/* Right - Tech Icons */}
        <div className="flex items-center gap-4 text-gray-400">
          <span className="text-sm">Built with</span>
          <SiNextdotjs className="text-white text-xl hover:text-yellow-400 transition" />
          <SiTypescript className="text-blue-500 text-xl hover:text-yellow-400 transition" />
          <SiTailwindcss className="text-cyan-400 text-xl hover:text-yellow-400 transition" />
        </div>
      </div>
    </footer>
  );
}
