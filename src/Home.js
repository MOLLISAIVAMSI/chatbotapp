import './Home.css';
import Top from './Top.js';
import Sidebar from './Sidebar.js';
import Content from './Content.js';
import "./index.css"
import "./urls.css"
import Cardfile from './Cardfile.js';
import $ from 'jquery';
import { useEffect } from 'react';
import { useState } from 'react';
import Menubar from './Menubar.js';
import Contact from './Contact.js';
import video from './backv.mp4';
import l from './Log.png';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

const Card = (props) => {
    const handleClick = () => {
        if(props.className.includes('card-0')){
            const newWindow = window.open('http://localhost:3001/', '_blank');
            
        }
    };
    return (
        <div className="col-sm-4 cards ${props.className}" onClick={handleClick}>
            <h3>{props.head}</h3>
            <p>{props.para}</p>
            <img src={props.image} className='rounded'/>
            <p>{props.className}</p>
        </div>
    )
}
function Home() {
  const [isHovered, setIsHovered] = useState(false);
  
  
  const cards = [
    {head:'AI & ML',para:'AI is the simulation of human intelligence processes by machines.',image:l},
    {head:'Locator',para:'Get your current location data with our GPS tracker and share location.',image:l},
    {head:'Messenger',para:'Get chat with friends and family with our messenger and share ideas',image:l}               
  ];
  return (
    <div className="Home">
        <div className='frontpage row home'>
              <div className="col-sm-3"></div>
              <div className="col-sm-6 cen text-center moving-up " style={{'marginTop':'420px','backgroundColor':'white','paddingTop':'50px'}}>
                  <h3>Developing Technologies</h3>
                  <h1  className="mt-3" >LET'S SEE THE FUTURE</h1>
                  <button className="free mt-3 buttona" style={{'backgroundColor':'white'}}><b>Free Usage</b></button>
              </div>
              <div className="col-sm-3"></div>
        </div>
       
        <div className="container-fluid wrapper-open home" style={{'paddingTop':'120px','backgroundColor':'black'}}>  
            <div className="row">
              <div className="col-sm-6 text-center"><video className="rounded" src={video} autoPlay muted loop id="myVideo" style={{'width':'100%','height':'100%'}}/></div>
              <div className="col-sm-6 text-light" style={{'paddingTop':'50px'}}>
                  <div className="colors" >
                    <h1 >One Platform,</h1>
                    <h2 >infinite possibilities</h2>
                  </div>  
                  <div className="row pt-3" >
                      <div className="col-sm-1"></div>
                      <div className="col-sm-5" style={{'borderTop': '1px solid white'}}>
                          <h4 style={{'padding':'15px'}} className='to'>Powerful infrastructure</h4>
                          <p className="hov">Get an enterprise-grade foundation, engineered for your limitless scalability and peace of mind.</p>
                      </div>
                      <div className="col-sm-1"></div>
                      <div className="col-sm-4" style={{'borderTop': '1px solid white'}}>
                          <h4 style={{'paddingTop':'15px'}} className='to'>The place for growth</h4>
                          <p className="hov" style={{'paddingTop':'15px'}}>Convert and scale seamlessly with built-in marketing and business solutions.</p>
                      </div>
                      <div className="col-sm-1"></div>
                  </div>
              </div>
            </div>   
        </div>
       
        <div className="fontclass home" style={{}}>
            <div className='font0'></div>
            <div className='font1'>CREATING NEW WORLD</div>
            <div className='font2'>AND EXPERIENCE</div>
            <div className='font3'>NEW GENERATIVE AI</div>
            <div className='font4'>DEVELOPING TECHNOLOGIES</div>
            <div className='font0'></div>
        </div>

        <div className="text-center container-fluid home" style={{'padding':'100px','background':'black','color':'white'}}>
            <h1><b className="colors">Services that set you up for success</b></h1><br/><br/>
            <b className="to">Get a headstart on your journey with customizable, strategically<br/> researched and tailored for every client.</b><br/><br/>
            <button className="free mt-3 buttona" style={{'backgroundColor':'white'}}><b>Free Usage</b></button>
            <div className="row mt-5 container-fluid">
                <div className="row mt-5 col-sm-9">
                {
                    cards.map((card,index) => (
                        <Card  head={card.head} para={card.para} image={card.image}  className={`card-${index}`}/>
                    ))
                }
                </div>
                <div className="col-sm-3 text-center">
                <p className='texthome'>Get inspired,<br/> gain new ideas<br/> and see what’s<br/> trending</p>
                <button className='expbutton'>Explore the Blog</button>
            </div>
            </div>
        </div>
        <div className='endtag home'>
            <p>Tomorrow’s success starts today.</p>
            <button className='expbutton'>Get Started</button>
            <hr className="home"/>
            <div className="mt-3 topgap home">
                <div className="flex endtab">
                    <div className=" endtab">
                        <b>Support</b>
                        <p className='mt-3'>Help Center</p>
                        <p>Report</p>
                    </div>
                    <div className="endtab">
                        <b>Company</b>
                        <p className='mt-3'>Team mates</p>
                        <p>Blog</p>
                    </div>
                </div>
                
            </div>
        </div>
        <footer className="foot" style={{'backgroundColor':'black','paddingTop':'1px','display':'none'}}>
            <Contact className="about"/>
        </footer>
        
         
        <div>
            <div className="rows mt-3 home">
                <div class="social-icons">
                            <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.google.com" target="_blank"><i class="fab fa-google"></i></a>
                            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
                <div className='rows endtab'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>© 2023 Intelligenica. All rights reserved</p>
                </div>
            </div>
        </div>
        <div className="trademark">
            <p>Created by <b>USV</b></p>
        </div>
    </div>
  
  );
}

export default Home;

