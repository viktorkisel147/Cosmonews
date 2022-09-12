import './Header.css';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

type HeaderProps = {
    children: React.ReactNode
}

const Header = ({children} : HeaderProps) => {
    return (
        <header>
            <Link to='/'>
            <div className='logo-title'>
                <div className='logo'></div>
                <h1>Cosmonews</h1>
            </div></Link>

            <Button variant="contained"><Link style={{color:'#fff', padding:40}} to='/login'>Войти</Link></Button>
            {children}
        </header>
    );
}

export default Header;