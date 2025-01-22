import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav className='clearfix'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/browse">Browse Characters</NavLink>
            <NavLink to="/comics">Comics</NavLink>
        </nav>
    );
}

export default NavigationBar