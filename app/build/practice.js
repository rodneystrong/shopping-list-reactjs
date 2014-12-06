/** @jsx React.DOM */
/*create the component and then render it */
var ShopList = React.createClass({displayName: 'ShopList',
	render: function() {
		return (
			React.DOM.div({className: "container"}, 
		        React.DOM.div({className: "row"}, 
		          React.DOM.div({className: "col-lg-8 col-md-8 col-sm-12 center-block"}, 
		            React.DOM.input({type: "text", id: "the-input", className: "form-control input-lg", placeholder: "Type here then press enter!"})
		          )
		        ), 
		    	ListContainer(null)
		    ) //.container
		)
	}
});

//this contains the html for all the list items
var ListContainer = React.createClass({displayName: 'ListContainer',
	render: function() {
		return (
			React.DOM.div({className: "row"}, 
			  React.DOM.div({className: "col-lg-7 col-md-7 col-sm-8 center-block"}, 
			    React.DOM.div({id: "list-items"}, 
			    	ListItem(null)
			    ), " "/* #list-items */
			  )
			)
		)
	}
});

//this contains the html for 
var ListItem = React.createClass({displayName: 'ListItem',
	render: function() {
		return (
			React.DOM.div({className: "checkbox m-bot"}, 
			  React.DOM.span({className: "close-button"}, React.DOM.i({className: "fa fa-close"})), 
			  React.DOM.label({className: "item-width"}, 
			    React.DOM.input({className: "check", type: "checkbox", value: ""}), 
			    "A dress that I will only wear once"
			  )
			)
		)
	}
});

React.render (
	ShopList(null),
	document.getElementById('react-component')
);