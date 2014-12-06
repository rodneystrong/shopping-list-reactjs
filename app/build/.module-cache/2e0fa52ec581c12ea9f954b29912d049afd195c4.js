/** @jsx React.DOM */
var ShopList = React.createClass({displayName: 'ShopList',
	getInitialState: function() {
		return {
			lists: [
				{text: "user-input"},
				{text: "user-input"}
					],
		}
	},
	render: function() {
		return (
			React.DOM.div({className: "container"}, 
			  React.DOM.div({className: "row"}, 
			    React.DOM.div({className: "col-lg-8 col-md-8 col-sm-12 center-block"}, 
			      React.DOM.input({type: "text", id: "the-input", className: "form-control input-lg", placeholder: "Type here then press enter!"})
			    )
			  ), 
			  ListContainer(null)
			)
		)
	}
});

React.render(
  ShopList(null),
  document.getElementById('react-component')
);