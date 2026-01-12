export default function Projects(){
 const projects=['Scania Supplier Portal','Pilospray','Fortix','Samavedana','Venkateshwara Greens'];
 return(
  <section id="projects">
    <h2>Projects</h2>
    {projects.map(p=><div key={p} className="card">{p}</div>)}
  </section>
 )
}