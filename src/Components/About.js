import Title from "./Title";

function About() {
  const height = 480;
  return (
    <div className="body-content about">
      <Title text="About us" />

      <iframe
        className="about-video"
        height={height}
        src="https://www.youtube.com/embed/55wdWAoQrac"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default About;
