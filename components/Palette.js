const Palette = () => {
  return (
    <div className="palette">
      <style jsx>
        {`
          .palette {
            margin-top: 1rem;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
            height: 30%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
          }
        `}
      </style>
    </div>
  );
};

export default Palette;
