var React = require('react');

//var About = React.createClass({
//  render: function () {
//    return (
//      <h3>About Component</h3>
//    );
//  }
//});

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built on React for the Udemy Course.
      </p>
      <p>
        Here are some of the development tools utilized:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the
            JavaScript user interface library used as a foundation.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This is
            the tool used to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
