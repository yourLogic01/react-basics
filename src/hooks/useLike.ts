import { useState } from "react";

export const useLike = () => {
  const [like, setLike] = useState("Like 🤍");

  //   const handleLike = () => {
  //     if (like === "Like 🤍") {
  //       setLike("Liked ❤️");
  //     } else if (like === "Liked ❤️") {
  //       setLike("Like 🤍");
  //     }
  //   };

  //   const handleLike = () => {
  //     setLike(like === "Like 🤍" ? "Liked ❤️" : "Like 🤍");
  //   };

  const handleLike = () => {
    setLike((prev) => (prev === "Like 🤍" ? "Liked ❤️" : "Like 🤍"));
  };

  return {
    like,
    handleLike,
  };
};
