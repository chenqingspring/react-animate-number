var React = require('react');
var ReactDOM = require('react-dom');
var AnimateNumber = require('react-animate-number');

var App = React.createClass({
	render () {
		return (
			<div>
				<AnimateNumber number={10000} speed={100}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('number'));
