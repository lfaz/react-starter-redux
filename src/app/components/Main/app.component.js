import React, {Component} from 'react';
// import logo from '../../../logo.svg';
import './app.style.scss';
import ProductComponent from "../Products/product.component";
import { Button } from 'reactstrap';

class AppComponent extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="AppComponent">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                    </div>
                </div>
                <Button color="danger">Danger!</Button>
                <h2> AppComponent...</h2>
                <ProductComponent/>
            </div>
        );
    }
}

export default AppComponent;
