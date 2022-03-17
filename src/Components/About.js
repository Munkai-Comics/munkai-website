import Title from "./Title";

function About() {
  const height = 480;
  return (
    <div className="body-content about">
      <Title text="About us" />

      <iframe
        className="about-video"
        height={height}
        src="https://www.youtube-nocookie.com/embed/videoseries?list=PLYgkm0MK8DQGa5_-kK-836SoaOXqjD4rW"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default About;
