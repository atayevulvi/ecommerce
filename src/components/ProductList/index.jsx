import Product from "../Product";
import { getProducts } from "../../services/getRequest";
import { useState, useEffect } from "react";
export default function ProductList() {

    const [prods, setProds] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getProducts();
            if (res.status == 200) {
                setProds(res.data);
            } else {
                throw new Error("Error fetching data");
            }
        } catch (error) {
            console.error();
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                {
                    prods.length > 0 && prods.map((p, i) => {
                        return <Product key={i} name={p.name} desc={p.description} price={p.price} img={p.img} slug={p.slug} />
                    })
                }
            </div>
        </>
    )
}
