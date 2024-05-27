import './404.css'
import { Link } from 'react-router-dom';

const NoPage = () =>{
    return(
        <>
            <div className="broken">
                <div className="content">
                    <h1 className="title-404">404 Not Found</h1>
                    <p className="err-desc">
                        A wild 404-PAGE appeared!<br/> This means that your
                        browser was able to communicate with your given server,
                        but the server could not find what was requested.<br/><br/>
                        * Make sure the url is correct.<br/>
                        * Don't panic.
                    </p>
                    <Link to="/" className="misc">Press to go Home_</Link>
                </div>
            </div>
        </>
    )
}

export default NoPage;