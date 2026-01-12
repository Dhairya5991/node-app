const skills = [
  "HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery",
  "WordPress", "Core PHP", "MySQL", "Git"
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {skills.map(skill => (
          <span key={skill} style={chip}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

const chip = {
  background: "#1e293b",
  padding: "10px 15px",
  borderRadius: "20px"
};
