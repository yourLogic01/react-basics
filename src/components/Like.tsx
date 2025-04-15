import { useLike } from "../hooks/useLike";
const Like = () => {
  const { like, handleLike } = useLike();
  return (
    <div style={{ padding: "16px 48px" }}>
      <button onClick={handleLike} style={{ fontSize: "32px" }}>
        {like}
      </button>
    </div>
  );
};

export default Like;
