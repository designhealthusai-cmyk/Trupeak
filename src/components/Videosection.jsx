// import video1 from "../assets/vd0.mp4";
const Videosection = () => {
  return (
    <div className="relative w-full h-[38rem] text-white bg-primary px-28 py-16">
      {/* Rounded Video Wrapper */}
      <div className="w-full h-full overflow-hidden rounded-3xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* <source src={video1} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videosection;
