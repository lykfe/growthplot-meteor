Navigation = React.createClass({
  render() {
    return (
    	<div id="navigation-bar">
         <div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
		  <div className="container">
		   <div className="navbar-header">
		    <a className="navbar-toggle"> 
		      <span className="sr-only">Toggle navigation</span>
		      <span className="icon-bar"></span>
		      <span className="icon-bar"></span>
		      <span className="icon-bar"></span>
		     </a>
		   <div class ="img-container">
		    <a className="navbar-brand" href="#"><img src="/img/assets/LogoWhite(NavBar).png" /></a>
		  </div>
		   </div>
		   <div id="slidemenu">
		    <ul className="nav navbar-nav">
		     <li> <div className="img-container2"><img src="/img/assets/LogoWhite(NavBar).png" /></div></li>
		     <li><a href="/">Home</a></li>
		     <li><a href="/about">About</a></li>

		     {/*{% if not user.is_authenticated %}*/}
		     <li><a href="/register">Register</a></li>
		     {/*{% endif %}*/}

		   	 {/*{% if user.is_authenticated %}*/}
		   	 <li><a href="/child">Add Child</a></li>
		   	 <li><a href="/profile">Growth Charts</a></li>
		     <li><a href="/logout">Logout</a></li>
		     {/*{% endif %}*/}

		    </ul>
		          
		   </div>
		  </div>
		 </div>
		</div>
    );
  }
});