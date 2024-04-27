import Footer from "./Footer";
import Navbar from "./Navbar";
function Home()
{

  

    




    return(
        <>
        <Navbar/>
     
        <div className="netflix">
 	<div className="netflix_c1">
 		<img src="img/netflix.jpg" alt="netflix"/>
 	</div>
 	<div className="netflix_bg">
 		
 	</div>

 	<div className="netflix_content"> 	
      <h2>Unlimited movies, TV shows and more</h2>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
     <p>
      <input type="text" name=" " placeholder="Email or phone number"/> 
      <span className="button">Get Started </span>
     </p>
 	</div>
 </div>


<div className="enjoy">
	<div className="enjoy_c1">
		<h2>Enjoy on your TV</h2>
		<p>Watch on smart TVs, PlayStation, Xbox, <br/>Chromecast, Apple TV, Blu-ray players and more.</p>
	</div>
	<div className="enjoy_c2">
		<img src="img/tv.png"/>
	</div>
</div>



<div className="enjoy offline">
	<div className="enjoy_c1">
		<h2>Enjoy on your TV</h2>
		<p>Watch on smart TVs, PlayStation, Xbox, <br/>Chromecast, Apple TV, Blu-ray players and more.</p>
	</div>
	<div className="enjoy_c2">
		<img src="img/offline.jpg"/>
	</div>
</div>


<div className="enjoy">
	<div className="enjoy_c1">
		<h2>Watch everywhere</h2>
		<p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
	</div>
	<div className="enjoy_c2">
		<img src="img/everywhere.png"/>
	</div>
</div>


<div className="enjoy offline">
	<div className="enjoy_c1">
		<h2>Create profiles for kids</h2>
		<p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
	</div>
	<div className="enjoy_c2">
		<img src="img/childreen.png"/>
	</div>
</div>




<div className="faq">
  
  <div className="faq_c2">
<div className='d-display'>
<div className="d-display_c1">
  <div className='d-details'>
  	<h2>FAQS - Frequently Ashked Question</h2>
    <details className='tab-control'>
      <summary>What is Netflix?</summary>
      <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
</p>
    </details>
    <details className='tab-control'>
      <summary>How much does Netflix cost?
      </summary>
      <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
    </p>
    </details>

    <details className='tab-control'>
      <summary>Where can I watch?
</summary>
      <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
</p>
    </details>
    <details className='tab-control'>
      <summary>How do I cancel?
</summary>
      <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
    </details>
    <details className='tab-control'>
      <summary>What can I watch on Netflix? 
      </summary>
      <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
     </p>
    </details>
    <details className='tab-control'>
      <summary>Is Netflix good for kids?
      </summary>
      <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
     </p>
    </details>
   
  </div>
</div>
 
</div>
</div>
</div>

<div className="ready">
	<div className="ready_c1">
		<p>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
     <p>
      <input type="text" name=" " placeholder="Email or phone number"/> 
      <span className="button">Get Started </span>
     </p>
	</div>
</div>

     
       

            <Footer/>
        </>
    )
    
}
export default Home;