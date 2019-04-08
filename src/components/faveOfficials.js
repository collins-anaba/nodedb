import React from 'react';



 
 export default function favOfficials(props) {
    return (
          <article>
            <h3>{props.name}</h3>
            <h3>{props.office}</h3>
          </article>
    );
  }