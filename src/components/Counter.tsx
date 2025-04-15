import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  //   let count = 0;
  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState("maulana");

  //   const handleDecrement = () => {
  //     alert("Decrement");
  //     // count -= 1;
  //     // alert("count: " + count);
  //     setCount(count - 1);
  //   };

  //   const handleIncrement = () => {
  //     alert("Increment");
  //     // count += 1;
  //     // alert("count: " + count);
  //     setCount(count + 1);
  //   };

  //   const handleResetCounter = () => {
  //     setCount(0);
  //   };

  const { count, handleDecrement, handleIncrement, handleResetCounter } = useCounter();

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={handleDecrement}>Kurang</button>
      <p style={{ fontSize: "32px" }}>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
