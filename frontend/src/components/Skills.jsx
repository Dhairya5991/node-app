const skills=['HTML5','CSS3','Bootstrap','JavaScript','jQuery','WordPress','Core PHP','MySQL','Git'];
export default function Skills(){
 return(
  <section id="skills">
    <h2>Skills</h2>
    {skills.map(s=><span key={s} className="card" style={{display:'inline-block',margin:'8px'}}>{s}</span>)}
  </section>
 )
}