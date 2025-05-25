import '../globals.css';
import Image from 'next/image';

export default function Academics() {
    return(
        
        <>
        
       <div className="academics-container">
        <h1>Academics</h1>
        
        
        <div className="academics-content">
            <span>
                <Image src="/Image2.jfif" alt="My profile picture" width={300} height={500} style={{marginRight:"60px"}} />
            </span>
             <li>
                <b>Education</b><br/>
                Bachelor of Computer Applications<br/>Kumudben Darbar College, Vijaypur - 2024
             </li>
             
                <li><b>Intern</b><br/>Infokshetra Technologies</li>
            <li><b>MERN Stack Project</b><br/> Developed a full - stack application usong MongoDB, Express.js, React.js and Node.js</li>
            <li><b>Airbnb Clone</b><br/>Built a responsive accomodation booking interface using ejs template</li>
        </div>
        </div>
        </>
    )
}