import { Switch, Route, useRouteMatch } from "react-router-dom"
import IndexUser from "./index";
import ShowUser from "./ShowUser";

const RouterUser = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={IndexUser} />
            <Route path={`${path}/:userId`} component={ShowUser} />
        </Switch>
    )
}

export default RouterUser