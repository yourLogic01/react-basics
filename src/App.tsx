// import Welcome from "./components/Welcome";
// import Header from "./components/Header";
// import ProfileCard from "./components/ProfileCard";
// import Counter from "./components/Counter";
// import Like from "./components/Like";
import { Routes, Route } from "react-router";
import TermsPage from "./pages/TermsPage";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import Headernavbar from "./components/HeaderNavbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FormPage from "./pages/FormPage";
import RHFPage from "./pages/RHFPage";

// type Teacher = {
//   name: string;
//   job: string;
//   year: number;
//   id: number;
// };

// const teachers: Teacher[] = [
//   {
//     name: "Maulana",
//     job: "Software Engineer",
//     year: 1990,
//     id: 1,
//   },
//   {
//     name: "Asyifa",
//     job: "Full Stack Developer",
//     year: 2001,
//     id: 2,
//   },
//   {
//     name: "Budi",
//     job: "Software Engineer",
//     year: 1999,
//     id: 3,
//   },
// ];

// component
function App() {
  return (
    // <div style={{ padding: "16px 48px" }}>
    //   <Header />
    //   {/* <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
    //     {teachers.map((teacher) => {
    //       return <ProfileCard name={teacher.name} job={teacher.job} year={teacher.year} key={teacher.id} />;
    //     })}
    //   </div> */}
    //   <Counter />
    //   <Like />
    //   <Welcome />
    // </div>

    <div style={{ padding: "16px 48px" }}>
      <Headernavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/product-list" element={<ProductListPage />} />

        {/* Dynamic Routing */}
        <Route path="/product/:productSlug" element={<ProductDetailPage />} />
        {/* localhost:5173/product/kaos-oblong */}

        <Route path="/form" element={<FormPage />} />
        <Route path="rhf" element={<RHFPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
