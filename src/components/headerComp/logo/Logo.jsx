import './logo.css';

function Logo({text, link}) {
    return (
        <div className='logo'>
            <a href={link} className='header__logo-link'>{text}</a>
        </div>
    )
}

export default Logo
