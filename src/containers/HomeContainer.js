import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions';
import Home from '../components/Home';

const mapStateToProps = state => ({
    data : state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler : data => dispatch(addToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)



// export default Home;