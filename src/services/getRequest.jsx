import axios from 'axios';

export const getCategories = async () => {
    try {
        const request = await axios.get('http://localhost:3000/categories');
        if (request.status == 200) {
            return request;
        } else {
            throw new Error("Error getting categories");
        }
    } catch (error) {
        console.error(error);
    }
}
export const getProducts = async () => {
    try {
        const request = await axios.get('http://localhost:3000/products');
        if (request.status == 200) {
            return request;
        } else {
            throw new Error("Error getting categories");
        }
    } catch (error) {
        console.error(error);
    }
}