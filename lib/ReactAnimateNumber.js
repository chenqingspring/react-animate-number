'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var ReactAnimateNumber = React.createClass({
	displayName: 'ReactAnimateNumber',
	getInitialState: function getInitialState() {
		return { number: 0 };
	},
	componentDidMount: function componentDidMount() {
		var _props = this.props;
		var number = _props.number;
		var speed = _props.speed;
		var float = _props.float;
		var startNumber = _props.startNumber;
		number && this.animate(number, speed, float, startNumber);
	},
	componentWillUnmount: function componentWillUnmount() {
		clearInterval(this.timer);
	},
	animate: function animate(number, speed, float, startNumber) {
		if (startNumber > number) {
			this.setState({ number: startNumber });
			this.timer = setInterval((function () {
				if (this.state.number > number) {
					if (float) {
						this.setState({ number: this.state.number - 0.01 });
					} else {
						this.setState({ number: this.state.number - 1 });
					}
				} else {
					clearInterval(this.timer);
				}
			}).bind(this), speed);
		} else {
			this.timer = setInterval((function () {
				if (this.state.number < number) {
					if (float) {
						this.setState({ number: this.state.number + 0.01 });
					} else {
						this.setState({ number: this.state.number + 1 });
					}
				} else {
					clearInterval(this.timer);
				}
			}).bind(this), speed);
		}
	},
	render: function render() {
		var displayNumber = this.props.float ? this.state.number.toFixed(2) : this.state.number;
		return React.createElement(
			'span',
			null,
			displayNumber
		);
	}
});
exports['default'] = ReactAnimateNumber;
module.exports = exports['default'];
