import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../components/footer.css';

function Footer() {
  return (
      <div className='footer'>
        <div className='socialMediaIcons'>
          <a href='https://www.instagram.com/'>
            <InstagramIcon />
          </a>
          <a href='https://www.facebook.com/'>
            <FacebookIcon />
          </a>
          <a href='https://twitter.com/'>
            <TwitterIcon />
          </a>
          </div>
          <p> &copy; 2023 Handbag Heaven <br></br>Broj telefona: +381 657890345 </p>
    </div>
  )
}

export default Footer