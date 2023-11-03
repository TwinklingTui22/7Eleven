import { useState } from "react";
import Modal from "./ProductDetails";
import AddPaymentCredential from "./AddPayment";

const items = [
  {
    key: 1,
    image: "/images/watch.jpeg",
    state: false,
    productName: "Fabulous Watch",
    price: "200.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    key: 2,
    image: "/images/wallettt.jpeg",
    state: false,
    productName: "Fabulous Wallet",
    price: "250.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    key: 3,
    image: "/images/ring.jpeg",
    state: false,
    productName: "Ring For Girls",
    price: "300.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
];

const AllProducts = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <div className="container2">
      <p className="title-landing-page">Our Products</p>
      <div className="container3">
        {items.map((Element) => (
          <div className="col" key={Element.key}>
            <div className="prod-img">
              <img src={Element.image} alt="Product" className="watch-img" />
            </div>
            <div className="characteristic">
              <span>Minimalistic</span>
              <br></br>

              <hr></hr>
              <span>Stylish</span>
              <br></br>
              <hr></hr>
              <span>Light-weight</span>
              <br></br>
              <hr></hr>
              <span>Comfortable</span>
            </div>

            <button
              className="buy-btn"
              onClick={() => {
                if (localStorage.getItem("bank_account_id") === null) {
                  setOpenPaymentModal(true);
                } else {
                  setOpenModal(Element);
                }
              }}
            >
              Let's Buy!
            </button>
          </div>
        ))}

        {(openModal || openPaymentModal) && <div className="overlay"></div>}
        {openPaymentModal && (
          <AddPaymentCredential closeModal={setOpenPaymentModal} />
        )}
        {openModal && <Modal closeModal={setOpenModal} element={openModal} />}
      </div>
    </div>
  );
};

export default AllProducts;

// css allProducts.css
