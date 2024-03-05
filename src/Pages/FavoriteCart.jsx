import React, { useEffect } from "react";
import "./FavoriteCart.css";
import Navs from "../components/Navs";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductComponent from "../components/ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromFavorite, getProductToFavorite } from "../store/favoriteSlice";
// import { deleteFromFavorite } from "../store/favoriteSlice";

const FavoriteCart = () => {
  const { data  } = useSelector((state) => state.favorite);


  const dispatch = useDispatch();

  return (
    <div className="favorite-page">
      {/* start nav */}
      <Navs path="" />
      {/* end nav */}

      {/* start header page */}
      <HeaderPage page="your favorite" />
      {/* end header page */}

      <section className="content">
        <Container>
          <Row>
            {data.length === 0 ? (
              <div className="back">
                <h1>Favorites list is empty</h1>
                <Link to="/shop">go to shop</Link>
              </div>
            ) : (
              data.map((item) => (
                <Col sm={12} md={6} lg={3} key={item.id} className="mb-5">
                  <ProductComponent
                    heartStyle="heart-style-in-favorite-page"
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                    product={item}
                  />
                  <button
                    className="btn-delete"
                    onClick={() =>
                      //  dispatch(deleteFromFavorite(item))
                      dispatch(deleteFromFavorite(item.id))
                      }
                  >
                    delete
                  </button>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>

      {/* start footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
};

export default FavoriteCart;
