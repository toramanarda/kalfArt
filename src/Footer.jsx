import { color } from "framer-motion";
import { Link } from "react-router-dom"

export default function Footer() {

  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="footerContainer">
      <div className="footerHeader">
        <a href="https://www.instagram.com/kalfart_workshop/"><h1>KalfArt</h1></a>
      </div>
      <div className="footerInviteAndPolicy">
        <div className="getAnInvite">
          <Link to='https://www.instagram.com/kalfart_workshop/' target="blank"><span className="linkText">Bana Ulaşın</span><img src="/images/arrow.png" alt="Invite Icon" /></Link>
        </div>
        <p>Coded By <a target="blank" href="https://toramanarda.com.tr/">Arda Toraman.</a> </p>
      </div>
    </div>
  )
}