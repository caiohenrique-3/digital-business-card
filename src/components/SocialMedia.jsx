function SocialMedia() {
  return (
    <section id="social-media">
      <div className="social-media-container">
        <a href="" aria-label="Go to John Doe's Twitter profile">
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
          <span className="sr-only">Twitter</span>
        </a>

        <a href="" aria-label="Go to John Doe's Facebook profile">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          <span className="sr-only">Facebook</span>
        </a>

        <a href="" aria-label="Go to John Doe's Instagram profile">
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <span className="sr-only">Instagram</span>
        </a>

        <a href="" aria-label="Go to John Doe's GitHub profile">
          <i className="fa fa-github-square" aria-hidden="true"></i>
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default SocialMedia;
