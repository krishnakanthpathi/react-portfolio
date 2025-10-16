import GlassSurface from './GlassSurface'
import Iridescence from './Iridescence';

const Hero = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    
    <div className="flex items-center glass-gradient justify-center h-screen">
      <GlassSurface 
          width={1000} 
          height={600}
          borderRadius={24}
          displace={3}
          blueOffset={25}
          brightness={60}
          mixBlendMode="screen"
      >
        kk
      </GlassSurface>
    </div>
  );
};

export default Hero;
