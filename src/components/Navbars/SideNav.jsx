import GlassSurface from "../GlassSurface";
import { Home, User, FolderGit2, Mail } from "lucide-react";

const SideNav = () => {
  return (
    <div className="fixed left-10 h-screen p-4 flex flex-col items-center justify-center z-10">
      <GlassSurface
        width={80}
        height={400}
        borderRadius={24}
        displace={3}
      
      >
        <ul className="space-y-10 flex flex-col p-4 justify-center items-center h-full">
          
          <li>
            <a
              href="#home"
              className="hover:scale-125 transition-transform"
            >
              <Home size={26} />
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:scale-125 transition-transform"
            >
              <User size={26} />
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:scale-125 transition-transform"
            >
              <FolderGit2 size={26} />
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:scale-125 transition-transform"
            >
              <Mail size={26} />
            </a>
          </li>

        </ul>
      </GlassSurface>
    </div>
  );
};

export default SideNav;
