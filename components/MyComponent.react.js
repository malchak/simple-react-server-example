/** @jsx React.DOM */

var React = require('react');


module.exports = MyComponent = React.createClass({

	getInitialState: function(props) {
		props = props || this.props;

		return {
			msg: props.msg
		};
	},

	componentWillReceiveProps: function (newProps, oldProps) {
		this.setState(this.getInitialState(newProps));
	},

	render: function() {
		return (
			<div className="container">
				<h1>{this.state.msg}</h1>
			</div>
		)
	}

});