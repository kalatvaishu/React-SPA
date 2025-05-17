
const Contact =()=>{
  return(
    <>
    <div className="container mb-5 ">
      <div className="row text-center">
        <h1 className="mt-5">Contact Us</h1>
        <p className="mb-5">Email us with any questions or inquirees or call 5187-would be happy <br/> to answer your questionsn and set up a meeting with you. Black <br />Sheep web Design can help set you apart from the flock!</p>
        <div className="col" >
        <form >
        
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Enter Your Full Name</label>
        </div>
        
        
        <div data-mdb-input-init className="form-outline mb-3">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Enter Mobile Number</label>
        </div>
        <div data-mdb-input-init className="form-outline mb-3">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Email address</label>
        </div>
        
        
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"  id="form2Example34"/>
              <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
            </div>
          </div>
          
        <div className="col">
        
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        
        
        <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
        
        
        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>
        
          <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>
        
          <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>
        
          <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
        </form>
        </div>
        <div className="col">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790405!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743075500262!5m2!1sen!2sin" width="700" height="450"loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>

        </div>
      </div>
    </div>
    </>
  )
}
    export default Contact






   

    