import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Stories() {
  return (
    <>
      <motion.div className="storiesContainer"
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <div className="largestImg">
          <video src="/images/kalf.mp4" autoPlay muted loop width={"1439px"} height={"650px"}></video>
          <div className="largesImgText">
            <h1>KalfArt</h1>
            <p>Taha Recep Alanur</p>
          </div>
        </div>
        <div className="smallStories">
          <Link to='#' className="smallStory">
            <img src="/images/atam.png" alt="Mustafa Kemal Atatürk" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Mustafa Kemal Atatürk</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/fridaKahlo.png" alt="Frida Kahlo" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Frida Kahlo</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/hatSanati.png" alt="Hat Sanati" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Hat Sanati</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/baris.png" alt="Barış" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Barış</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/polis.png" alt="Polis" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Polis Haftası</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/seyitOnBasi.png" alt="Seyit Onbasi" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Seyit Onbaşı</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/turkBayragi.png" alt="Türk Bayrağı" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Türk Bayrağı</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/atam2.png" alt="Mustafa Kemal Atatürk" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Mustafa Kemal Atatürk</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/rahmiKoc.png" alt="Rahmi Koç" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Rahmi Koç</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/yasli.png" alt="Yaşlı Adam" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Yaşlı Adam</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/omerDurak.png" alt="Ömer Durak" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Ömer Durak</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/emirSarigul.png" alt="Emir Sarıgül" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Emir Sarıgül</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/es.png" alt="Eş" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Eş</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/aile.png" alt="Aile" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Aile</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/kadiogli.png" alt="Kadıoğlu" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Kadıoğlu</h1>
              </div>
            </div>
          </Link>
          <Link to='#' className="smallStory">
            <img src="/images/aile2.png" alt="Aile" />
            <div className="smallStoryInfo">
              <div className="smallStoryText">
                <h1>Aile</h1>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  )
}