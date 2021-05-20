import { Link } from "react-router-dom";
import react, {useEffect, useState} from 'react';

const Tabs = () => {
  const [isActive, setIsActive] = useState('top');
  useEffect(() => {
    const url = window.location.pathname;
    setIsActive(url.slice(1, url.length));
  }, []);
    return(
    <div class="tabs  is-boxed">
        <ul>

    <li className={isActive == 'top' && 'is-active'}>
        <Link to = '/' onClick = {() => setIsActive('top')}>
             <span class="icon is-small"><i className="fas fa-home" aria-hidden="true"></i></span>
            <span> Top </span>
        </Link>
     </li>

  
    <li className={isActive == 'bar' && 'is-active'}>
      <Link to = '/bar' onClick = {() => setIsActive('bar')}>
        <span class="icon is-small"><i className="far fa-chart-bar" aria-hidden="true"></i></span>
        <span>Bar</span>
        </Link>
    </li>

    <li className={isActive == 'pie' && 'is-active'}>
      <Link to = '/pie'  onClick = {() => setIsActive('pie')}>
        <span class="icon is-small"><i class="fas fa-chart-pie " aria-hidden="true"></i></span>
        <span>Pie</span>
        </Link>
    </li>

    <li className={isActive == 'scatter' && 'is-active'}>
      <Link to = '/scatter' onClick = {() => setIsActive('scatter')}>
        <span class="icon is-small"><i class="fas fa-globe-asia" aria-hidden="true"></i></span>
        <span>Scatter</span>
      </Link>
    </li>
    
    </ul>
  </div>
  );
}

export default Tabs;