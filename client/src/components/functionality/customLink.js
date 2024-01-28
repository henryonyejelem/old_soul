import {Link} from 'react-router-dom'

function CustomLink(props) {
    const handleLinkClick = () => {
        window.location.reload();
    };
    return(
        <Link to={props.to} onClick={handleLinkClick}>{props.children}</Link>
    )
}

export default CustomLink
