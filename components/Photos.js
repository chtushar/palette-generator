function Photos() {
  let links = [];
  let random = Math.round(100 * Math.random());
  for (let i = 0; i < 10; i++) {
    links.push({
      link: `https://i.picsum.photos/id/${300 + random + i}/400/225.jpg`,
      id: 150 + 1 + i,
    });
  }

  return (
    <div>
      {links.map((el) => (
        <img src={el.link} key={el.id}></img>
      ))}
    </div>
  );
}

export default Photos;
