import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Col, Row, Button } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import { categories, price } from "../Datas";
import SearchFeature from "./Sections/SearchFeature";
import Subscribe from "./Sections/Subscribe"
import { useSelector } from "react-redux";


const { Meta } = Card;

function LandingPage() {
  const user = useSelector(state => state.user)

  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
  const [postSize, setPostSize] = useState(0);
  const [SearchItem, setSearchItem] = useState("");
  const [Filters, setFilters] = useState({
    continents: [],
    price: []
  });

  useEffect(() => {
    const variables = {
      skip: skip,
      limit: limit
    };
    getProducts(variables);
  }, []);

  const getProducts = variables => {
    Axios.post("/api/product/getProducts", variables).then(response => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
        //console.log(response.data.products);
      } else {
        alert("Failed to get products data");
      }
    });
  };

  const onLoadMore = () => {
    //SKIP - position where you start fetching data
    //LIMIT - how many instances you fetch
    let newSkip = skip + limit;
    const variables = {
      skip: newSkip,
      limit: limit,
      loadMore: true
    };
    getProducts(variables);
  };

  const renderCards = products.map((product, index) => {
    return (
      <Col key={index} lg={6} md={8} xs={24}>
        <Card
          key={index}
          hoverable={true}
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={`£${product.price}`} />
        </Card>
      </Col>
    );
  });
  const showFilteredResults = filters => {
    const variables = {
      skip: 0,
      limit: limit,
      filters: filters
    };
    getProducts(variables);
    setSkip(0);
  };

  const handlePrice = value => {
    const data = price;
    let array = [];

    for (let key in data) {
      //console.log(key);
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    //console.log(array);
    return array;
  };
  const handleFilters = (filters, type) => {
    //console.log(filters);
    const newFilters = { ...Filters };
    newFilters[type] = filters;

    if (type === "price") {
      let priceValues = handlePrice(filters);
      newFilters[type] = priceValues;
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchItem = newSearchItem => {
    const variables = {
      skip: 0,
      limit: limit,
      filters: Filters,
      searchItem: newSearchItem
    };
    setSkip(0);
    setSearchItem(newSearchItem);
    getProducts(variables);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
    {(user.userData && !user.userData.isAuth) && <Subscribe/>}
      <div style={{ textAlign: "center" }}>
        <h2>Find your perfect shoes</h2>
      </div>
      {/*Filter*/}
      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={categories}
            handleFilters={filters => handleFilters(filters, "categories")}
          />
        </Col>
        <Col lg={12} xs={24}>
          <RadioBox
            list={price}
            handleFilters={filters => handleFilters(filters, "price")}
          />
        </Col>
      </Row>

      {/*Search*/}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto"
        }}
      >
        <SearchFeature refreshFunction={updateSearchItem} />
      </div>

      {products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h2>No items yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />
      {postSize >= limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={onLoadMore}>Load more items</Button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
