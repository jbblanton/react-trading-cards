"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        This is my AMAZING card collection!
        
        <a href="/cards.html">Cards Page</a>
       
        <img src="/static/img/balloonicorn.jpg" 
          alt="A pink stuffed unicorn toy" />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
