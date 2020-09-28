import React from "react";

function Member({ name, img, work }) {
  return (
    <div className='member'>
      <img src={img} />
      <div className='member__info'>
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default Member;
