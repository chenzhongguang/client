import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//通过相对路径导入，但是不能写文件后缀名
import App from './App';
const root = ReactDOM.createRoot( 
	document.getElementById('root') as HTMLElement);
root.render(
    <App />
);

reportWebVitals();
