import PersonPhoto from "../assets/person.svg";

function Info() {
  return (
    <section id="info">
      <div className="photo-container">
        <img src={PersonPhoto} alt="A photo of John Doe" />
      </div>
      <div className="text-content">
        <h2>John Doe</h2>
        <h3>Frontend Developer</h3>
        <a href="" aria-label="Go to John Doe's personal website">
          <small>johndoe.website</small>
        </a>
      </div>
      <div className="button-container">
        <a href="mailto:" aria-label="Write an email to John Doe">
          <i className="fa fa-envelope" aria-hidden="true"></i>Email
        </a>
        <a
          href=""
          aria-label="Go to John Doe's LinkedIn profile"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Info;
