import React from 'react';

export default function Loader({ type }) {
  if (type === 'search') {
    return <div className="search-loader"></div>;
  } else {
    return (
      <div className="loader-container">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
}
