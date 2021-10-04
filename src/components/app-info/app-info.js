import './app-info.css';

const AppInfo = ({showNumberOfEmployees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {showNumberOfEmployees}</h2>
            <h2>Премию получат: </h2>
        </div>
    );
}

export default AppInfo;