import PropTypes from "prop-types";

const RatingStars = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxStars - filledStars;

  return (
    <div className='flex items-center'>
      {[...Array(filledStars)].map((_, index) => (
        <span key={`filled-${index}`} className='text-yellow-500'>
          ⭐
        </span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className='text-gray-300'>
          ⭐
        </span>
      ))}
      <p className='ml-2 text-lg'>{rating.toFixed(1)}</p>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
