import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = ( props ) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] clean up work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect')
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
      btnClass = classes.Red;
  }

  if ( props.personsLength <= 2 ) {
    assignedClasses.push( classes.red ); // classes = ['red']
  }
  if ( props.personsLength <= 1 ) {
    assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
  }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p>
          <button
            ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked}>
              Toggle Persons
          </button>
          <button onClick={props.login}>Log in</button>
      </div>
  );
};

export default React.memo(Cockpit);