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

        number && this.animate(number, speed);
    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.timer);
    },

    animate: function animate(number, speed) {
        this.timer = setInterval((function () {
            if (this.state.number < number) {
                this.setState({ number: this.state.number + 1 });
            } else {
                clearInterval(this.timer);
            }
        }).bind(this), speed);
    },

    render: function render() {
        var displayNumber = this.state.number;
        return React.createElement(
            'span',
            null,
            displayNumber
        );
    }

});

exports['default'] = ReactAnimateNumber;
module.exports = exports['default'];