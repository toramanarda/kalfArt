import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="header">
      <a href="https://www.instagram.com/kalfart_workshop/" target="blank"><img src="/images/kalfArtShop.jpg" alt="KalfArtShopIcon" />KalfArt</a>
      <li><Link to={'https://www.instagram.com/kalfart_workshop/'} target="blank">Bana Ulaşın</Link></li>
    </div>
  )
}