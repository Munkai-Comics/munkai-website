function Footer() {
  return (
    <footer className="footer d-flex">
      <div className="footer-icon-box">
        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://t.me/munkai_community"
        >
          <i className="fa fa-telegram steelblue"> </i>
        </a>

        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/munkai_comics?t=UkGK2f-YT799rXXMfvIyuQ&s=09"
        >
          <i className="fa fa-twitter blue"> </i>
        </a>

        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/munkai_comics?utm_medium=copy_link"
        >
          <i className="fa fa-instagram"> </i>
        </a>

        <a
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
          href="https://youtube.com/channel/UCgpv6rt9FQwOhXa8A0ij-_A"
        >
          <i className="fa fa-youtube"> </i>
        </a>
      </div>

      <div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span>MUNKAI</span> | ALL RIGHT'S
          RESERVED{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
