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

var ListContainer = React.createClass({displayName: 'ListContainer',
	render: function() {
		return (
			React.DOM.div({className: "row"}, 
			  React.DOM.div({className: "col-lg-7 col-md-7 col-sm-8 center-block"}, 
			    React.DOM.div({id: "list-items"}, 
			      React.DOM.div({className: "checkbox m-bot"}, 
			        React.DOM.span({className: "close-button"}, React.DOM.i({className: "fa fa-close"})), 
			        React.DOM.label({className: "item-width"}, 
			          React.DOM.input({className: "check", type: "checkbox", value: ""}), 
			          "A dress that I will only wear once"
			        )
			      ), 
			      React.DOM.div({className: "checkbox m-bot"}, 
			        React.DOM.span({className: "close-button"}, React.DOM.i({className: "fa fa-close"})), 
			        React.DOM.label({className: "item-width"}, 
			          React.DOM.input({className: "check", type: "checkbox", value: ""}), 
			          "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children."
			        )
			      ), 
			      React.DOM.div({className: "checkbox m-bot"}, 
			        React.DOM.span({className: "close-button"}, React.DOM.i({className: "fa fa-close"})), 
			        React.DOM.label({className: "item-width"}, 
			          React.DOM.input({className: "check", type: "checkbox", value: ""}), 
			          "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"
			        )
			      )
			    )
			  )
			)
		)
	}
})

React.render(
  ShopList(null),
  document.getElementById('react-component')
);