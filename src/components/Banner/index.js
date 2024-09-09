import BannerImage from "../BannerImage";
import BannerTitle from "../BannerTitle"
import './Banner.css'

const Banner = () => {
    return (
        <section>
            <div className='banner-container'>
                <BannerTitle/>
                <BannerImage/>
            </div> 
        </section>       
    )
}

export default Banner;