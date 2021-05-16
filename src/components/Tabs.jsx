import { Link } from "react-router-dom";
import react, {useState} from 'react';


const Tabs = () => {
  const [isActive, setIsActive] = useState('top');
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

    <li className={isActive == 'circle' && 'is-active'}>
      <Link to = '/circle'  onClick = {() => setIsActive('circle')}>
        <span class="icon is-small"><i class="fas fa-chart-pie " aria-hidden="true"></i></span>
        <span>Circle</span>
        </Link>
    </li>

    <li className={isActive == 'geo' && 'is-active'}>
      <Link to = '/geo' onClick = {() => setIsActive('geo')}>
        <span class="icon is-small"><i class="fas fa-globe-asia" aria-hidden="true"></i></span>
        <span>Geo</span>
      </Link>
    </li>
    
    </ul>
  </div>
  );
}

export default Tabs;