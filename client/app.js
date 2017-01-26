
var Link = require('react-router').Link
var React = require('react')

var App = React.createClass({
  render: function () {
    return <div className="app">
      <div id = "appId_header" className="app_header">
        <img src="logo.png" className="app_logo"/>
        <span className="app_title">Hexo Admin</span>
        <ul className="app_nav">
          <li><Link to="posts">Posts</Link></li>
          <li><Link to="pages">Pages</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="deploy">Deploy</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </div>
      <div id="appId_main" className="app_main">
        <this.props.activeRouteHandler/>
      </div>
    </div>;
  }
})

module.exports = App
