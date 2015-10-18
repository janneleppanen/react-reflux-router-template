(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var ChildBox = require('./child-box');

var BoxContainer = React.createClass({
    displayName: "BoxContainer",

    render: function render() {
        return React.createElement(
            "div",
            { className: "box" },
            "Hello, world! I am a Box.",
            React.createElement(ChildBox, null)
        );
    }
});

module.exports = BoxContainer;

},{"./child-box":2}],2:[function(require,module,exports){
"use strict";

var ChildBox = React.createClass({
    displayName: "ChildBox",

    render: function render() {
        return React.createElement(
            "div",
            null,
            "Hi, I am just a child box."
        );
    }
});

module.exports = ChildBox;

},{}],3:[function(require,module,exports){
'use strict';

var BoxContainer = require('./box');

ReactDOM.render(React.createElement(BoxContainer, null), document.getElementById('content'));

},{"./box":1}]},{},[3]);

//# sourceMappingURL=app.build.js.map
