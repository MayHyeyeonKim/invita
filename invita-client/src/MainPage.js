// src/MainPage.js
import React from 'react';
import './MainPage.css';
import ImageSlider from './components/ImageSlider';
import Browser from './components/Browser';

function MainPage() {
  return (
    <main className="main-content">
      <section className="left-content hero">
        <h1>Your Best Moment Invitation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Start free trial</button>
      </section>
      {/* <section className="right-content image-slider"> */}
        {/* <ImageSlider/> */}
        <Browser/>
      {/* </section> */}
    </main>
  );
}

export default MainPage;
