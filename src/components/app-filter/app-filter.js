import './app-filter.css';

const AppFilter = (props) => {
    const {showAll, filterEmpOnAbove} = props;
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
                    onClick={() => showAll()}
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
                    onClick={() => filterEmpOnAbove()}
                    >
                    З/П больше 1000$
                </button>
            </div>
        );
}

export default AppFilter;