var React = require('react');
var ReactDOM = require('react-dom');
var ReactAnimateNumber = require('react-animate-number');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactAnimateNumber number={10000} speed={100}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
