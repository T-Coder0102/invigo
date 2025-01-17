import "./Home.scss";
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
    services: {},
    form: {
      title: "Biz bilan bog'laning.",
      placeholder1: "F.I.O",
      placeholder2: "Telefon raqamingiz:",
      placeholder3: "Instagram akkauntingiz:",
      placeholder4: "Kompaniya nomi:",
      btn: "Bog'lanish",
    },
    teamMember: {},
  };
  const carousel = document.getElementById("carousel");
  let currentIndex = 0;
   const handlePrev=() => {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust for container width + gap
    }
  };

   const handleNext=() => {
    if (currentIndex < carousel.children.length - 3) {
      // Adjust for visible items
      currentIndex++;
      carousel.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust for container width + gap
    }
  };
  return (
    <div className="home">
      <div className="navbar">
        <img src="../../images/logo.png" alt="Logo Invigo" className="logo" />
        <ul className="navList">
          <li>
            <a href="#">{contentUz.navlist.l1}</a>
          </li>
          <li>
            <a href="#">{contentUz.navlist.l2}</a>
          </li>
          <li>
            <a href="#">{contentUz.navlist.l3}</a>
          </li>
          <li>
            <a href="#contact">{contentUz.navlist.l4}</a>
          </li>
        </ul>
        <ul className="lan">
          <li>UZ</li>
          <li>РУ</li>
        </ul>
      </div>
      <div className="homepage">
        <h1>HomePage</h1>
        <h2>There will be some text</h2>
        <button className="home-btn">{contentUz.homepage.btn}</button>
      </div>
      <div className="services">
        <h1>Bizning xizmatlarimiz</h1>
        <div class="services-carousel" id="carousel">
          <div class="service-container">
            <img src="icon1.png" alt="SMM Management" />
            <h3>SMM-менеджмент</h3>
          </div>
          <div class="service-container">
            <img src="icon2.png" alt="Video Production" />
            <h3>Производство видео</h3>
          </div>
          <div class="service-container">
            <img src="icon3.png" alt="Copywriting" />
            <h3>Копирайтинг</h3>
          </div>
          <div class="service-container">
            <img src="icon4.png" alt="Design" />
            <h3>Дизайн</h3>
          </div>
          <div class="service-container">
            <img src="icon5.png" alt="Marketing" />
            <h3>Маркетинг</h3>
          </div>
        </div>
        <div class="carousel-nav">
          <button class="carousel-btn" id="prevBtn"onClick={handlePrev}>
            Prev
          </button>
          <button class="carousel-btn" id="nextBtn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
      <div className="cases">
        <h1>This the cases</h1>
      </div>
      <div className="teamMembers" id="teamMembers">
        <h2>Meet The A-Team</h2>
        <div class="team-members">
          <div class="team-member">
            <img src="team1.jpg" alt="Iman Gadzhi" />
            <h3>Iman Gadzhi</h3>
            <span>FOUNDER</span>
            <p>
              Leading the team with a vision for excellence in digital
              marketing.
            </p>
          </div>
          <div class="team-member">
            <img src="team2.jpg" alt="Ciaran Anderson" />
            <h3>Ciaran Anderson</h3>
            <span>COPYWRITER</span>
            <p>Creating compelling copy that drives results for our clients.</p>
          </div>
          <div class="team-member">
            <img src="team3.jpg" alt="Dany Benavides" />
            <h3>Dany Benavides</h3>
            <span>CHIEF MARKETING OFFICER</span>
            <p>Delivering innovative strategies to elevate brand presence.</p>
          </div>
          <div class="team-member">
            <img src="team4.jpg" alt="Luis Berger" />
            <h3>Luis Berger</h3>
            <span>PERFORMANCE MARKETER</span>
            <p>Optimizing campaigns to achieve maximum ROI.</p>
          </div>
        </div>
        <div class="contact-team">
          <a href="#contact">{contentUz.homepage.btn}</a>
        </div>
      </div>
      <div class="form-container" id="contact">
        <div class="form-header">
          <h1>{contentUz.form.title}</h1>
        </div>
        <form>
          <div class="form-group">
            <label for="name">{contentUz.form.placeholder1}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={contentUz.form.placeholder1}
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">{contentUz.form.placeholder2}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={contentUz.form.placeholder2}
              required
            />
          </div>
          <div class="form-group">
            <label for="instagram">{contentUz.form.placeholder3}</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              placeholder={contentUz.form.placeholder3}
              required
            />
          </div>
          <div class="form-group">
            <label for="company">{contentUz.form.placeholder4}</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder={contentUz.form.placeholder4}
            />
          </div>
          <button type="submit" class="submit-btn">
            {contentUz.form.btn}
          </button>
        </form>
      </div>
      <footer class="footer-container">
        <div class="logo">digital marketing</div>
        <div class="tagline">Надежные решения для вашего бизнеса</div>
        <div class="links">
          <a href="#">{contentUz.navlist.l1}</a>
          <a href="#">{contentUz.navlist.l2}</a>
          <a href="#">{contentUz.navlist.l3}</a>
          <a href="#">{contentUz.navlist.l4}</a>
        </div>
        <div class="contacts">
          <p>Email: info@digitalmarket.uz</p>
          <p>Телефон: +998 (33)-330-33-04</p>
          <p>Офис в Ташкенте</p>
        </div>
        <div class="social-icons">
          <img src="whatsapp-icon.png" alt="WhatsApp" />
          <img src="telegram-icon.png" alt="Telegram" />
          <img src="instagram-icon.png" alt="Instagram" />
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </div>
      </footer>
    </div>
  );
};
export default Home;
