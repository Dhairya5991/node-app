import { Link } from "react-scroll";
export default function Navbar(){
 return(
  <nav style={{position:'fixed',top:0,width:'100%',background:'#020617',padding:'15px 10%',zIndex:1000,display:'flex',justifyContent:'space-between'}}>
    <h2>DP</h2>
    <div>
      {['about','skills','experience','projects','education','languages','management','contact'].map(s=>
        <Link key={s} to={s} smooth duration={500} style={{margin:'0 12px',cursor:'pointer'}}>{s.toUpperCase()}</Link>
      )}
      <a href="/resume.pdf" download style={{marginLeft:'15px',color:'#38bdf8'}}>Download CV</a>
    </div>
  </nav>
 )
}