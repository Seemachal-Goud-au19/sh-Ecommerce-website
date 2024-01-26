import React from 'react'
import Button from 'react-bootstrap/Button';
import './Home.css'

 const Home = () => {
  return (
    <section id="tours" className="container">
    <h2>TOURS</h2>
    <div>
        <div className="tour-item">
            <span className="tour-date">JUL16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
            <Button variant="info" className="buy-btn">BUY TICKETS</Button>
        </div>
        <div className="tour-item">
            <span className="tour-date">JUL19</span>
            <span className="tour-place">TORONTO,ON</span>
            <span className="tour-spec-place">BUDWEISER STAGE</span>
            <Button variant="info" className="buy-btn">BUY TICKETS</Button>
        </div>
        <div className="tour-item">
            <span className="tour-date">JUL 22</span>
            <span className="tour-place"> BRISTOW, VA</span>
            <span className="tour-spec-place">JIGGY LUBE LIVE</span>
            <Button variant="info" className="buy-btn">BUY TICKETS</Button>
        </div>
        <div className="tour-item">
            <span className="tour-date">JUL 29</span>
            <span className="tour-place">PHOENIX, AZ</span>
            <span className="tour-spec-place"> AK-CHIN PAVILION</span>
            <Button variant="info" className="buy-btn">BUY TICKETS</Button>
        </div>
        <div className="tour-item">
            <span className="tour-date">AUG 2</span>
            <span className="tour-place">LAS VEGAS, NV</span>
            <span className="tour-spec-place">T-MOBILE ARENA</span>
            <Button variant="info" className="buy-btn">BUY TICKETS</Button>
        </div>
        <div className="tour-item">
            <span className="tour-date">AUG 7</span>
            <span className="tour-place">CONCORD, CA</span>
            <span className="tour-spec-place"> CONCORD PAVILION</span>
            <Button variant="info" className="buy-btn">BUY TICKETS</Button>
        </div>
    </div>
</section>
  )
} 
export default Home

{/* <Table striped bordered hover>

<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <td>3</td>
    <td colSpan={2}>Larry the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</Table> */}