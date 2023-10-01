// import logo from "./logo.svg";
import "./App.css";
import products from "./products";

function App() {
  const productsList = products.map((book) => {
    return (
      <div className="card">
        <h2>{book.name}</h2>
        <h3>{book.price}</h3>
        <img src={book.image} />
      </div>
    );
  });

  return (
    <>
      <div className="App">
        <h1>Bashayer's bookstore</h1>

        <img src="https://media.istockphoto.com/id/963186372/vector/flat-design-concept-online-books-store-hand-pick-book-from-internet-device-vector-illustrate.jpg?s=612x612&w=0&k=20&c=Actp37AZcbCtQm_mnFhpwBIYoHrYzrRMbY8iFFMjLIQ="></img>
      </div>
      <div className="productL">{productsList}</div>
    </>
  );
}

export default App;
