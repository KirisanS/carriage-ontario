import './home.css'

var IMAGES = [require('./images/redTruck.png'), require('./images/blueCar.png')];


function Home() {
    return (
        <html>
            <body>
                <header>
                    <div className="logoContainer">
                        <nav>
                            <ul>
                                <li><button className="navButton">Home</button></li>
                                <li><button className="navButton">Services</button></li>
                                <li><button className="navButton">Contact Us</button></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="titleContainer">
                    <h1 className="titleName">Carriage of Ontario</h1>
                    <p className="subtext1">Autobody Repair and Restoration</p>
                    <span className="subtext2"><p>Serving <b>Stouffville</b> and the <b>GTA</b></p></span>
                    <p className ="subtext3">25+ years of experience</p>
                </div>
                
                <button className="contactButton">CONTACT US</button>
                <button className="appointmentButton">BOOK APPOINTMENT</button>
                <img className="img1" src={IMAGES[0]} alt=""></img>
                <img className="img2" src={IMAGES[1]} alt=""></img>

                <div className="services">
                    <h2> Servicing </h2>
                </div>
            </body>
        </html>
    )
}

export default Home;