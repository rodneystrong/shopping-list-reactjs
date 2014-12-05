var myInput = React.createClass({
	render: function() {
		return (
			<div className="container">
			  <div className="row">
			    <div className="col-lg-8 col-md-8 col-sm-12 center-block">
			      <input type="text" id="the-input" className="form-control input-lg" placeholder="Type here then press enter!">
			    </div>
			  </div>
			  <div className="row">
			    <div className="col-lg-7 col-md-7 col-sm-8 center-block">
			      <div id="list-items">
			        <div className="checkbox m-bot">
			          <span className="close-button"><i className="fa fa-close"></i></span>
			          <label className="item-width">
			            <input className="check" type="checkbox" value="">
			            A dress that I will only wear once
			          </label>
			        </div>
			        <div className="checkbox m-bot">
			          <span className="close-button"><i className="fa fa-close"></i></span>
			          <label className="item-width">
			            <input className="check" type="checkbox" value="">
			            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children.
			          </label>
			        </div>
			        <div className="checkbox m-bot">
			          <span className="close-button"><i className="fa fa-close"></i></span>
			          <label className="item-width">
			            <input className="check" type="checkbox" value="">
			            Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
			          </label>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
});

React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('react-component')
);