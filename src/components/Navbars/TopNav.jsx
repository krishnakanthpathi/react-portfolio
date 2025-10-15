const TopNav = () => {
  return (
    <div className="fixed w-screen p-4 flex flex-col items-center justify-center z-10">
      <div className="text-center glass-gradient  shadow-lg p-6 rounded-lg">
        <ul className="space-x-10 flex flex-row">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
