import React from 'react';
import { Alert } from "flowbite-react";
import Typed from 'typed.js';

export default function Donate() {
  const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options =  {
      strings: ["Save Marine Life!","Save Coral Reefs!","Save Ocean Health!","Save Our Climate!","Save Our Future!","Save Biodiversity!","Save Aquatic Plants!","Save Pristine Beaches!"],
      smartBackspace: true, 
      typeSpeed: 30,
      backSpeed: 30,
      loop: true
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <Alert color='green' className='flex items-center'>
      <a className="font-medium" href="/donate">Donate Plastic <span className="lg:inline-block text-green-600 " ref={el} ></span>
      </a>
    </Alert>
  );
}
