import bhaimg from '../src/assets/images/bharat-new-img2.jpeg'
import bhacv from '../src/assets/files/BharatCV.pdf'

const Firstsec=()=>{
    return(
        <>
        <section id="home-section" className="sec">
        <div className="home">
        <div className="text-white row justify-content-center my-5 pt-5">
		          		<div className="col-md-6 p-5">
                           <div className=''>
						   <span className="subheading">Hello!</span>
			            <h1 className="mb-4 mt-3">I'm <span className='color-orange'>Bharat Singh</span></h1>
			            <h2 className="mb-4">A Web Develpoer</h2>
                        <h2 className="mb-4">In Innovana Thinklabs Pvt Lmt.</h2>
			            <p><a href={bhacv} className="btn bg-orange text-white fw-bold py-3 px-3" downloads target='_blank'>Hire me</a> 
						{/* <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a> */}
						</p>
						   </div>
                        </div>
                        <div className="col-md-5 pe-5 text-center">
                            <img className='img-fluid logo-img' src={bhaimg} />
                        </div>
		            </div>
        </div>
		</section>
		<section id="about-section" className="sec py-5">
    				<div className="row justify-content-evenly py-5">
					<div className="col-md-6 order-md-0 order-1 pe-5 text-center ">
                            <img className='img-fluid logo-img' src={bhaimg} />
                        </div>
		          <div className="col-md-6 ms-md-0 ms-sm-5 ms-3 p-md-0 p-5 pe-md-5 mb-md-0 mb-5 text-white position-relative">
		          	<h1 className="big">About</h1>
		            <h2 className="mb-4">About Me</h2>
		            <p className='mt-5 font18'>A skilled developer proficiently crafts elegant code solutions to complex problems, driving innovation and efficiency in Web development.</p>
		            <ul className="about-info mt-4 px-md-0 px-2">
		            	<li className="d-flex"><span>Name:</span> <span>Bharat Singh</span></li>
		            	<li className="d-flex"><span>Date of birth:</span> <span>June 08, 2001</span></li>
		            	<li className="d-flex"><span>Address:</span> <span>b-6 Balaji Puram Alwatia Road, Agra</span></li>
		            	<li className="d-flex"><span>Zip code:</span> <span>282010</span></li>
		            	<li className="d-flex"><span>Email:</span> <span>amanyt007@gmail.com</span></li>
		            	<li className="d-flex"><span>Phone: </span> <span>8445899079</span></li>
		            </ul>
					<div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
              	<p className="mb-4">
	                <span className="number color-orange me-3 font18" data-number="120">0</span>
	                <span>Project complete</span>
                </p>
                <p><a href={bhacv} className="btn bg-orange text-white fw-bold py-3 px-3" downloads target='_blank'>Download CV</a></p>
              </div>
	          </div>
		          </div>


		        </div>
	         
	        
		</section>

		<section className="ftco-section py-5" id="resume-section">
    	<div className="container text-white">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate position-relative">
          	<h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p className="mt-5 font18">Experienced web developer proficient in front-end and back-end technologies, creating responsive and visually appealing websites that deliver seamless user experiences.</p>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-6">
    				<div className="resume-wrap ftco-animate">
    					<span className="date">2022-At Present</span>
    					<h2>Master of Computer Application</h2>
    					<span className="position">University of Technology</span>
    					<p className="mt-4">University of Technology is a prestigious institution dedicated to fostering innovation and academic excellence, offering a diverse range of programs that equip students with practical skills and knowledge for real-world challenges. Through cutting-edge research and dynamic teaching, it cultivates the next generation of professionals across various fields.</p>
    				</div>
    				
    				
    			</div>
				<div className="col-md-6">
				<div className="resume-wrap ftco-animate">
    					<span className="date">2019-2022</span>
    					<h2>Bachelor's in Computer Science</h2>
    					<span className="position">Dr. BR Ambedkar University</span>
    					<p className="mt-4">Dr. B.R. Ambedkar University stands as a tribute to social reformer Dr. B.R. Ambedkar, providing inclusive education and promoting social justice through its diverse academic offerings and commitment to empowerment. With a focus on marginalized communities, it strives to create an inclusive and equitable educational environment.</p>
    				</div>
				</div>

    			
    		</div>
    		
    	</div>
    </section>


	<section className="ftco-section" id="skills-section">
			<div className="container text-white py-5">
				<div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate position-relative">
          	<h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p className='mt-5 font18'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
				<div className="row">
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>React</h3>
							<div className="progress">
							 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}} >
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>Javascript</h3>
							<div className="progress">
							 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
							  	aria-valuemin="0"style={{width:"90%"}} aria-valuemax="100" >
							    <span>90%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>HTML5</h3>
							<div className="progress">
							 	<div className="progress-bar color-3" role="progressbar" style={{width:"95%"}} aria-valuenow="95"
							  	aria-valuemin="0" aria-valuemax="100" >
							    <span>95%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>CSS3</h3>
							<div className="progress">
							 	<div className="progress-bar color-4" style={{width:"90%"}} role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" >
							    <span>90%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>JQuery</h3>
							<div className="progress">
							 	<div className="progress-bar color-5" style={{width:"70%"}} role="progressbar" aria-valuenow="70"
							  	aria-valuemin="0" aria-valuemax="100" >
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>Shopify</h3>
							<div className="progress">
							 	<div className="progress-bar color-6" style={{width:"80%"}} role="progressbar" aria-valuenow="80"
							  	aria-valuemin="0" aria-valuemax="100" >	
							    <span>80%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>Dot net MVC</h3>
							<div className="progress">
							 	<div className="progress-bar color-6" style={{width:"80%"}} role="progressbar" aria-valuenow="80"
							  	aria-valuemin="0" aria-valuemax="100" >	
							    <span>80%</span>
							  	</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		 

		<section class="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div class="container text-white py-5">
      	<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate position-relative">
            <h1 class="big big-2">Contact</h1>
            <h2 class="mb-4">Contact Me</h2>
            <p className='font18 mt-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div class="row d-flex contact-info mb-5">
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box p-4 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
				  <i class="fa-solid fa-location-dot"></i>
          		</div>
          		<h3 class="mb-4">Address</h3>
	            <p><a href='https://goo.gl/maps/sLhaN6y5x3NJE8VPA' target='_blank'> B-6 Balaji Puram Alwatia Road, Agra</a></p>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box p-4 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
				  <i class="fa-regular fa-envelope"></i>
          		</div>
          		<h3 class="mb-4">Contact Number</h3>
	            <p><a href="tel://8445899079" target='_blank'>8445899079</a></p>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box p-4 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
				  <i class="fa-regular fa-envelope"></i>
          		</div>
          		<h3 class="mb-4">Email Address</h3>
	            <p><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amanyt007@gmail.com" target='_blank'>amanyt007@gmail.com</a></p>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box p-4 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
				  <i class="fa-brands fa-whatsapp"></i>
          		</div>
          		<h3 class="mb-4">whatsapp</h3>
	            <p><a href="https://wa.me/8445899079 " target='_blank'> 8445499079</a></p>
	          </div>
          </div>
        </div>

        <div class="row justify-content-center">
         

          <div class="col-md-6 mb-5 mb-md-0">
          	<div class="img">
			  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.287083228248!2d77.96246277459244!3d27.178712448610302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974777f0410c4ab%3A0x9a33b911d4b09165!2sAvikalp%20Classes%20Branch-2!5e0!3m2!1sen!2sin!4v1691169867436!5m2!1sen!2sin" width="100%" height="350" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
          </div>
		  <div className='col-md-6'>
			<div className='font18'><p>Address:</p> <p className='h3'>B-6 Balaji Puram Alwatia Road, Agra</p> </div>
			<p className='font18'>
				My sanctuary of comfort and belonging, where cherished memories are woven into the very fabric of its walls. It's a place where laughter, love, and growth flourish, offering solace in life's journey. 
			</p>
		  </div>
        </div>
      </div>
    </section>


	<footer id='footer-section' class="ftco-footer ftco-section">
      <div class="container py-md-5 pt-5 ps-md-0 ps-4">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2" >About</h2>
              <p className='font18' style={{opacity:".6"}}>Explore this section to uncover the essence of our identity and the story that drives our aspirations.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="ps-3" style={{opacity:".6"}}>
                <li><a href="#home-section"><span class="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#about-section"><span class="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="#resume-section"><span class="icon-long-arrow-right mr-2"></span>Resume</a></li>
                <li><a href="#skills-section"><span class="icon-long-arrow-right mr-2"></span>Skills</a></li>
                <li><a href="#contact-section"><span class="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Services</h2>
              <ul class="ps-3 ul-2" style={{opacity:".6"}}>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Design</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Shopify</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Dot net MVC</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3" style={{opacity:".6"}}>
	              <ul className='ps-3'>
	                <li><span class="icon icon-map-marker"></span><span class="text">B-6 Balaji Puram Alwatia Road, Agra</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">8445899079</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">amanyt007@gmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
       
      </div>
    </footer>

        </>
    );
}
export default Firstsec;