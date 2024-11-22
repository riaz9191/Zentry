import { useRef } from "react";
import { useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(1);
  const [loading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVIdeos] = useState(0);

  const totalVIdeos = 3;
  const nextVideoRef = useRef(null);
  const handelVideoLoad = () => {
    setLoadedVIdeos((prev) => prev + 1);
  };
  const upComingVideos = (currentIndex % totalVIdeos) + 1;

  const handelMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upComingVideos);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg to-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handelMiniVdClick}
            className="origin-center scale-50 opacity-0 transition-al duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(upComingVideos)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handelVideoLoad}
            />
          </div>
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSrc(upComingVideos)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size64  object-cover object-center"
          onLoadedData={handelVideoLoad}
        />
        <video
          src={getVideoSrc(currentIndex === totalVIdeos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover origin-center"
        />
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        G<b>a</b>ming
      </h1>
      <div className="absolute top-0 left-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">
            Redefi<b>n</b>e
          </h1>
          <p className="mb-5 max-w-64 font-robert-regular to-blue-100">
            Enter the MetGame Layer <br /> Unleash the Play Economy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
