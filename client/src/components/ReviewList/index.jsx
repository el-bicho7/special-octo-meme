const ReviewList = ({ reviews = [] }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <>
      <h3 className="p-5 display-inline-block text-2xl"
        style={{ borderBottom: "3px dotted #1a1a1a" }}>
        Reviews
      </h3>
      <div className="flex-row my-4">
        {reviews &&
          reviews.map((review) => (
            <div key={review._id} className="col-12 mb-3 card bg-accent mx-7">
              <div className="p-3 card-body">
                <div className="card-title flex justify-between">
                  <p className="text-secondary">
                  👤 {review.reviewAuthor} reviewed{" "}
                  </p>

                  <div className="w-fit" >
                    {Array.from(Array(review.reviewRating)).map(_ => <>⭐</>)}
                  </div>
                </div>
                <span style={{ fontSize: "0.825rem", fontStyle: 'italic' }}>
                  on {review.createdAt}
                </span>
                <p className="text-black m-2 ">{review.reviewText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewList;
