/** @jsx React.DOM */
/*create the component and then render it */
var ShopList = React.createClass({
	render: function() {
		return (
			<div className="container">
		        <div className="row">
		          <div className="col-lg-8 col-md-8 col-sm-12 center-block">
		            <input type="text" id="the-input" className="form-control input-lg" placeholder="Type here then press enter!" />
		          </div>
		        </div>
		    	<ListContainer />    
		    </div> //.container
		)
	}
});

//this contains the html for all the list items
var ListContainer = React.createClass({
	render: function() {
		return (
			<div className="row">
			  <div className="col-lg-7 col-md-7 col-sm-8 center-block">
			    <div id="list-items">
			    	<ListItem />
			    </div> {/* #list-items */}
			  </div> 
			</div>
		)
	}
});

//this contains the html for 
var ListItem = React.createClass({
	render: function() {
		return (
			<div className="checkbox m-bot">
			  <span className="close-button"><i className="fa fa-close"></i></span>
			  <label className="item-width">
			    <input className="check" type="checkbox" value="" />
			    A dress that I will only wear once
			  </label>
			</div>
		)
	}
});

React.render (
	<ShopList />,
	document.getElementById('react-component')
);