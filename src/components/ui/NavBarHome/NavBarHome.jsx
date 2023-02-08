import './navBarHome.css';

const itemsNavBar = ["Home","Services","About us"];

export const NavBarHome = () =>{
    return(
        <nav>
            <ul className='listHeader'>
            {itemsNavBar.map((item) => (<li><a href="">{item}</a></li>))}
            </ul>
            
        </nav>
    )
}