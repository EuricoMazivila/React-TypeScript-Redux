
import React from "react";
// javascript plugin used to create scrollbars on windows
import { Route, Switch} from "react-router-dom";
import {ExtractRouteParams, RouteComponentProps} from "react-router";
import routes from "../routes";

interface IAuthProps {
  props: RouteComponentProps<ExtractRouteParams<string,string>>
}

function Auth({props} : IAuthProps) {

  return (
    <div className="wrapper">
      <div className="main-panel">
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Auth;
