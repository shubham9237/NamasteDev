import { useEffect, useState } from "react";
import Product from "./Product";

const LIMIT = 10;

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [noOfPages, setNoOfPages] = useState(0)

    const fetchProducts = async () => {
        const products = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT * currentPage}&select=id,title,description,price,thumbnail,discountPercentage`);
        const json = await products.json();
        console.log(json);
        setProducts(json.products);
        setNoOfPages(Math.ceil(json.total / LIMIT));
    }

    useEffect(() => {

        fetchProducts();

    }, [currentPage])

    return (
        <div>
            <div className="flex m-10 p-10 flex-wrap">
                {
                    products.map((product) => <Product key={product.id} {...product} />)
                }
            </div>
            <div className="p-10 m-5">
                {currentPage !=0 && <span onClick={()=>{setCurrentPage((currentPage)=>currentPage-1)}} className="p-1 cursor-pointer" disabled>prev</span>}
                {
                    [...Array(noOfPages).keys()].map(elm => <span key={elm} className={"p-1 cursor-pointer " + (elm === currentPage && "font-bold underline")} onClick={() => {setCurrentPage(elm)}}>{elm}</span>)
                }
                {currentPage < noOfPages-1 && <span onClick={()=>{setCurrentPage((currentPage)=>currentPage+1)}} className="cursor-pointer p-1">next</span>}
            </div>
        </div>
    )
}
export default Pagination;