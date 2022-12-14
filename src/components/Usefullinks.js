import React from 'react'
import { ListGroup } from 'react-bootstrap';

export default function Usefullinks() {
  return (
    <>
        <h2>Useful Links</h2>
  <div id="google_translate_element"></div>

        <ListGroup >
            <ListGroup.Item onClick={(e) => {
              e.preventDefault();
              window.open('https://www.meditationoasis.com/', '_blank');
            }} >Meditate with us</ListGroup.Item>
            <ListGroup.Item onClick={(e) => {
              e.preventDefault();
              window.open('https://www.meditationoasis.com/', '_blank');
            }} >Tip of the Day</ListGroup.Item>
            <ListGroup.Item onClick={(e) => {
              e.preventDefault();
              window.open('https://www.meditationoasis.com/', '_blank');
            }} >Play A Game</ListGroup.Item>
          </ListGroup>
    </>
  )
}
