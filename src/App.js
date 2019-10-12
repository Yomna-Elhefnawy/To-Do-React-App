import React, { Component } from "react";
import ItemList from "./components/ItemsList/ItemsList";
import AddItems from "./components/AddItems/AddItems";
import "./App.css";
class App extends Component {
  state = {
    items: []
  };
  addItem = item => {
    const itemAdded = this.state.items.push(item);
    item.id = Math.random() * 100;
    this.setState({ itemAdded });
  };
  deleteItem = id => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <ItemList items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
