import "./Home.scss";
const Home= ()=>{
    const content ={
        navlist:{
            l1:"Biz haqimizda",
            l2:"Servislar",
            l3:"Sharhlar",
            l4:"Bog'lanish"
        },
        homepage:{
            btn:"Bepul maslahat olish"
        }
    }
    return(
        <div className="home">
            <div className="navbar">
                <img src="../../images/logo.png" alt="Logo Invigo" className="logo"/>
                <ul className="navList">
                    <li>{content.navlist.l1}</li>                    
                    <li>{content.navlist.l2}</li>                    
                    <li>{content.navlist.l3}</li>                    
                    <li>{content.navlist.l4}</li>                    
                </ul>
                <ul className="lan">
                    <li>UZ</li>
                    <li>РУ</li>
                </ul>

            </div>
            <div className="homepage">
                <h1>HomePage</h1>
                <h2>There will be some text</h2>
                <button className="home-btn">{content.homepage.btn}</button>

            </div>
            <div className="services"></div>
            <div className="cases"></div>
            <div className="contact"></div>
        </div>
    );
}
export default Home;