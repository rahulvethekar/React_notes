import axios from "axios";
const API_URL="http://localhost:3001/products/";
function getAllProduct(){
    return axios.get(API_URL);
}
function getProductById(id){
    return axios.get(`${API_URL}${id}`)
}
function deleteProduct(id){
    return axios.delete(`${API_URL}${id}`)
}
function editProduct(id,data){
    return axios.put(`${API_URL}${id}`,data)
}
function postAddProduct(data){
    return axios.post(`${API_URL}`,data)
}
export {getAllProduct,getProductById,deleteProduct,editProduct,postAddProduct}