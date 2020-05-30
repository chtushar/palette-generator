import Palette from "./Palette";

const Photo = ({ item }) => {
  return (
    <div className="photo">
      <img src={item.link}></img>
      <Palette />
      <style jsx>{`
        .photo {
          width: 400px;
          height: 380px;
          margin: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
        img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Photo;
