import React from 'react';
import './product.style.scss';
import {connect} from "react-redux";
import {fetchProductsBegin, fetchProductsFailure, fetchProductsSuccess} from "../../redux/actions/productAction";
import getSitesApi from "./product.api";

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.fetchProducts = this.fetchProducts.bind(this)
    }

    fetchProducts = () => {
        this.props.dispatch(fetchProductsBegin());
        getSitesApi.getAll(1).then(response => {
            if (response.data) {
                this.props.dispatch(fetchProductsSuccess(response.data._embedded.companies));
            } else {
                this.props.dispatch(fetchProductsFailure({message: "Fetching products failed"}));
            }
        });
    };

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        const {error, loading, products} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <div className="SiteComponent">

                SiteComponent...
                <button onClick={this.fetchProducts}>Load Products</button>

                <div>
                    <ul>
                        {
                            products.map((item,index) =>
                                <li key={index}>{item.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductComponent);
