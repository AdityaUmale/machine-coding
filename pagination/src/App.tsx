import { useEffect, useState } from "react";

interface Product {
  image: string;
  title: string;
  id: number;
  thumbnail: string
}

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard = ({ image, title }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span className="title">{title}</span>
    </div>
  );
};

const PAGE_SIZE = 10;


export default  function App(){
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fecthData = async () => {
  const data = await fetch("https://dummyjson.com/products?limit=500");
  const json = await data.json();
  setProducts(json.products);
  }
  useEffect(() => {
    fecthData(); 
  }, [])

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n: number) => {
    setCurrentPage(n)
  }

  const handleMoveLeft = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  const handleMoveRight = () => {
    if (currentPage < noOfPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  return !products.length ? (
    <h1>no products found</h1>
  ) : (
    <>
    <h1>Pagination</h1>
    
    <div className="products-container">
    {
      products.slice(start, end).map(p => (<ProductCard key={p.id} image={p.thumbnail} title={p.title} />

      ))
    }
    <span onClick={() => handleMoveLeft()}>⬅️</span>
    <div className="pagination-container">
      {[...Array(noOfPages).keys()].map((n) => (
        <span className="page-container" key={n} onClick={() => handlePageChange(n)}>
          {n}
        </span>
      ))}
      <span onClick={() => handleMoveRight()}>➡️</span>

    </div>
    </div>
    </>
  )
}