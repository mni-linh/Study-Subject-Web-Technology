import { Link, BrowserRouter} from 'react-router-dom';

export const Menu = () => {
    return(
        <BrowserRouter>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/clickme">Click me</a>
            <a href="/news">News</a>
        </BrowserRouter>
    )
}