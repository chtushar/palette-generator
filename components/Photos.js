import { useEffect, useState } from "react";

const Photos = ({ links }) => {
  return (
    <div>
      {links.map((el) => <img src={el.link} key={el.id}></img> || undefined)}
    </div>
  );
};

export default Photos;
