/** @jsx React.DOM */
/*create the component and then render it */
var ShopList = React.createClass({
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
		//console.log(e.keyCode);
		if(e.keyCode==13) {
			var currentList = this.state.list;
			currentList.unshift({text: e.target.value});
			this.setState({list: currentList});
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
		    	<ListContainer list={this.state.list} />    
		    </div> //.container
		)
	}
});

//this contains the html for all the list items
var ListContainer = React.createClass({
	renderList: function() {
		return (
			this.props.list.map(function(item) {
				return (
					<ListItem text={item.text} /> 
				)
			})
		)
	},
	render: function() {
		return (
			<div className="row">
			  <div className="col-lg-7 col-md-7 col-sm-8 center-block">
			    <div id="list-items">
			    	{this.renderList()}
			    </div> {/* #list-items */}
			  </div> 
			</div>
		)
	}
});

//this contains the html for the individual list items
var ListItem = React.createClass({
	render: function() {
		return (
			<div className="checkbox m-bot">
			  <span className="close-button"><i className="fa fa-close"></i></span>
			  <label className="item-width">
			    <input className="check" type="checkbox" value="" />
			    	{this.props.text} {/* right here, how does it know where to go to find this prop? It's because we made the 'text' prop in the ListContainer component*/}
			  </label>
			</div>
		)
	}
});

React.render (
	<ShopList />,
	document.getElementById('react-component')
);