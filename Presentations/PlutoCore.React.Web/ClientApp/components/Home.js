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
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h1", null, "Hello, world!"),
            React.createElement("p", null, "Welcome to your new single-page application, built with:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: 'https://get.asp.net/' }, "ASP.NET Core"),
                    " and ",
                    React.createElement("a", { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' }, "C#"),
                    " for cross-platform server-side code"),
                React.createElement("li", null,
                    React.createElement("a", { href: 'https://facebook.github.io/react/' }, "React"),
                    " and ",
                    React.createElement("a", { href: 'http://www.typescriptlang.org/' }, "TypeScript"),
                    " for client-side code"),
                React.createElement("li", null,
                    React.createElement("a", { href: 'https://webpack.github.io/' }, "Webpack"),
                    " for building and bundling client-side resources"),
                React.createElement("li", null,
                    React.createElement("a", { href: 'http://getbootstrap.com/' }, "Bootstrap"),
                    " for layout and styling")),
            React.createElement("p", null, "To help you get started, we've also set up:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("strong", null, "Client-side navigation"),
                    ". For example, click ",
                    React.createElement("em", null, "Counter"),
                    " then ",
                    React.createElement("em", null, "Back"),
                    " to return here."),
                React.createElement("li", null,
                    React.createElement("strong", null, "Webpack dev middleware"),
                    ". In development mode, there's no need to run the ",
                    React.createElement("code", null, "webpack"),
                    " build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file."),
                React.createElement("li", null,
                    React.createElement("strong", null, "Hot module replacement"),
                    ". In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state."),
                React.createElement("li", null,
                    React.createElement("strong", null, "Efficient production builds"),
                    ". In production mode, development-time features are disabled, and the ",
                    React.createElement("code", null, "webpack"),
                    " build tool produces minified static CSS and JavaScript files.")),
            React.createElement("h4", null, "Going further"),
            React.createElement("p", null,
                "For larger applications, or for server-side prerendering (i.e., for ",
                React.createElement("em", null, "isomorphic"),
                " or ",
                React.createElement("em", null, "universal"),
                " applications), you should consider using a Flux/Redux-like architecture. You can generate an ASP.NET Core application with React and Redux using ",
                React.createElement("code", null, "dotnet new reactredux"),
                " instead of using this template."));
    };
    return Home;
}(React.Component));
export { Home };
//# sourceMappingURL=Home.js.map