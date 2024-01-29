import { Switch, Route, useRouteMatch } from "react-router-dom"
import IndexPost from "./index";
import ShowPost from "./ShowPost";
import CreatePost from "./create";
import EdittPist from "./Edit";

const RouterPost = () => {
    const { path } = useRouteMatch();

    return (
        <div className="container mt-5">
      <div className="row g-3"></div>
        <Switch>
            <Route exact path={path} component={IndexPost} />
            <Route path={`${path}/create`} component={CreatePost} />
            <Route path={`${path}/edit/:postId`} component={EdittPist} />
            <Route path={`${path}/:postId`} component={ShowPost} />
        </Switch>
        </div>
       
    )
}

export default RouterPost