var JSX = require('node-jsx').install(),
	React = require('react'),
	MyComponent = React.createFactory(require('./components/MyComponent.react'));


module.exports = {

	index: function (req, res) {

		var msg = 'Hello, World!';

		var markup = React.renderToString(
			MyComponent({msg: msg})
		);

		res.render('home', {
			markup: markup,
			state: JSON.stringify(msg)
		});

	}

};