import logo from './logo.svg';
import './App.css';
import { Form, FormControl, InputGroup, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faClipboard, faHeartbeat, faLink, faMapPin, faMicrochip, faShield } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [compliance, setCompliance] = useState(0);

  const [scope, setScope] = useState(0);

  const [affected, SetAffected] = useState(false);

  const [score, setScore] = useState(0);

  const [showsector, setShowsector] = useState(false);
  const [showsector2, setShowsector2] = useState(false);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const [option7, setOption7] = useState(false);
  const [option8, setOption8] = useState(false);
  const [option9, setOption9] = useState(false);
  const [option10, setOption10] = useState(false);
  const [option11, setOption11] = useState(false);
  const [option12, setOption12] = useState(false);
  const [option13, setOption13] = useState(false);
  const [option14, setOption14] = useState(false);
  const [option15, setOption15] = useState(false);
  const [option16, setOption16] = useState(false);
  const [option17, setOption17] = useState(false);


  const [turnover, setTurnover] = useState(1000);

  useEffect (() =>{ 

    var scope = 0
    
    var score = 0

    if (option1 == true){ scope++ ; scope++}
    if (option2 == true){ scope++}
    if (option3 == true){ scope++}

    if (option5 == true){ score++}
    if (option6 == true){ score++}
    if (option7 == true){ score++}
    if (option8 == true){ score++}
    if (option9 == true){ score++}
    if (option10 == true){ score++}
    if (option11 == true){ score++}
    if (option12 == true){ score++}
    if (option13 == true){ score++}
    if (option14 == true){ score++}
    if (option15 == true){ score++}
    if (option16 == true){ score++}
    if (option17 == true){ score++}

      var final_score = Math.round(((score/13 )*100))
      setCompliance(Math.round(final_score))

    if (scope >= 2){ 
      SetAffected(true)
    }
    else{ SetAffected(false)}
    

  }, [option1, option2, option3, option4, option5, option6, option7,option8, option9, option10, option11, option12, option13, option14, option15, option16, option17])

  

  return (
    <div className="container">

      <div></div>

      <div className="Cont1">
      <h1>NIS2 compliance questionnaire</h1>
      
      <br></br>
      <br></br>

      <p>The NIS2 Directive is the EU-wide legislation on cybersecurity. It provides legal measures to boost the overall level of cybersecurity. It will be applicable in October 2024.</p>
      <br></br>
      <div className="box">
        <h3 style={{color:"darkblue"}}><FontAwesomeIcon icon={faMapPin}/>&nbsp;&nbsp;Scope</h3>
        <br></br>
        <p><b>Sector - Is your organization operating in a sector critical for society?</b></p>

        <p style={{color:"grey"}}>Sectors in Article 2&nbsp;&nbsp;<span className="sectors click" onClick={ () => setShowsector2(!showsector2)}>what are those?</span></p>
        {showsector2 ?
          <div className="sectors">
            <li>Provider of public electronic communications network or services</li>
            <li>trust service provider</li>
            <li>TLD and DNS provider</li>
            <li>Sole provider of a critical service in a Member State</li>
            <li>Your entity&#39;s service disruption can significantly impact public safety, security, and health,
            posing substantial cross-border risks</li>
            <li>The entity is public administration</li>
          </div>:<></>}

        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption1(!option1)}/>
        <br></br>

        <p style={{color:"grey"}}>Sectors in Annex 1 and 2&nbsp;&nbsp;<span className="sectors click" onClick={ () => setShowsector(!showsector)}>what are those?</span></p>
          
          {showsector ?
          <div className="sectors">
            <li>Energy</li>
            <li>Transport</li>
            <li>Banking</li>
            <li>Financial market infrastructures</li>
            <li>Health</li>
            <li>Drinking water supply and distribution</li>
            <li>Waste</li>
            <li>Digital</li>
            <li>ICT</li>
            <li>Public</li>
            <li>Space</li>
            <li>Waste</li>
            <li>Manufacture, production and distribution of chemicals</li>
            <li>Production, processing and distribution of food</li>
            <li>Manufactures</li>
            <li>Digital providers</li>
            <li>Research</li>
          </div>:<></>}

          <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption3(!option3)}/>
            
            <br></br>
      
        <p><b>Size - Does your organization have an annual turnover of more than 10Mio euros <b>or</b> employ more than 50 employees?</b></p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption2(!option2)}/>
        <br></br>

          
        <br></br><br></br>
        <div className="boxbox">
          {affected ? <b>Yes, you are most probably affected by the new directive NIS2</b> : <>No, there is minimal chance that you are impacted by the new directive.</>}
        </div>
        </div>



        <div className="box">
        <h3 style={{color:"darkblue"}}><FontAwesomeIcon icon={faClipboard}/>&nbsp;&nbsp;Minimum cybersecurity measures</h3>
        <br></br>
        
        
        <br></br>
        <p><b>Does your organization have incident reporting mechanisms in place for cybersecurity events?</b></p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption5(!option5)}/>

        <br></br>
        <p><b>Is your top management involved in cybersecurity and trained accordingly?</b></p>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption6(!option6)}/>

        <br></br>
        <p><b>What cybersecurity measures, such as encryption, multi-factor authentication, and zero-trust
architecture, has your organization implemented based on Article 21?</b></p>
        
        <p>
        <>Policies on risk analysis and information system security</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption7(!option7)}/>
        </p>

        <p>
        <>Incident handling procedures</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption8(!option8)}/>
        </p>
          
        <p>
        <>Business continuity practices (backup, recovery, crisis management)</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption9(!option9)}/>
        </p>

        <p>
        <>Supply chain security policies with suppliers and service providers</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption10(!option10)}/>
        </p>

        <p>
        <>Security in network and information systems development, maintenance, and vulnerability
handling</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption11(!option11)}/>
        </p>
        
        <p>
        <>Assessment of cybersecurity risk-management effectiveness</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption12(!option12)}/>
        </p>

        <p>
        <>Basic cyber hygiene practices and cybersecurity training</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption13(!option13)}/>
        </p>

        <p>
        <>Cryptography and encryption procedures and policies</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption14(!option14)}/>
        </p>

        <p>
        <>Human resources security, access control policies, and asset management</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption15(!option15)}/>
        </p>

        <p>
        <>Use of multi-factor authentication or authentication solutions</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption16(!option16)}/>
        </p>

        <p>
        <>Secured voice, video, text, and emergency communication systems</>
        <Form.Check type="switch" id="default-radio" label="" onChange={ () => setOption17(!option17)}/>
        </p>

        

      
        <br></br><br></br>

        <div className="boxbox">

        {compliance < 60 ?
        <p style={{color: "red"}}><b>Your level of maturity to NIS2 is at {compliance}%.</b></p>
        :
        <p style={{color: "green"}}><b>Your level of maturity to NIS2 is at {compliance}%.</b></p>
        }

        <ProgressBar now={compliance} />
        </div>

      </div>
      </div>
      

      

    </div>
  );
}

export default App;
