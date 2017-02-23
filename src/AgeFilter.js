import React from 'react';

var AgeFilter = React.createClass({
  getInitialState: function () {
    return (
      {
        filterage: 30
      }
    );
  },
  filteredPeople: function () {
    var self = this;
    var list = this.props.people.filter(function (item) {
      return item.age >= self.state.filterage;
    }).map(function (item) {
      return (<li>{item.name}</li>);
    });
    console.log(list);
    return list;
  },
  onChangeHandler: function (value) {
    this.setState({filterage: value});
  },
  render: function () {
    return (
      <div>
        <ul>
          {this.filteredPeople()}
        </ul>
        <input type="text" value={this.state.filterage} onChange={(event) => this.onChangeHandler(event.target.value)} />
      </div>
    );
  }
});

export default AgeFilter;
