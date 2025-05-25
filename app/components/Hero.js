import Image from "next/image";
import '../globals.css';

export default function Hero() {
  return (
    <>
      
      <div className="container">
        <Image src="/Image1.jpeg" alt="My profile picture" width={300} height={500} style={{marginRight:"60px"}} />
        <div className="container1">
            
          <h1>Welcome to my<br />Creative Space!</h1>
          <p>
            welcome to my creative space! I'm Indira Mirji. A passionate full stack developer.
            <br />On a mission to transform ideas into seamless full stack websites
          </p>
          <div className="heroButtons">
            <button className="button1">
              Start a Project <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="button2">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
}
