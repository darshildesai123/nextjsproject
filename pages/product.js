import Navbar from "@/componetns/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      {/* <h1 style={{color: "red"}}>This is a Product page</h1> */}
      <h1>This is a Product page</h1>
      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </>
  );
};

export default Product;
