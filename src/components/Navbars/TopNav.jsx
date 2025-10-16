import GlassSurface from "../GlassSurface";
import { Search, Moon, Sun } from "lucide-react";

const TopNav = () => {
  return (
    <div className="fixed top-0 left-0 w-full p-4 flex justify-center z-20">
      <GlassSurface
        width={1100}
        height={70}
        borderRadius={24}
        displace={5}
        distortionScale={-120}
        opacity={0.9}
      >
        <div className="flex items-center justify-between px-6 h-full w-full">

          {/* ✅ Left: Profile / Greeting */}
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-medium text-white">Me, Krishna!</h2>
          </div>

          {/* ✅ Center: Nav Links */}
          <ul className="flex space-x-10 text-sm font-medium text-white/90">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>

          {/* ✅ Right: Search + Theme Toggle */}
          <div className="flex items-center space-x-6">

            {/* ✅ Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-56 rounded-xl bg-white/20 text-white placeholder-white/60 backdrop-blur-md outline-none"
              />
              <Search
                size={18}
                className="absolute right-3 top-2.5 text-white/70"
              />
            </div>

            {/* ✅ Theme Toggle */}
            <div className="flex items-center space-x-3">
              <Sun size={18} className="text-white" />
              <button className="w-10 h-5 rounded-full bg-white/30 relative flex items-center">
                <div className="w-4 h-4 bg-white rounded-full absolute left-1"></div>
              </button>
              <Moon size={18} className="text-white" />
            </div>

          </div>
        </div>
      </GlassSurface>
    </div>
  );
};

export default TopNav;
