import React, { useEffect, useState } from 'react';

const FuzeDetail = () => {
  const [detail, setDetail] = useState([]);
  return (
    <div >
  <h2>List of Fuzesss</h2>
<p>Weekly Fuze/Monthly</p>

<table>
  <tr>
    <th>date</th>
    <th>start time</th>
    <th>end time</th>
    <th>title</th>
  <th>description</th>
  <th>venue</th>
  <th>type</th>
  <th>tags1</th>
  <th>tags2</th>
  <th>tags3</th>
  <th>organizer</th>
  <th>where I found This Event1</th>
  <th>where I found This Event2</th>
  <th>where I found This Event3</th>

  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>Adam</td>
    <td>Johnson</td>
    <td>67</td>
  </tr>
</table>

   
</div>


)};


const Fuze = () => {
  const [fuze, setFuze] = useState([]);
  //const classes = useStyles();

useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch('/sandboxes');
      let data = await response.json();
      setFuze(data);
    };
    getSandbox();
  }, []);

return(
  <div> <FuzeDetail /></div>




)};

export default Fuze;