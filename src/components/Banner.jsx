function Banner({ banniere, texte }) {
  return (
    <div className="banner">
      <img src={banniere} alt="Bannière Kasa" />
      <h1>{texte}</h1>
    </div>
  );
}
export default Banner;
