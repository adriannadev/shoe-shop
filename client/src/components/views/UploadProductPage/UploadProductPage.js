import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;
const Categories = [
  { key: 1, value: "Casual" },
  { key: 2, value: "Sports" },
  { key: 3, value: "Evening Wear" },
  { key: 4, value: "Slippers" },
  { key: 5, value: "Sandals" }
  //High heels and pumps for women
];

function UploadProductPage(props) {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [stockValue, setStockValue] = useState(0);
  const [genderValue, setGenderValue] = useState(1);
  const [categoryValue, setCategoryValue] = useState(1);

  const [images, setImages] = useState([]);

  const onTitleChange = event => {
    setTitleValue(event.currentTarget.value);
  };
  const onDescriptionChange = event => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onPriceChange = event => {
    setPriceValue(event.currentTarget.value);
  };
  const onStockChange = event => {
    setStockValue(event.currentTarget.value);
  };
  const onGenderSelectChange = event => {
    setGenderValue(event.currentTarget.value);
  };
  const onCategorySelectChange = event => {
    setCategoryValue(event.currentTarget.value);
  };
  const updateImages = newImages => {
    setImages(newImages);
  };
  const onSubmit = event => {
    event.preventDefault();

    if (
      !titleValue ||
      !descriptionValue ||
      !priceValue ||
      !stockValue ||
      !genderValue ||
      !categoryValue ||
      !images
    ) {
      return alert("Fill in all the fields!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: titleValue,
      description: descriptionValue,
      price: priceValue,
      stock: stockValue,
      images: images,
      gender: genderValue,
      categories: categoryValue
    };
    Axios.post("/api/product/uploadProduct", variables).then(response => {
      if (response.data.success) {
        alert("Product sucessfully uploaded!");
        props.history.push("/");
      } else {
        alert("Failed to upload product");
      }
    });
  };

  return (
    <div style={{ width:'90%', margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload New Shoe</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/*Drop Zone */}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={titleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={descriptionValue} />
        <br />
        <br />
        <label>Price(£)</label>
        <Input onChange={onPriceChange} value={priceValue} type="number" />
        <br />
        <br />
        <label>Stock</label>
        <Input onChange={onStockChange} value={stockValue} type="number" />
        <br />
        <br />
        <select onChange={onGenderSelectChange}>
          <option key="1" value="1">
            Men
          </option>
          <option key="2" value="2">
            Women
          </option>
        </select>
        <br />
        <br />
        <select onChange={onCategorySelectChange}>
          {Categories.map(item => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
