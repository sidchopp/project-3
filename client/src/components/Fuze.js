import React, { useEffect, useState } from 'react';


const Fuze = () => {
  const [fuze, setFuze] = useState({
    
    "startDate":"",
    "endDate":"",
    "startTime":"",
    "endTime":"",
    "Title":"",
    "description":"",
    "venue":"",
    "type":"",
    "tags1":"",
    "tags2":"",
    "tags3":"",
    "organizer":"",
    "whereIFoundThisEvent1":"",
    "whereIFoundThisEvent2":"",
    "whereIFoundThisEvent3":""
  });

  

  useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch('/Sandbox/'+ "5ffcdf71554972691c0d5372" );
      console.info("hey i m here", response);
      let fuze = await response.json();
      
      setFuze(fuze);
    };
    getSandbox();
  }, []);

  return (
    <div>  
            <h4>Start Date</h4>
          <div>{fuze.startDate}</div>
          <h4>End Date</h4>
          <div>{fuze.endDate}</div>
          <h4>Start Time</h4>
          <div>{fuze.startTime}</div>
          <h4>End Time</h4>
          <div>{fuze.endTime}</div>
          <h3>Title</h3>
          <div>{fuze.title}</div>
          <h3>Description</h3>
          <div>{fuze.description}</div>
          <h3>Venue</h3>
          <div>{fuze.venue}</div>
          <h3>Type</h3>
          <div>{fuze.type}</div>
          <h3>Tags 1</h3>
          <div>{fuze.tags1}</div>
          <h3>Tags 2</h3>
          <div>{fuze.tags2}</div>
          <h3>Tags 3</h3>
          <div>{fuze.tags3}</div>
          <h3>Organizer</h3>
          <div>{fuze.organizer}</div>
          <h3>WHere I found this Event 1</h3>
          <div>{fuze.whereIFoundThisEvent1}</div>
          <h3>WHere I found this Event 2</h3>
          <div>{fuze.whereIFoundThisEvent2}</div>
          <h3>WHere I found this Event 3</h3>
          <div>{fuze.whereIFoundThisEvent3 }</div>
    </div>
  )
};

export default Fuze;