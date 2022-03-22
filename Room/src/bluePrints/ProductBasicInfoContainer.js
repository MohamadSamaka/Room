import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../styles/ProductBasicInfoContainer.css"
import {ShowProductFullInfoContainer} from "../components/FullProductDescription.js"


export default function ProductBasicInfoContainer(data, setClickedProduct){
    return( 
        <div className="product" key={data.Id} id={data.Id} onClick={()=> {setClickedProduct(data); ShowProductFullInfoContainer()}}>
            <div className="thumb">
                    <img className="product-image" src={`${process.env.REACT_APP_BASE_URL}/images/products/${data["Images"][0]}`} alt={data["Title"]}></img>
                    <ul className='product-slider-op'>
                        <li>
                            <AddShoppingCartIcon className="add-to-cart"></AddShoppingCartIcon>
                        </li>
                        <li>
                            <FavoriteIcon className="add-to-wishlist"></FavoriteIcon>
                        </li>
                    </ul>
            </div>
            <div className="product-basic-info">
                <h4 className="product-title">{data["Title"]}</h4>
                <span className="product-price">{data["Price"]}$</span>
            </div>
        </div>
    );
}