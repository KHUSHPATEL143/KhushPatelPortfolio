import logo from '../assets/logo.png';

const LogoMark = ({ className = '' }) => {
    return (
        <img
            src={logo}
            alt="Logo"
            className={className}
        />
    );
};

export default LogoMark;
