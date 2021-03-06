/** @jsx React.DOM */
var ShopList = React.createClass({
	render: function() {
		return (
			  <ListContainer />
		)
	}
});

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			lists: [
				{text: "default whatever"},
				{text: "user-input"}
					],
		} /*right here we're returning an object with 'list' as the key. important to remember here. */
	},
	componentDidUpdate: function(prevProps,prevState){
		if(this.state.lists != prevState.lists){
			//ajax update
		}
	},
	addItem: function(item) {
		//checking for what each keypress code is
		//console.log(e.keyCode);
		var lists = this.state.lists;
		lists.unshift({text: item.text});
		this.setState({lists: lists}); /*because we returned 'list' as an object above in the 'getInitialState' function, we're setting its state in object notation here*/
	},
	removeItem: function(index) {
		var lists = this.state.lists;
		lists.splice(index,1);
		this.setState({lists: lists});
	},
	renderLists: function() {
		var self = this; //doing this because we can't use 'this' inside the map function because of function scope. map is a function inside the 'renderLists' function
		//this is a looping function (map) that will go through the 'lists' array for you
		return this.state.lists.map(function(list, index) {
			return (
				<ListItem key={index} text={list.text} index={index} removeItem={self.removeItem} />
			)
		}) 
	},
	render: function() {
		return (
			<div className="container">

				<CreateItem addItem={this.addItem} />

				<div className="row">
				  <div className="col-lg-7 col-md-7 col-sm-8 center-block">
				    <div id="list-items">
				    	{this.renderLists()}
				    </div>
				  </div>
				</div>
			</div>
		)
	}
});

var CreateItem = React.createClass({
	sendItem: function(e){
		if (e.keyCode==13) {
			this.props.addItem({text: e.target.value})	
		}
	},
	render: function(){
		return <div className="row">
	    <div className="col-lg-8 col-md-8 col-sm-12 center-block">
	      <input onKeyDown={this.sendItem} type="text" id="the-input" className="form-control input-lg" placeholder="Type here then press enter!" />
	    </div>
		</div>
	}
})

var ListItem = React.createClass({
	getInitialState: function() {
		return ({checked: false})
	},
	toggleCheck: function() {
		this.setState({checked: !this.state.checked}) /* huh?! */
	},
	removeItem: function() {
		//to verify the click
		//console.log("removeItem");
		//to verify the array index
		//console.log(this.props.index);
		/*in react you always work UP. You pass data from the bottom up; one-direction data flow is the react paradigm*/
		this.props.removeItem(this.props.index);

	},
	render: function() {

		return (
			<div className="checkbox m-bot">
			  <span onClick={this.removeItem} className="close-button"><i className="fa fa-close"></i></span>
			  <label className={this.state.checked ? "item-width strikethrough" : "item-width"}>
			    <input onClick={this.toggleCheck} className="check" type="checkbox" value="" />
			    {this.props.text}
			  </label>
			</div>
		)
	}
	//this is for if we don't want to use a ternary operator
	// render: function() {
	// 	var customClass = "item-width";
	// 	if(this.state.checked) {
	// 		customClass= "item-width strikethrough";
	// 	}
	// 	return (
	// 		<div className="checkbox m-bot">
	// 		  <span className="close-button"><i className="fa fa-close"></i></span>
	// 		  <label className={customClass}>
	// 		    <input onClick={this.toggleCheck} className="check" type="checkbox" value="" />
	// 		    {this.props.text}
	// 		  </label>
	// 		</div>
	// 	)
	// }
})

React.render(
  <ShopList />,
  document.getElementById('react-component')
);