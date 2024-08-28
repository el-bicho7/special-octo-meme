const ReviewList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        Reviews
      </h3>
      <div className="flex-row my-4">
        {reviews &&
          reviews.map((review) => (
            <div key={review._id} className="col-12 mb-3 pb-3 p-8">
              <div className="p-3 bg-accent">
                <h5 className="card-header text-sky-800">
                  {review.reviewAuthor} reviewed{" "}
                </h5>
                <span style={{ fontSize: "0.825rem" }}>
                  on {review.createdAt}
                </span>
                <p className="card-body text-black">{review.reviewText}</p>
                <span style={{ fontSize: "0.825rem" }}>
                  rating: {review.reviewRating}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewList;
