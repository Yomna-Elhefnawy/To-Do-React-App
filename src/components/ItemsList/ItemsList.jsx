import React, { Component } from "react";

const ItemsList = props => {
  const { items, deleteItem } = props;

  const ListItems = items.map(item => {
    return (
      <div key={item.id} className="item-content">
        <span>{item.name}</span>
        <span>{item.age}</span>
        <span onClick={() => deleteItem(item.id)} className="x">
          X
        </span>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="item-header">
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>

      {items.length < 1 ? (
        <p className="nothing">no thing to show</p>
      ) : (
        ListItems
      )}
    </div>
  );
};

export default ItemsList;
