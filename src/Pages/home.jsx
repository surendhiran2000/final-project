import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css'


export default function Home() {
  const navigate = useNavigate();


  return (
    <div className='main-content'>
       <div >
      <header>
        <nav>
          <ul>

            <button onClick={() => navigate("/About")} style={{ backgroundColor: 'blue' }}>About</button>
            <button onClick={() => navigate("/ContactUs")} style={{ backgroundColor: 'blue' }}>ContactUs</button>
            
            <button onClick={() => navigate("/offer")}  style={{ backgroundColor: 'blue' }}>Offers</button>

          </ul>
        </nav>
      </header>
      </div>
      <nav>
        <h1><i><mark>WELCOME TO FLICKPICK</mark></i></h1><hr />
        <div ><u style={{ fontSize: '20px' }}>Current Movies....</u></div>
        <div class='current-movie'>
          <img onClick={() => navigate("/bookTickets")} style={{ height: '150px', width: '100px', }} src="/img/dc2.jpeg" alt="imag not support" />
          <img onClick={() => navigate("/bookTickets")} style={{ height: '150px', width: '100px', }} src="/img/vaazhai.jpeg" alt="imag not support" />
          <img onClick={() => navigate("/bookTickets")} style={{ height: '150px', width: '100px', }} src="/img/thangalan.jpeg" alt="imag not support" />
          <hr />
          <hr />

        </div>
      </nav>
      <div ><u style={{ fontSize: '20px' }}>Upcoming Movies....</u></div>
      <div class='up-cm'>
        <img style={{ height: '150px', width: '100px', }} src="/img/goat.jpeg" alt="imag not support" />
        <img style={{ height: '150px', width: '100px' }} src="/img/kanguva.jpeg" alt="imag not support" />
        <img style={{ height: '150px', width: '100px' }} src="/img/vm.jpeg" alt="imag not support" /><hr />
      </div>

      <div style={{ fontSize: '20px' }}>Pillors Of Tamil Cinema</div>
      <div>
        <img style={{ height: '120px', width: '100px' }} src="/img/sivaji.jpeg" alt="imag not support" />
        <img style={{ height: '120px', width: '100px' }} src="/img/mgr.jpeg" alt="imag not support" />
        <img style={{ height: '120px', width: '100px' }} src="/img/kamal.png" alt="imag not support" />
        <img style={{ height: '120px', width: '100px' }} src="/img/rajini.jpeg" alt="imag not support" /><br />
        <img style={{ height: '120px', width: '100px' }} src="/img/vijay.jpeg" alt="imag not support" />
        <img style={{ height: '120px', width: '100px' }} src="/img/billa.jpg" alt="imag not support" />
        <img style={{ height: '120px', width: '100px' }} src="/img/surya.jpeg" alt="imag not support" />
        <img style={{ height: '120px', width: '100px' }} src="/img/dhanush.jpeg" alt="imag not support" />
      </div>
      <button onClick={() => navigate("/")}>LogOut</button>
      <div>

      </div>

    </div>
  );
}
