import React from "react";

const Card = ({ value }) => {
  const { name, live } = value;
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{live}</h6>
          <p className="card-text">
            {name} is a good boy. he lives in {live}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
