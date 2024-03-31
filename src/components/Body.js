import React from 'react';
import '../styles/Body.css';
import ch2 from '../images/ch2.png';
import ch1 from '../images/ch1.png';
import furnt from '../images/imageh.jpg';
import returns from '../images/returns.png';
import shipping from '../images/shipping.png';
import shop from '../images/shop.png';
import support from '../images/support.png';
import dots from '../images/dots.png';
import location from '../images/location.png';
import mail from '../images/mail.png';
import phone from '../images/phone.png';




export default function Body() {
  return (
    <div className='body'>

      <section className='section1'>
        <h4 className='phome'>
          Trending <code>Products</code> 
        </h4>
        <p className='phome1'>
          Turn your room with luxury into a lot more <br/>
          minimalist and modern
        </p>
      </section>


      <section className='flexcards'>
        <card className='card1'>
          <div className='left-section'>
            <h5>Long Sofa</h5>
            <p>Structure almost highlights</p>
            <h6>SHOP NOW</h6>
          </div>
          <img className='chairr' src={ch2} alt='lg'></img> 
        </card>
        <card className='card2'>
          <div className='left-section'>
            <h5>Long Sofa</h5>
            <p>Structure almost highlights</p>
            <h6 id='two'>SHOP NOW</h6>
          </div>
          <img className='chairr' src={ch1} alt='lg'></img> 
        </card>
      </section>


      <section className='section2'>
        <div className='whyus'>
          <p className='phom'>
            Why Choose <code> Us</code> 
          </p>
          <p className='phom1'>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. <br />
            Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <section className='gridwhy'>
            <div className='gridwhyx'>
              <img className='img' src={shipping} alt='lg'></img> 
              <h5 > Fast & Free Shipping</h5>
              <p> 
                Donec vitae odio quis nisl dapibus<br/>
                malesuada. Nullam ac aliquet velit.<br/>
                Aliquam vulputate
              </p>
            </div>
            <div className='gridwhyx'>
              <img className='img' src={shop} alt='lg'></img>
              <h5 >Easy to Shop</h5>
              <p> 
                Donec vitae odio quis nisl dapibus<br/>
                malesuada. Nullam ac aliquet velit.<br/>
                Aliquam vulputate
              </p>
            </div>
            <div className='gridwhyx'>
              <img className='img' src={support} alt='lg'></img>
              <h5 >24/7 Support</h5>
              <p> 
                Donec vitae odio quis nisl dapibus<br/>
                malesuada. Nullam ac aliquet velit.<br/>
                Aliquam vulputate
              </p>
            </div>
            <div className='gridwhyx'>
              <img className='img' src={returns} alt='lg'></img>
              <h5 >Hassle Free Returns</h5>
              <p> 
                Donec vitae odio quis nisl dapibus<br/>
                malesuada. Nullam ac aliquet velit.<br/>
                Aliquam vulputate
              </p>
            </div>
          </section>
        </div>

        <div className='whyimage'>
          <img className='furntd' src={dots} alt='lg'></img> 
          <img className='furnt' src={furnt} alt='lg'></img>
        </div>
      </section>


      <section className='section3'>
        <div className='formc'>
          <h3 className='textform'>Do you have any inquiries</h3>
          <p className='fillform'>
            Fill up form below, our team will get back soon
          </p>
          
          <form className="contactform" >
            <input placeholder="Name" type="text" name="name"/>
            <input placeholder="Example@gmail.com" type="email" name="email" />
            <input placeholder="Phone" type="tel" name="phone" />
            <input placeholder="Subject" type="text" name="subject" />
            <textarea placeholder="Your message" className="form-m" name="message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      
      
      
      <div class="card-cont">
        <div class="cardc">
        <img className='img' src={mail} alt='lg'></img>
          <h2> Email Us</h2>
          <p> no-reply@luxury.com </p>
        </div>
        <div class="cardcm">
        <img className='img' src={phone} alt='lg'></img>
          <h2>Call Us</h2>
          <p> +250-791-902-159 </p>
        </div>
        <div class="cardc">
        <img className='img' src={location} alt='lg'></img>
          <h2>Visit Us</h2>
          <p> Kisimenti KG175 No.37</p>
        </div>
      </div>

      
    </div>
  )
}
