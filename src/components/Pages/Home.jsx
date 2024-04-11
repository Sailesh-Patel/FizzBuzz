import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container>
            <h1 className='page-title'>Home Page</h1>

  
      <iframe
      width="1200" 
      height="630" 
      src="https://www.youtube.com/embed/QPZ0pIK_wsc?si=XSCbGJeLA-Sj6RrR" 
      title="YouTube FizzBuzz video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowFullScreen
      >
      </iframe>

      </Container>
    </div>
  )
}

export default Home
