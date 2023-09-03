import React from "react";

const EmptyCard = (props) => {
  const { title } = props;
  return (
    <div className="text-center">
      <h4 className="section-heading mb-0">{title}</h4>
    </div>
  );
};

export default EmptyCard;
