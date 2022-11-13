"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Names = void 0;
var React = require("react");
var unique_names_generator_1 = require("unique-names-generator");
var Names_less_1 = require("Names.less");
;
var Names = /** @class */ (function (_super) {
    __extends(Names, _super);
    function Names(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            adjective: _this.generateWord(unique_names_generator_1.adjectives),
            starWarsWord: _this.generateWord(unique_names_generator_1.starWars)
        };
        return _this;
    }
    Names.prototype.componentDidMount = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.setState({
                adjective: _this.generateWord(unique_names_generator_1.adjectives)
            }),
                2000;
        });
        setTimeout(function () {
            clearInterval(interval);
        }, 6000);
    };
    Names.prototype.render = function () {
        return (React.createElement("h1", { className: Names_less_1["default"].words },
            React.createElement(Adjective, { adjective: this.state.adjective }),
            '\u00A0',
            React.createElement(StarWarsWord, { starWarsWord: this.state.starWarsWord })));
    };
    Names.prototype.generateWord = function (dictionary) {
        var defaultGeneratorConfig = {
            length: 1,
            dictionaries: []
        };
        return (0, unique_names_generator_1.uniqueNamesGenerator)(Object.assign({}, defaultGeneratorConfig, { dictionaries: [dictionary] }));
    };
    return Names;
}(React.Component));
exports.Names = Names;
var Adjective = /** @class */ (function (_super) {
    __extends(Adjective, _super);
    function Adjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adjective.prototype.render = function () {
        console.log('==========================');
        console.log('>> Adjective is printing');
        return (React.createElement("span", null, this.props.adjective));
    };
    return Adjective;
}(React.Component));
var StarWarsWord = /** @class */ (function (_super) {
    __extends(StarWarsWord, _super);
    function StarWarsWord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarWarsWord.prototype.render = function () {
        // console.log('==========================');
        console.log('>> Star Wars Word is printing');
        return (React.createElement("span", null, this.props.starWarsWord));
    };
    return StarWarsWord;
}(React.Component));
