import CustomButton from '../CustomButton';
import './BannerTitle.css'

const BannerTitle = () => {
    return (
        <div className="banner-title">
            <h1>
                Olá, sou a Tay Martins
            </h1>
            <div className='sub-infos'>
                <span>
                    I'm a product Designer
                </span>
                <CustomButton>Contact Me</CustomButton>
            </div>


        </div>


    )
}

export default BannerTitle;