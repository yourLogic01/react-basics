import { Link } from "react-router";

const ProductListPage = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();

  //   const handleSortValueChange = (sortValue: string) => {
  //     // ganti seacrh params `sort` menjadi `price-asc`
  //     searchParams.set("sort", sortValue);

  //     setSearchParams(searchParams);
  //   };

  return (
    <div>
      <h1>Product List Page</h1>
      {/* <ul>
        <li>Sort : {searchParams.get("sort")}</li>
        <li>Name : {searchParams.get("name")}</li>
      </ul>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <button onClick={() => handleSortValueChange("price-asc")}>Sort Price asc</button>
        <button onClick={() => handleSortValueChange("price-desc")}>Sort Price desc</button>
        <button onClick={() => handleSortValueChange("popular")}>Sort Most Popular</button>
      </div> */}

      <ul>
        <li>
          <Link to="/product/baju-kaos" style={{ textDecoration: "none", color: "white" }}>
            Baju Kaos
          </Link>
        </li>
        <li>
          <Link to="/product/celana-bjir" style={{ textDecoration: "none", color: "white" }}>
            Celana Bjir
          </Link>
        </li>
        <li>
          <Link to="/product/kemeja" style={{ textDecoration: "none", color: "white" }}>
            Kemeja
          </Link>
        </li>
        <li>
          <Link to="/product/motor-nmax" style={{ textDecoration: "none", color: "white" }}>
            Motor Nmax
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductListPage;
