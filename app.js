/** @jsx React.DOM */

var React = require('react');
var MyComponent = require('./components/MyComponent.react');

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the top level component.
React.render(
	<MyComponent msg={initialState} />
	document.getElementById('react-app');
);