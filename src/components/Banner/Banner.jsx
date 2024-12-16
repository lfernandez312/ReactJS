// import bannerImage from "../../../public/img/Banner.jpg"; NO ES RECOMENDABLE IMPORTAR DESDE PUBLIC

const Banner = () => {
  return (
    <div>
      <img
        className="w-full h-auto max-h-84 object-cover"
        src="/img/banner.jpg"
        alt="Banner"
      />
    </div>
  );
};

export default Banner;
