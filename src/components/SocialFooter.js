import React from 'react';
import './SocialFooter.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function SocialFooter() {
    return (
        <div className='mainSocial_Cont'>
            <div className="social_images">
                <img width='120px' height='30px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="" />
                <img width='120px' height='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6YKWC0blFn47bFayX61mo3dk9xxrB2dncmdroqAp5-ESdnvx4OA5nSOCtVi8x4mcTg&usqp=CAU" alt="" />
            </div>
            <div className="social_Icons_heading">
                <h6>Connect With Us</h6>
                <div className="icons_social">

            <FacebookIcon className='icons' />
            <TwitterIcon className='icons'  />
            <InstagramIcon className='icons'  />
            <LinkedInIcon className='icons'  />
                </div>
            </div>
            
        </div>
    )
}

export default SocialFooter;
