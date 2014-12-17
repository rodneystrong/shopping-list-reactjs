/** @jsx React.DOM */
/*create the component and then render it */
var ShopList = React.createClass({displayName: 'ShopList',
	getInitialState: function() {
		return {
			list: [
				{text: "A dress I will wear only once"},
				{text: "Louboutin shoes"}
			]
		}
	},
	addItem: function(e) {
		//checking the keyboard button code
		console.log(e.keyCode);
		if(e.keyCode==13) {
			var list = this.state.list;
			list.unshift({text: e.target.value});
			this.setState({list: list});
		}
	},
	render: function() {
		return (
			React.DOM.div({className: "container"}, 
		        React.DOM.div({className: "row"}, 
		          React.DOM.div({className: "col-lg-8 col-md-8 col-sm-12 center-block"}, 
		            React.DOM.input({onKeyDown: this.addItem, type: "text", id: "the-input", className: "form-control input-lg", placeholder: "Type here then press enter!"})
		          )
		        ), 
		    	ListContainer({list: this.state.list})
		    ) /*.container*/
		)
	}
});

//this contains the html for all the list items
var ListContainer = React.createClass({displayName: 'ListContainer',
	renderList: function() {
		return (
			this.props.list.map(function(item) { /*item is an arbitrary name we gave for this paramter*/
				return (
					ListItem({text: item.text})
				)
			})
		)
	},
	render: function() {
		return (
			React.DOM.div({className: "row"}, 
			  React.DOM.div({className: "col-lg-7 col-md-7 col-sm-8 center-block"}, 
			    React.DOM.div({id: "list-items"}, 
			    	this.renderList()
			    ), " "/* #list-items */
			  )
			)
		)
	}
});

//this contains the html for the individual list items
var ListItem = React.createClass({displayName: 'ListItem',
	render: function() {
		return (
			React.DOM.div({className: "checkbox m-bot"}, 
			  React.DOM.span({className: "close-button"}, React.DOM.i({className: "fa fa-close"})), 
			  React.DOM.label({className: "item-width"}, 
			    React.DOM.input({className: "check", type: "checkbox", value: ""}), 
			    	this.props.text, " "/* right here, how does it know where to go to find this prop? */
			  )
			)
		)
	}
});

React.render (
	ShopList(null),
	document.getElementById('react-component')
);