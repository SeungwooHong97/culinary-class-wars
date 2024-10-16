"use client";

import { Restaurant, Review } from "@/types/info";
import React, { useState } from "react";

import { ReviewList } from "./ReviewList";
import ReviewInput from "./ReviewInput";

const Reviews = ({ rest }: { rest: Restaurant }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  return (
    <div className=" m-10">
      <ReviewInput rest={rest} reviews={reviews} setReviews={setReviews} />
      <ReviewList rest={rest} reviews={reviews} setReviews={setReviews} />
    </div>
  );
};

export default Reviews;
