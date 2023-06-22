import './home.css'

var IMAGES = [require('./images/redTruck.png'), require('./images/blueCar.png'), require('./images/serviceBlueCar.png'), require('./images/truck.png')
, require('./images/redCheckMark.png')];


function Home() {
    return (
        <html>
            <div className="top-level-container">
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
                    <h2> <center>Servicing</center> </h2>
                    <p className="servicingText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div className="listOfServices">
                    <h3> <center>Our Services "WORK IN PROGRESS"</center></h3>
                    <p className="serviceLabel1">Some Label</p>
                    <ul className="list1">
                        <li className="serviceList"><span className="listText">Mechanical</span></li>
                        <li className="serviceList"><span className="listText">Body Repair & Sheet Metal</span></li>
                        <li className="serviceList"><span className="listText">Frame Repairs</span></li>
                        <li className="serviceList"><span className="listText">Refinishing</span></li>
                        <li className="serviceList"><span className="listText">Paint & Materials</span></li>
                    </ul>

                    <ul className="list2">
                        <li className="serviceList"><span className="listText">Mechanical</span></li>
                        <li className="serviceList"><span className="listText">Body Repair & Sheet Metal</span></li>
                        <li className="serviceList"><span className="listText">Frame Repairs</span></li>
                        <li className="serviceList"><span className="listText">Refinishing</span></li>
                    </ul>
                </div>
            </body>
            </div>
        </html>
    )
}

export default Home;