import { useParams } from "react-router";

const formatSlugToTitleCase = (slug: string) => {
  return slug
    .split("-") // Pisahkan berdasarkan tanda hubung
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Kapitalisasi huruf pertama
    .join(" "); // Gabungkan kembali dengan spasi
};

// Data produk statis
const productDescriptions: Record<string, string> = {
  "baju-kaos": "Deskripsi untuk Baju Kaos: Produk berkualitas dengan bahan katun.",
  "celana-bjir": "Deskripsi untuk Celana Bjir: Celana nyaman untuk kegiatan sehari-hari.",
  kemeja: "Deskripsi untuk Kemeja: Kemeja formal yang cocok untuk berbagai acara.",
  "motor-nmax": "Deskripsi untuk Motor Nmax: Motor matic dengan performa tinggi dan desain modern.",
};

const ProductDetailPage = () => {
  const params = useParams<{ productSlug: string }>();
  const productName = params.productSlug ? formatSlugToTitleCase(params.productSlug) : "Unknown Product";

  // Ambil deskripsi produk dari data statis
  const productDescription = productDescriptions[params.productSlug || "Deskripsi tidak tersedia"];
  return (
    <div>
      <h1>Product Detail Page</h1>
      <h3>Product: {productName}</h3>
      <p>deskripsi produk: {productDescription}</p>
    </div>
  );
};

export default ProductDetailPage;
