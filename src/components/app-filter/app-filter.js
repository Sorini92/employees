import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component{
    constructor(props) {
        super(props);
        this.setState = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
                    //onClick={data}
                    >
                    Все содрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    //onClick={() => filterEmpOnRise()}
                    >
                    На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button" 
                    //onClick={() => filterEmpOnAbove()}
                    >
                    З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;