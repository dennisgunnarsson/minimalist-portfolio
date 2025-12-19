'use client';

import content from '../config/content.json';

export default function Home() {
  return (
    <>
      <header>
        <nav className="navBar">
          <div className="name">
            <h1>{content.nav.name}</h1>
          </div>
          <ul className="menu">
            {content.nav.menu.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-container">
          <h1>{content.hero.greeting}</h1>
          <h2>{content.hero.name}</h2>
          <p>{content.hero.description}</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="text">
            <h2>{content.about.title}</h2>
            <p>{content.about.description}</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>{content.contact.title}</h2>
        <p>{content.contact.description}</p>

        <div className="social-links">
          {content.contact.social.map((social, i) => (
            <a key={i} href={social.link} target="_blank">
              <img src={`/images/${social.icon}.svg`} alt={social.name} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
