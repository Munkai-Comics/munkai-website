function Banner() {
  return (
    <div className="banner d-flex">
      <div className="banner-inner-box banner-inner-text">
        <h1 className="banner-title">COMICS</h1>

        <p className="banner-subtitle">ON THE BLOCKCHAIN</p>

        <div className="banner-description">
          The first Read-to-Earn (R2E) comics & NFT platform for comic fans,
          digital artists, crypto enthusiasts and creators.
        </div>
      </div>

      <div className="banner-inner-box banner-box-img">
        <div className="banner-box-img-inner">
          <img
            className="banner-img1"
            alt="cover-page"
            src="https://github.com/Munkai-Comics/munkai-img/blob/main/Necropoli-cover-page.jpeg?raw=true"
          />
          <img
            className="banner-img2"
            alt="cover-page"
            src="https://github.com/Munkai-Comics/munkai-img/blob/main/blood-cover.jpg?raw=true"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
