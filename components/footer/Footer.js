import Link from 'next/link'



const Footer = () => {

 



  return (
    <>
      <footer className="stfooter">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-8 col-md-6">
            <iframe  className="ftaddrs" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.691407765851!2d77.5861455!3d12.9275447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1569f3345d4d%3A0x6ae7f2604f396d9b!2sEdXplore!5e0!3m2!1sen!2sin!4v1662092040312!5m2!1sen!2sin"  style={{ border: 0 }}
                allowFullScreen
                loading="lazy" />
          
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ftad">
                <p>
                6th Floor, The High Street, 62, 11th Main Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560011
                </p>
                <a href="tel:+91-9945580134"> +91-9945580134</a>
                <a href="mailto:info@edxplore.com.com">
                  info@edxplore.com
                </a>
                 </div>
            </div>
          </div> */}
          <div className="usfllinks">
            <div className="accordion2" id="accordionExample2">
              <div className="row">
                <div className="col-lg-2 col-md-2">
                  <h4
                    data-toggle="collapse"
                    data-target="#collapseOneft"
                    aria-expanded="true"
                    aria-controls="collapseOneft"
                    className="mobclick"
                  >
                    About Us
                    <i className="fal fa-plus" /> <i className="fal fa-minus" />
                  </h4>
                  <h4>About Us</h4>
                  <div
                    id="collapseOneft"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample2"
                  >
                    <ul>
                     
                      <li>
                        <a href='/refer'>Refer and Earn</a>
                      </li>
                      <li>
                        <a href='/aboutcmg'>About Us</a>
                      </li>
                      <li>
                        <a href='/career'>Career</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contact Us</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <h4
                    data-toggle="collapse"
                    data-target="#collapseTwoft"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    className="mobclick collapsed"
                  >
                    Other Links
                    <i className="fal fa-plus" /> <i className="fal fa-minus" />
                  </h4>
                  <h4>Courses &amp; Scholarships</h4>
                  <div
                    id="collapseTwoft"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample2"
                  >
                    <ul>
                      <li>
                        <a href="#advt">Why EdXplore</a>
                      </li>
                      <li>
                      <li>
                        <a href="/partner-with-us">Partner with Us</a>
                      </li>
                       
                      </li>
                      <li>
                      <a href='/advertise'>
                         Advertise with us
                        </a>
                      </li>
                      <li>
                        <a href='/faqsoon'>FAQ's </a>
                      </li>
                      <li>
                        <a href='/terms'>Terms of Use</a>
                      </li>
                      <li>
                        <a href='/privacy'>Privacy Policy</a>
                      </li>
                      <li>
                        <a href='/refund'>Refund Policy</a>
                      </li>
                      
                     
                    </ul>
                  </div>
                </div>
            
            <div className="col-lg-3 col-md-3">
              <div className="ftad">
              <h4>Contact Us</h4>

                <p>
                6th Floor, The High Street, 62, 11th Main Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560011
                </p>
                <a href="tel:+91-9945580134"> +91-9945580134</a>
                <a href="mailto:info@edxplore.com.com">
                  info@edxplore.com
                </a>
                <br/>
                <p style={{marginBottom:0}}>Follow Us!</p>
                 </div>
                 <div className="col-lg-3 col-md-3 sclics">
                  
                  
                  <ul className='iconleft'>
                
                    <li>
                      <a className='icontbottom' href="https://www.facebook.com/Edxploreofficial">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a  className='icontbottom' href="https://twitter.com/EdxploreS">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a  className='icontbottom' href="https://www.instagram.com/edxploreofficial/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a   className='icontbottom' href="https://www.linkedin.com/company/edxplore/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a   className='icontbottom' href="https://www.youtube.com/channel/UC6bVcA9_BrndANhDg9LQrIg">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
            <h4>Location</h4>
            <iframe  className="ftaddrs" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.691407765851!2d77.5861455!3d12.9275447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1569f3345d4d%3A0x6ae7f2604f396d9b!2sEdXplore!5e0!3m2!1sen!2sin!4v1662092040312!5m2!1sen!2sin"  style={{ border: 0 }}
                allowFullScreen
                loading="lazy" />
          
            </div>
            
               

              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="mobileiconpanel">
        <ul>
          <li>
          <Link href="/">

            <a>
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/homeic.png`} />
              <span>
                Home
                
              </span>
            </a>
            </Link>

          </li>
          <li>
          <Link href="/courses">
            <a>
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/allcourses.png`} />
              <span>
                All Courses
                
              </span>
            </a>
            </Link>
          </li>
          <li>
          <Link href="/partner-with-us">

            <a>
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/becomept.png`} />
              <span>
                Become a partners
               
              </span>
            </a>
            </Link>

          </li>
          <li>
          <Link href="/contact-us">

            <a>
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/contico.png`} />
              <span>
                Contact
               
              </span>
            </a>
            </Link>

          </li>
        </ul>
      </section>
    </>
  )
}

export default Footer
