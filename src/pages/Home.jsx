import { Link } from "react-router-dom";

const Home = () =>{
    return (
     <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <p>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="btn btn-dark" to="/users">users</Link>
                <Link className="btn btn-light ms-3" to="/posts">posts</Link>


            </div>

        </div>

     </div>
    )
}

export default Home;