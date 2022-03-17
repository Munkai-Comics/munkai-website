import banner1 from "../images/banner-1.svg";
import banner2 from "../images/banner-2.svg";

function Banner() {
  return (
    <div className="banner d-flex">
      <div className="banner-inner-box banner-inner-text">
        <h1 className="banner-title">COMICS</h1>

        <p className="banner-subtitle">ON THE BLOCKCHAIN</p>

        <div className="banner-description">
          The first Read-to-Earn (R2E) comics & webtoons platform for comic
          fans, digital artists, crypto enthusiasts and writers
        </div>
      </div>

      <div className="banner-inner-box banner-box-img">
        <div className="banner-box-img-inner">
          <img className="banner-img1" alt="cover-page" src={banner1} />
          <img className="banner-img2" alt="cover-page" src={banner2} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
