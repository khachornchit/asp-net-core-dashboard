var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super.call(this) || this;
        _this.state = { currentCount: 0 };
        return _this;
    }
    Counter.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", null,
                "Current count: ",
                React.createElement("strong", null, this.state.currentCount)),
            React.createElement("button", { onClick: function () { _this.incrementCounter(); } }, "Increment"));
    };
    Counter.prototype.incrementCounter = function () {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    };
    return Counter;
}(React.Component));
export { Counter };
//# sourceMappingURL=Counter.js.map