/** @jsx React.DOM */
var ShopList = React.createClass({
	getInitialState: function() {
		return {
			lists: [
				{text: "default whatever"},
				{text: "user-input"}
					],
		}
	},
	addItem: function(e) {
		//checking for what each keypress code is
		//console.log(e.keyCode);
		if (e.keyCode==13) {
			var lists = this.state.lists;
			lists.unshift({text: e.target.value});
			this.setState({lists: lists});
		}
	},
	render: function() {
		return (
			<div className="container">
			  <div className="row">
			    <div className="col-lg-8 col-md-8 col-sm-12 center-block">
			      <input onKeyDown={this.addItem} type="text" id="the-input" className="form-control input-lg" placeholder="Type here then press enter!" />
			    </div>
			  </div>
			  <ListContainer lists={this.state.lists} />
			</div>
		)
	}
});

var ListContainer = React.createClass({
	renderLists: function() {
		//this is a looping function (map) that will go through the 'lists' array for you
		return this.props.lists.map(function(list) {
			return (
				<ListItem text={list.text} />
			)
		}) 
	},
	render: function() {
		return (
			<div className="row">
			  <div className="col-lg-7 col-md-7 col-sm-8 center-block">
			    <div id="list-items">
			    	{this.renderLists()}
			    </div>
			  </div>
			</div>
		)
	}
});

var ListItem = React.createClass({
	render: function() {
		return (
			<div className="checkbox m-bot">
			  <span className="close-button"><i className="fa fa-close"></i></span>
			  <label className="item-width">
			    <input className="check" type="checkbox" value="" />
			    {this.props.text}
			  </label>
			</div>
		)
	}
})

React.render(
  <ShopList />,
  document.getElementById('react-component')
);