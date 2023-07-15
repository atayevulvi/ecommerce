import { useState, useEffect } from 'react'
import { getCategories } from '../../services/getRequest'
export default function SidebarCategories() {
    const [cat, setCat] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getCategories();
            setCat(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <ul
                className="nav nav-pills mb-3 custom-nav-tab"
                id="pills-tab"
                role="tablist"
            >

                {
                    cat.length > 0 && cat.map((c, i) => {
                        return (
                            <li key={i} className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-vegetables"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-vegetable"
                                    type="button"
                                    role="tab"
                                    aria-selected="true"
                                >
                                    {c.title}{" "}
                                    <img
                                        src={c.img}
                                        className="blur-up lazyload"
                                        alt=""
                                    />
                                </button>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}
