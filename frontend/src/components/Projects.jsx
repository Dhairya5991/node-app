const projects = [
  "Scania Supplier Portal",
  "Pilospray – E-Commerce",
  "Fortix – Online Store",
  "Samavedana – Charity Platform",
  "Venkateshwara Greens – Real Estate"
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map(p => <li key={p}>{p}</li>)}
      </ul>
    </section>
  );
}
