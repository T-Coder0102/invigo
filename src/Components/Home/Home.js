import "./Home.scss";
import React from "react";
import { useState } from "react";
const Home = () => {
  const contentUz = {
    navlist: {
      l1: "Biz haqimizda",
      l2: "Servislar",
      l3: "Sharhlar",
      l4: "Bog'lanish",
    },
    homepage: {
      btn: "Bepul maslahat olish",
    },
    services: {
      title: "Bizning xizmatlarimiz",
      list: {
        item1: {
          title: "SMM",
          text: "smm management, vidoe yoki reel tayyorlash, kopyvriting, target (facebook, instagram va google), grafik design, analyitka.",
        },
        item2: {
          title: "Youtube Management",
          text: "bu - YouTube platformasida brend yoki shaxsiy kanalni rivojlantirish va optimallashtirish xizmatidir.",
        },
        item3: {
          title: "Brending",
          text: "NAMING, BRANDING, PACKAGING, CUSTOMER DEVELOPMENT, BRANDBOOK",
        },
      },
    },
    form: {
      title: "Biz bilan bog'laning.",
      placeholder1: "F.I.O",
      placeholder2: "Telefon raqamingiz:",
      placeholder3: "Instagram akkauntingiz:",
      placeholder4: "Kompaniya nomi:",
      btn: "Bog'lanish",
    },
    aboutus: {
      title: "Biz haqimizda faktlar",
      facts: {
        item1: {
          title: "15MLN",
          text: "Bir oydagi kuzatuvlar soni",
        },
        item2: {
          title: "10x",
          text: "ROI - har 1 dollar uchun",
        },
        item3: {
          title: "3.7x",
          text: "ROI - har 1 dollar uchun",
        },
      },
    },
    teamMember: {
      title: "Bizning jamoa bilan tanishing!",
      member1: {
        name: "Jasurbek Fayzullayev",
        position: "Asos soluvchi",
      },
      member2: {
        name: "Durbek Borotaliyev",
        position: "Bosh ijrochi direktor",
      },
    },
    footer: {
      secondPart: {
        title: "Veb-sayt navigatsiyasi",
      },
      lastPart: {
        phone: "Telefon raqam:",
        email: "Email manzili",
      },
    },
  };
  const contentRu = {
    navlist: {
      l1: "О нас",
      l2: "Услуги",
      l3: "Отзывы",
      l4: "Контакты",
    },
    homepage: {
      btn: "Получить бесплатную консультацию",
    },
    services: {
      title: "Наши услуги",
      list: {
        item1: {
          title: "СММ",
          text: "управление смм, создание видео или рилса, копирайтинг, таргетинг (facebook, instagram и google), графический дизайн, аналитика.",
        },
        item2: {
          title: "YouTube Management",
          text: "это услуга по развитию и оптимизации бренда или личного канала на платформе YouTube.",
        },
        item3: {
          title: "Брендинг",
          text: "НАИМЕНОВАНИЕ, БРЕНДИНГ, УПАКОВКА, РАЗВИТИЕ КЛИЕНТОВ, БРЕНДБУК",
        },
      },
    },
    form: {
      title: "Связаться с нами.",
      placeholder1: "Ф.И.О",
      placeholder2: "Ваш номер телефона:",
      placeholder3: "Ваш Instagram аккаунт:",
      placeholder4: "Название компании:",
      btn: "Связаться",
    },
    aboutus: {
      title: "Факты о нас",
      facts: {
        item1: {
          title: "15МЛН",
          text: "Количество просмотров за месяц",
        },
        item2: {
          title: "10x",
          text: "ROI - за каждый 1 доллар",
        },
        item3: {
          title: "3.7x",
          text: "ROI - за каждый 1 доллар",
        },
      },
    },
    teamMember: {
      title: "Познакомьтесь с нашей командой!",
      member1: {
        name: "Джасурбек Файзуллаев",
        position: "Основатель",
      },
      member2: {
        name: "Дурбек Бороталиев",
        position: "Главный исполнительный директор",
      },
    },
    footer: {
      secondPart: {
        title: "Навигация по сайту",
      },
      lastPart: {
        phone: "Телефон:",
        email: "Электронная почта",
      },
    },
  };
  const [content, setContent] = useState(contentUz);
  const carousel = document.getElementById("carousel");
  let currentIndex = 0;
  const handleRu = () => {
    setContent(contentRu);
  };
  const handleUz = () => {
    setContent(contentUz);
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust for container width + gap
    }
  };

  const handleNext = () => {
    if (currentIndex < carousel.children.length - 3) {
      currentIndex++;
    }
  };
  return (
    <div className="home">
      <div className="navbar">
        <img src="../../images/logo.png" alt="Logo Invigo" className="logo" />
        <ul className="navList">
          <li>
            <a href="#aboutus">{content.navlist.l1}</a>
          </li>
          <li>
            <a href="#services">{content.navlist.l2}</a>
          </li>
          <li>
            <a href="#cases">{content.navlist.l3}</a>
          </li>
          <li>
            <a href="#contact">{content.navlist.l4}</a>
          </li>
        </ul>
        <ul className="lan">
          <li onClick={handleUz}>UZ</li>
          <li onClick={handleRu}>РУ</li>
        </ul>
      </div>
      <div className="homepage">
        <h1>HomePage</h1>
        <h2>There will be some text</h2>
        <div className="contact-team">
          <a href="#contact">{content.homepage.btn}</a>
        </div>
      </div>
      <div className="services" id="services">
        <h1>{content.services.title}</h1>
        <div className="services-carousel" id="carousel">
          <div className="service-container">
            <img src="../../images/social-media.png" alt="SMM Management" />
            <h3>{content.services.list.item1.title}</h3>
            <p>{content.services.list.item1.text}</p>
          </div>
          <div className="service-container">
            <img src="../../images/youtube.png" alt="Video Production" />
            <h3>{content.services.list.item2.title}</h3>
            <p>{content.services.list.item2.text}</p>
          </div>
          <div className="service-container">
            <img src="../../images/brand.png" alt="Branding" />
            <h3>{content.services.list.item3.title}</h3>
            <p>{content.services.list.item3.text}</p>
          </div>
        </div>
        {/* <div class="carousel-nav">
          <button className="carousel-btn" id="prevBtn" onClick={handlePrev}>
            Prev
          </button>
          <button className="carousel-btn" id="nextBtn" onClick={handleNext}>
            Next
          </button>
        </div> */}
      </div>
      <div className="cases" id="cases">
        <ul className="caseList">
          <li>
            <img src="../../images/cases1.png" alt="Cases1" className="items" />
          </li>
          <li>
            <img src="../../images/cases2.png" alt="Cases1" className="items" />
          </li>
          <li>
            <img src="../../images/cases3.png" alt="Cases1" className="items" />
          </li>
          <li>
            <img src="../../images/cases4.png" alt="Cases1" className="items" />
          </li>
          <li>
            <img src="../../images/cases5.png" alt="Cases1" className="items" />
          </li>
        </ul>
      </div>
      <div className="about-us" id="aboutus">
        <div className="about-header">
          <h2>{content.aboutus.title}</h2>
        </div>
        <div className="about-facts">
          <div className="fact-card">
            <img
              src="../../images/view.png"
              alt="View Image"
              className="fact-icon"
            />
            <h3>{content.aboutus.facts.item1.title}</h3>
            <p>{content.aboutus.facts.item1.text}</p>
          </div>
          <div className="fact-card">
            <img
              src="../../images/instagram.png"
              alt="Instagram images"
              className="fact-icon"
            />
            <h3>{content.aboutus.facts.item2.title}</h3>
            <p>{content.aboutus.facts.item2.text}</p>
          </div>
          <div className="fact-card">
            <img src="../../images/ecommerce.png" alt="E-Commerce" />
            <h3>{content.aboutus.facts.item3.title}</h3>
            <p>{content.aboutus.facts.item3.text}</p>
          </div>
        </div>
      </div>
      <div className="teamMembers" id="teamMembers">
        <h2>{content.teamMember.title}</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team1.jpg" alt={content.teamMember.member1.name} />
            <h3>{content.teamMember.member1.name}</h3>
            <span>{content.teamMember.member1.position}</span>
          </div>
          <div className="team-member">
            <img src="team2.jpg" alt={content.teamMember.member2.name} />
            <h3>{content.teamMember.member2.name}</h3>
            <span>{content.teamMember.member2.position}</span>
          </div>
        </div>
        <div class="contact-team">
          <a href="#contact">{contentUz.homepage.btn}</a>
        </div>
      </div>
      <div className="contactForm" id="contact">
        <div className="form-container">
          <div className="form-header">
            <h1>{content.form.title}</h1>
          </div>
          <form>
            <div className="form-group">
              <label for="name">{content.form.placeholder1}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={content.form.placeholder1}
                required
              />
            </div>
            <div className="form-group">
              <label for="phone">{content.form.placeholder2}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={content.form.placeholder2}
                required
              />
            </div>
            <div className="form-group">
              <label for="instagram">{content.form.placeholder3}</label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder={content.form.placeholder3}
                required
              />
            </div>
            <div className="form-group">
              <label for="company">{content.form.placeholder4}</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder={content.form.placeholder4}
              />
            </div>
            <button type="submit" class="submit-btn">
              {content.form.btn}
            </button>
          </form>
        </div>
      </div>
      <footer className="footer-container">
        <div className="footer-list">
          <div className="firstPart">
            <img src="../../images/logo.png" alt="Logo" className="logo" />
            <p>there will be some text</p>
            <ul className="social-media">
              <li>
                <a>
                  <img
                    src="../../images/phone.png"
                    alt="Phone"
                    className="icons"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="../../images/telegram.png"
                    alt="Telegram"
                    className="icons"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="../../images/instagramwhite.png"
                    alt="Instagram"
                    className="icons"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="secondPart">
            <h2>{content.footer.secondPart.title}</h2>
            <ul className="list">
              <li>
                <a href="#">{content.navlist.l1}</a>
              </li>
              <li>
                <a href="#">{content.navlist.l2}</a>
              </li>
              <li>
                <a href="#">{content.navlist.l3}</a>
              </li>
              <li>
                <a href="#">{content.navlist.l4}</a>
              </li>
            </ul>
          </div>
          <div className="lastPart">
            <ul className="list">
              <li>{content.footer.lastPart.phone}</li>
              <li>
                <a href="to:+998887882530">+998 88 788-25-30</a>
              </li>
              <li>{content.footer.lastPart.email}</li>
              <li>
                <a href="mailto:gemhunteruz@gmail.com">gemhunteruz@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
