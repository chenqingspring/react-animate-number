(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactAnimateNumber = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});