/**
 * LoopingVideo Component
 *
 * Responsive video component that displays either a looping video or a fallback image
 * based on the device screen size. On mobile devices (640px and below), shows a static
 * image for better performance. On larger screens, displays an auto-playing looping video.
 *
 * @component
 * @returns {JSX.Element} Either a video element or image element based on screen size
 */
import video from "../../Home/Assets/NSBEEE.mp4"; // Adjust the path to your video file
import image from "../../Home/Assets/EventPhotos/EventImages/nsbe_jumbo.png"; // Add the path to your fallback image
import { useMediaQuery } from "react-responsive";

const LoopingVideo = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 }); // Define the breakpoint for mobile

  return (
    <div>
      {isMobile ? (
        <img
          src={image}
          alt="NSBE Event Highlight"
          className="h-[75vh] w-[80vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] object-cover rounded-xl card-image"
          width={800}
          height={600}
          loading="eager"
          decoding="sync"
        />
      ) : (
        <video
          preload="auto"
          autoPlay
          muted
          loop
          className="h-[75vh] w-[80vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] object-cover rounded-xl darkbg"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LoopingVideo;
