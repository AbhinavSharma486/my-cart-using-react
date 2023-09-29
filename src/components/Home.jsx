import React from 'react'
import '../styles/home.scss'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
    "https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/shoe/i/o/j/8-112-xtoon-black-original-imagbvykvacewmds.jpeg?q=90";


const Home = () => {

    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: img1,
            id: "bsdvgdsfgbixsbs"
        },
        {
            name: "Black Shoes",
            price: 490,
            imgSrc: img2,
            id: "bsdvgdsfgsfsfbixsbs"
        },
    ]

    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
        dispatch({ type: "addToCart", payload: options })
        dispatch({ type: "calculatePrice" })
        toast.success("Added to cart")
    }

    return (
        <div className='home'>
            {
                productList.map((i) => (
                    <ProductCard
                        key={i.id}
                        imgSrc={i.imgSrc}
                        name={i.name}
                        price={i.price}
                        id={i.id}
                        handler={addToCartHandler}
                    />
                ))
            }
        </div>
    )
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className='productCard'>

        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>

    </div>
)

export default Home