import './navBarHome.css';
import { Link} from 'react-router-dom';

const routesApp = [
    {title: "Home", route:"/" },
    {title: "Use State", route:"/UseState" },
    {title: "Tweet", route:"/Tweet" },
    {title: "Contact Us", route:"/ContactUs"}
]

export const NavBarHome = () =>{
    return(
        <nav className='navBar'>
            <ul className='listHeader'>
            {routesApp.map((item) => (<li className='itemsNav'><Link to={item.route} className='item'>{item.title}</Link></li>))}
            </ul>
        </nav>
    )
}