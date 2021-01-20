import React, { useEffect, useState } from 'react';

const FuzeDetail = () => {
  const [detail, setDetail] = useState([]);
  return (
    <div >
      <h2>List of Fuzes</h2>
      <p>Weekly/Monthly</p>
   </div>
)};

const Fuze = () => {
  const [fuze, setFuze] = useState([]);
  //const classes = useStyles();

  useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch('/Sandbox');
      let data = await response.json();
      setFuze(data);
    };
    getSandbox();
  }, []);

  return (
    <div> <FuzeDetail /></div>

 )};

export default Fuze;