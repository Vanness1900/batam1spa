import { Link } from 'react-router-dom';

function ButtonHeader({page}){
    return(
        // Use Link for routing to the corresponding pages
        <Link className="px-8 font-primary text-white hover:underline" to={`/${page.toLowerCase()}`}>
            {page}
        </Link>
    );
}

export default ButtonHeader