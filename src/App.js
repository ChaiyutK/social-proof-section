import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <div className="maincontainer">
      <div className="topcontainer">
        <div className="detailcontainer">
        <p className='header'>10,000+ of our users love our products.</p>
        <p>We only provide great products combined with excellent customer service.
    See what our satisfied customers are saying about our services.</p>
        </div>
        <div className="ratecontainer">
          <div className="ratebox first">
            <ul>
              <li><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg></li>
              <li>Rated 5 Stars in Reviews</li>
            </ul>
          </div>
          <div className="ratebox second">
          <ul>
              <li><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg></li>
              <li>Rated 5 Stars in Report Guru</li>
            </ul>
          </div>
          <div className="ratebox third">
          <ul>
              <li><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg></li>
              <li>Rated 5 Stars in BestTech</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottomcontainer">
        <div className="commentcontainer">
          <div className="profile">
            <div className="picture">
              <img src="./images/image-colton.jpg" alt="Colton Smith Pic" />
            </div>
            <div className="name">
              <div className="namecontainer">
              <p>Colton Smith</p>
              <p>Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className="profile-detail">
            <p>
              "We needed the same printed design as the one we had ordered a week prior.
              Not only did they find the original order, but we also received it in time.
              Excellent!"
            </p>
          </div>
        </div>
        <div className="commentcontainer middle">
          <div className="profile">
            <div className="picture">
              <img src="./images/image-irene.jpg" alt="Irene Roberts Pic" />
            </div>
            <div className="name">
              <div className="namecontainer">
              <p>Irene Roberts</p>
              <p>Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className="profile-detail">
            <p>
            "Customer service is always excellent and very quick turn around. Completely
              delighted with the simplicity of the purchase and the speed of delivery."
            </p>
          </div>
        </div>
        <div className="commentcontainer bottom">
          <div className="profile">
            <div className="picture">
              <img src="./images/image-anne.jpg" alt="Anne Wallace Pic" />
            </div>
            <div className="name">
              <div className="namecontainer">
              <p>Anne Wallace</p>
              <p>Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className="profile-detail">
            <p>
            "Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
