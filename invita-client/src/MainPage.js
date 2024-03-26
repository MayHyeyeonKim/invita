// src/MainPage.js
import React from 'react';
import './MainPage.css'; // 스타일 파일을 불러옵니다.

function MainPage() {
  return (
    <main className="main-page">
      <section id="section1">
        <h2>Section 1</h2>
        <p>This is the content of Section 1.</p>
      </section>
      <section id="section2">
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
      </section>
      <section id="section3">
        <h2>Section 3</h2>
        <p>This is the content of Section 3.</p>
      </section>
    </main>
  );
}

export default MainPage;
