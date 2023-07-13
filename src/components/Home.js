import React from "react";
import vg from '../image/2.png';
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";


function Home(){
    return(
        <>
        <div className="home">
        <main>
        <h2>Techvilla</h2>
        <p>Solution To All Your Problems</p>
        </main>
        </div>
<div className="new">
    <img src={vg} alt="Graphics"/>
<div>
    <p className="Ptext">We are your one and only solution to the
     tech problems you face every day.
     We are leading tech company whose aim is 
     to increase the problem solving ability in children.</p>
    </div>
</div>

<div className="home3" id="about">
<div >
    <h2>who we are?</h2>

    <p>As a server provider, we are a team of dedicated professionals committed to delivering reliable and high-quality hosting solutions to our customers. Our mission is to empower businesses and individuals by providing them with the tools they need to succeed online. We understand that your website or application is critical to your success, and we take that responsibility seriously. That's why we invest in state-of-the-art infrastructure, cutting-edge technologies, and experienced support staff to ensure that your website is always up and running smoothly. At our core, we are driven by our customers.
</p>
</div>
</div>


<div className="home4" id="brands">
    <div>
        <h2>brands</h2>
        <article>
        <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle>
                Google
            </AiFillGoogleCircle>
            </div>
            <div style={{animationDelay:"0.1s"}}>
            <AiFillAmazonCircle>
                Amazon
            </AiFillAmazonCircle>
            </div>
            <div style={{animationDelay:"0.2s"}}>
            <AiFillYoutube>
                YouTube
            </AiFillYoutube>
            </div>
            <div style={{animationDelay:"0.5s"}}>
            <AiFillInstagram>
            Instagram
            </AiFillInstagram>
            </div>
            
            
        </article>
        </div>
    </div>

        
        </>
    )
}

export default Home;
