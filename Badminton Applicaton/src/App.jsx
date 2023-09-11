import "./App.css";
import one  from '../public/images/workflow1.png';
import two from '../public/images/workflow2.png';
import three from '../public/images/Businessflow.png';
function App() {
  return (
    <>
      <div>
        <h1>Badminton Court Application Design</h1>
        <p>
          This Application provides a platform where users can Book the
          Badminton Courts...
        </p>
      </div>
      <div>
        <img src="https://imgs.search.brave.com/lvcP_wPA2ynBK6V3YaX7NaZ_fzIdVdk8pdHjuNw7HKc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2x5bXBpY2NoYW5u/ZWwuY29tL2ltYWdl/cy9pbWFnZS9wcml2/YXRlL3Rfc193OTYw/L3Rfc18xNl85X2df/YXV0by9mX2F1dG8v/cHJpbWFyeS9rZnN5/enVhb2lwZmhtNHFv/bnFjaQ" alt="image" width="800" height="500"/>
      </div>
      <div>
        <h2>This Application is Combination of 2 individual apps</h2>
        <p>The Application for public where public has the options to book courts.</p>
        <p>The Application for Court Manager, where court Manager can Block Courts,release courts,and See the court Bookings.</p>
      </div>
      <div className="business">
        <h3>Business Flow Diagram</h3>
        <p>This is a Business flow design and it is designed to determine the data flow and interaction between the user and court Manager. </p>
        <img src={three} alt="image" width='600' height='900'/>
      </div>
      <div className="inner">
      <p>This diagram represents the flow between the user and court manager and their relation.</p>
      </div>
      <div className="user">
        <h3>Work Flow Design for User Application</h3>
        <img src={one} alt="image" width='1300' height='600' />
      </div>
       <div className="inner">
        <p>The User has access to:</p>
        <p>*Book a Court.</p>
        <p>*Reschedule a Court Booking.</p>
        <p>*Cancel a Court.</p>
        <p>*If cancelled the user can re-book a court any time with the credits given to equal amount of booking.</p>
        </div>
      <div className="owner">
        <h3>Work Flow Design for Court Manager Application</h3>
        <img src={two} alt="image" width='1300' height='800'/>
      </div>
      <div className="inner">
        <p></p>
      </div>
    </>
  );
}

export default App;
