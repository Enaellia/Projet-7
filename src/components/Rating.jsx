import "./Rating.css";

function Rating({ rating }) {
  const totalStars = 5;
  const filledStars = parseInt(rating);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < filledStars ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
