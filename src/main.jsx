import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
//With strict mode useEffect will get rendered twice when at the mounting cycle
