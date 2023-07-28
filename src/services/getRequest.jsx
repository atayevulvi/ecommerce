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

export const getCategoryCarousels = async () => {
    try {
        const req = await axios.get('http://localhost:3000/categoryCarousels')
        if (req.status == 200) {
            return req.data
        } else {
            throw new Error("Error getting categories");
        }
    } catch (error) {
        console.error(error);
    }
}

export const getSwiperCarusel = async () => {
    try {
        const req = await axios.get('http://localhost:3000/swiperCarusel')
        if (req.status == 200) {
            return req.data
        } else {
            throw new Error("xeta bas verdi")
        }
    } catch (error) {
        console.log(error);
    }
}

export const getcaruselsilde = async () => {
    try {
        const res = await axios.get('http://localhost:3000/CaruselSilde')
        if (res.status == 200) {
            return res.data
        }
        else {
            throw new Error('xeta bas verdi')
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const getcaruselsurusgen = async () => {
    try {
        const res = await axios.get('http://localhost:3000/CaruselSurusgen')
        if (res.status == 200) {
            return res.data
        }
        else {
            throw new Error('xeta bas verdi')
        }
    } catch (error) {
        console.log(error);
    }
}

export const getcaruselsonuncu=async()=>{
    try {
        const res=await axios.get('http://localhost:3000/CaruselSon')
        if (res.status==200) {
            return res.data
        }
        else{
            throw new Error('xeta bas verdi')
        }
    } catch (error) {
        console.log(error);
    }
}