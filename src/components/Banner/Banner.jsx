import bannerImage from "../../assets/banner.jpg"
import "./Banner.css"

const Banner = () =>{
    return(
        <div>
            <img className="banner-image" src={bannerImage} />
        </div>
    )
}

export default Banner;