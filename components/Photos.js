import { useEffect, useState } from "react";
import Photo from "./Photo";

const Photos = ({ links }) => {
  return (
    <div className="photos">
      {links.map((el) => (
        <Photo item={el} key={el.id} />
      ))}

      <style jsx>{`
        .photos {
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Photos;
