import bannerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <img
        className="w-full h-auto max-h-84 object-cover"
        src={bannerImage}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;
