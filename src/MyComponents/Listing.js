import React from 'react';

export const Listing = ({ list }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <h4>{list.title}</h4>
        <p>{list.desc}</p>
      </div>
      {list.image && <img src={list.image} alt="listing" 
      style={{ width: '500px', height: '500px', marginLeft: '600px' }} />}
    </div>
  );
};