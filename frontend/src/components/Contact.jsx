import axios from "axios";
export default function Contact(){
 return(
  <section id="contact">
    <h2>Contact</h2>
    <form onSubmit={e=>{e.preventDefault();axios.post('http://localhost:5000/contact',{msg:'hello'});alert('Sent')}}>
      <input placeholder="Name"/><br/>
      <input placeholder="Email"/><br/>
      <textarea placeholder="Message"/><br/>
      <button>Send</button>
    </form>
  </section>
 )
}