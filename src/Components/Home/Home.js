import "./Home.scss";
import React from "react";
import { useEffect, useRef, useState } from "react";
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
      title: "Ishbilarmonlar uchun digital marketing agentligi" ,
      text: "Biz istiqbolli mijozlarni jalb qilamiz, savdo ofisiga tashriflar sonini oshiramiz va ishbilarmonlarning raqobatbardoshligini oshiramiz.",
    },
    services: {
      title: "Bizning xizmatlarimiz",
      list: {
        item1: {
          title: "SMM",
          text: "SMM management, video yoki reel tayyorlash, copywriting, target (facebook, instagram va google), grafik design, analitics.",
        },
        item2: {
          title: "Youtube Management",
          text: "YouTube platformasida brend yoki shaxsiy kanalni rivojlantirish va optimallashtirish xizmatidir.",
        },
        item3: {
          title: "Brending",
          text: "NAMING, BRANDING, PACKAGING, CUSTOMER DEVELOPMENT, BRANDBOOK",
        },
      },
    },
    cases: {
      title: "Bizning loyihalarimiz",
    },
    form: {
      title: "Biz bilan bog'laning.",
      placeholder1: "F.I.O:",
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
        position: "Founder",
      },
      member2: {
        name: "Durbek Borotaliyev",
        position: "CEO",
      },
    },
    footer: {
      secondPart: {
        title: "Veb-sayt navigatsiyasi",
      },
      lastPart: {
        phone: "Telefon raqam:",
        email: "Email manzili:",
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
      text: "Привлекаем перспективных клиентов, увеличиваем количество посещений офиса продаж и повышаем конкурентоспособность бизнесменов.",
    },
    services: {
      title: "Наши услуги",
      list: {
        item1: {
          title: "СММ",
          text: "Справление СММ, создание видео или рилса, копирайтинг, таргетинг (facebook, instagram и google), графический дизайн, аналитика.",
        },
        item2: {
          title: "YouTube Management",
          text: "Это услуга по развитию и оптимизации бренда или личного канала на платформе YouTube.",
        },
        item3: {
          title: "Брендинг",
          text: "НАИМЕНОВАНИЕ, БРЕНДИНГ, УПАКОВКА, РАЗВИТИЕ КЛИЕНТОВ, БРЕНДБУК",
        },
      },
    },
    cases: {
      title: "Наши проекты",
    },
    form: {
      title: "Связаться с нами.",
      placeholder1: "Ф.И.ОЖ",
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
        position: "Founder",
      },
      member2: {
        name: "Дурбек Бороталиев",
        position: "CEO",
      },
    },
    footer: {
      secondPart: {
        title: "Навигация по сайту",
      },
      lastPart: {
        phone: "Телефон:",
        email: "Электронная почта:",
      },
    },
  };
  const [lan,setLan]=useState("uz");
  const [content, setContent] = useState(contentUz);
  const carousel = document.getElementById("carousel");
  let currentIndex = 0;
  const handleRu = () => {
    setContent(contentRu);
    setLan('ru');
  };
  const handleUz = () => {
    setContent(contentUz);
    setLan('uz');
  };
  const [isInView, setIsInView] = useState(false);
  const [toggleMenuOpen, setToggleMenuOpen] = useState("toggleMenu");
  const [burger, setBurger] = useState("mobnav");
  const handleToggleMenu = () => {
    if (toggleMenuOpen == "toggleMenu") {
      setToggleMenuOpen("menu-open");
      setBurger("mobNav");
    } else {
      setToggleMenuOpen("toggleMenu");
      setBurger("mobnav");
    }
  };
  

  const teamCardsRef = useRef([]); //

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it's in view
      }
    });
  };

  const requestForm=[];

  useEffect(() => {
    setToggleMenuOpen("toggleMenu");
    if (toggleMenuOpen == "toggleMenu") {
      setBurger("mobnav");
    }
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    teamCardsRef.current
      .filter((card) => card !== null)
      .forEach((card) => observer.observe(card));

    // Clean up observer on component unmount
    return () => {
      teamCardsRef.current
        .filter((card) => card !== null) // Filter out null values
        .forEach((card) => observer.unobserve(card));
    };
  }, []);
  return (
    <div className="home">
      <div className="logoPage">
        <p>invigo.</p>
      </div>
      <div className="navbar">
        <p className="logo">invigo.</p>
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
        <div className={toggleMenuOpen} onClick={handleToggleMenu}>
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
        </div>
        <ul className={burger}>
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
          <ul className="mobLan">
            <li onClick={handleUz}>UZ</li>
            <li onClick={handleRu}>РУ</li>
          </ul>
        </ul>
      </div>
      
      <div className="homepage">
        {lan=='uz' && (<h1><span>Biznessingiz</span> uchun digital marketing agentligi.</h1>)}
        {lan=='ru' && (<h1>Digital-маркетинговое агентство для  <span>бизнеса.</span></h1>)}
        <h2>{content.homepage.text}</h2>

        <button className="contact-team">
          <a href="#contact">{content.homepage.btn}</a>
        </button>
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
        <h2>{content.cases.title}</h2>
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
              src="../../images/instagramwhite.png"
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
          <div
            className="team-member"
            ref={(el) => (teamCardsRef.current[0] = el)}
          >
            <img
              src="../../images/founder.png"
              alt={content.teamMember.member1.name}
            />
            <h3>{content.teamMember.member1.name}</h3>
            <span>{content.teamMember.member1.position}</span>
          </div>
          <div
            className="team-member"
            ref={(el) => (teamCardsRef.current[1] = el)}
          >
            <img
              src="../../images/ceo.png"
              alt={content.teamMember.member2.name}
            />
            <h3>{content.teamMember.member2.name}</h3>
            <span>{content.teamMember.member2.position}</span>
          </div>
        </div>
        <button className="contact-team">
          <a href="#contact">{content.homepage.btn}</a>
        </button>
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
            <p className="logo">invigo.</p>
            <ul className="social-media">
              <li>
                <a href="to:+998887882530">
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
                <a href="https://www.instagram.com/invigo.uz/">
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
          </div>
          <div className="lastPart">
            <ul className="list">
              <li>{content.footer.lastPart.phone}</li>
              <li>
                <a href="to:+998887882530">+998 88 788-25-30</a>
              </li>
              <li>{content.footer.lastPart.email}</li>
              <li>
                <a href="mailto:info@invigo.uz">info@invigo.uz</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text">
          This website is designed by{" "}
          <a href="https://t.me/t1mur_25">Timur Joldasbayev</a>.
        </p>
      </footer>
    </div>
  );
};
export default Home;
