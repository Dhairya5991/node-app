export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        background: "linear-gradient(135deg, #020617, #0f172a)"
      }}
    >
      <div style={{ maxWidth: "800px" }}>
        {/* Intro badge */}
        <span
          style={{
            color: "#38bdf8",
            fontWeight: "600",
            letterSpacing: "1px"
          }}
        >
          👋 Hello, I’m
        </span>

        {/* Name */}
        <h1 style={{ fontSize: "3rem", margin: "15px 0" }}>
          Dhairyashil Pansare
        </h1>

        {/* Role */}
        <h3 style={{ color: "#94a3b8", marginBottom: "20px" }}>
          Senior Software Engineer | WordPress | PHP | DevOps Enthusiast
        </h3>

        {/* Intro content */}
        <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
          Software Engineer with 6+ years of experience in building scalable,
          high-performance web applications using WordPress, Core PHP, MySQL,
          HTML, CSS, and JavaScript. Passionate about DevOps practices, Docker,
          automation, and modern deployment workflows.
        </p>

        {/* CTA buttons */}
        <div>
          <a
            href="/resume.pdf"
            download
            style={{
              background: "#38bdf8",
              color: "#020617",
              padding: "12px 24px",
              borderRadius: "6px",
              marginRight: "15px",
              fontWeight: "600",
              display: "inline-block"
            }}
          >
            Download Resume
          </a>

          <a
            href="#contact"
            style={{
              border: "1px solid #38bdf8",
              color: "#38bdf8",
              padding: "12px 24px",
              borderRadius: "6px",
              fontWeight: "600"
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
