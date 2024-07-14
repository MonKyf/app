import axios from "./customize-axios";
const getbyidProduct = (id) => {
    return axios.get(`/api/product/${id}`);
}
const postCreateProduct = (NameProduct, Img, Price, information ) => {
    console.log(NameProduct, Img, Price, information);
    return axios.post("/api/user", { NameProduct: NameProduct, Img: Img, Price: Price, information: information});
}