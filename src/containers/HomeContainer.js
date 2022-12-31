import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeToCart, emptyToCart} from '../service/Actions/Action'
import {productList} from '../service/Actions/productAction'

const mapStateToProps=state=>({
    // data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data)),
    emptyToCartHandler:data=>dispatch(emptyToCart(data)),
    productListHandler:data=>dispatch(productList(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;