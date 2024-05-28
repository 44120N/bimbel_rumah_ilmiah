import "./expFooter.css";
import logo_footer from "../assets/footerBRI.png";
import { useEffect, useState } from "react";
const Footer = () => {
  const [contact, setContact] = useState("");
  useEffect(() => {
    setContact("+62818588589");
  });
  const wa_url = `https://wa.me/${contact}`;
  const loc_url = "https://maps.app.goo.gl/pzTMhGpPF7Eu7iC68";
  return (
    <>
      <footer>
        <div className="footer__contents">
          {/* logo */}
          <div className="logo">
            <div className="logo__container">
              <div className="logo__holder--img">
                <img src={logo_footer} alt="" />
              </div>
              <div className="logo__holder--desc">
                <p id="name">
                  <b style={{ color: "var(--light-color)" }}>Rumah</b>{" "}
                  <b style={{ color: "var(--second-color)" }}>Ilmiah</b>
                </p>
                <p style={{ color: "#000" }} id="moto">
                  Menjadikan esok hari yang lebih baik
                </p>
              </div>
            </div>
          </div>
          {/* boxtextbordertop */}
          <div className="footer__details">
            <div className="details__title">
              <span>
                <a href={wa_url} target="_blank">
                  Whatsapp
                </a>{" "}
                |{" "}
                <a href={loc_url} target="_blank">
                  Address
                </a>
              </span>
              <span>&copy; 2024 Bimbel Rumah Ilmiah. All Rights Reserved.</span>
            </div>
            <div className="details__desc">
              <div>
                <p>
                  Bimbel Rumah Ilmiah, tempat kesuksesan akademis dipadukan
                  dengan bimbingan berdedikasi dan pembelajaran inovatif!
                </p>
                <p>
                  Mulai perjalanan transformatif yang akan membantu Anda unggul
                  secara akademis dan mencapai tujuan pendidikan Anda. Baik Anda
                  seorang siswa yang ingin meningkatkan nilai, mempersiapkan
                  ujian, atau sekadar memperdalam pengetahuan, saluran kami siap
                  mendukung Anda di setiap langkah.
                </p>
              </div>
              <div id="sosmed">
                <h6>Social Media</h6>
                <ul className="social-icons">
                  <li>
                    <a className="instagram" href="#">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a className="github" href="#">
                      <i className="ri-github-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a className="discord" href="#">
                      <i className="ri-discord-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="youtube"
                      href="https://www.youtube.com/@Bimbel.Rumah.Ilmiah"
                      target="__blank"
                    >
                      <i className="ri-youtube-fill"></i>
                    </a>
                  </li>
                </ul>
                {/* <div className="row">
                            <h6>Feedback</h6>
                            <div className="form"><input/><button>Submit</button></div>
                        </div> */}
              </div>
            </div>
          </div>
          {/* <div>
            <h6>Address</h6>
            <p>
              Jl. Batu Jajar No. 31 B, RT. 3/RW. 1, Kb. Klp., Gambir, Jakarta
              Pusat, DKI Jakarta 10120, Indonesia
            </p>
          </div> */}
        </div>
        {/* <div className='credit'>
                    <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by Rumah Ilmiah</p>
                    <p>Developed by Zenith Technology</p>
                </div> */}
      </footer>
    </>
  );
};

export default Footer;
