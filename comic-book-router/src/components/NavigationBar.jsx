import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav className='clearfix'>
            <NavLink to="/main">Browse Characters</NavLink>
            <NavLink to="/comics">Comics</NavLink>
        </nav>
    );
}

export default NavigationBar