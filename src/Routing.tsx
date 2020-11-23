import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";

import Front from "./layout/Front/Front";
import Admin from "./layout/Admin/Admin";
import Page404 from "./layout/Page404";
import PageError from "./layout/PageError";

/**Front */
import SampleRedux from "./view/SampleRedux/SampleRedux";
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
/**Admin */
import Dashboard from "./view/Dashboard/Dashboard";
import SampleAdminPage from "./view/SampleAdminPage/SampleAdminPage";

export default function Routing() {
  /**
   * Route Middleware
   * Need to set this depends on backend authentication & authorization
   */
  const authCheck = (to: any, from: any, next: any) => {
    next(); //if credential passed
    //next.redirect('/login') //redirect if credential failed
  };

  return (
    <>
      <BrowserRouter>
        <GuardProvider error={PageError}>
          <Switch>
            <GuardedRoute
              guards={[authCheck]}
              path="/admin"
              meta={{ role: ["admin"] }} //use this meta for authorization or additional info
            >
              <Admin>
                <Switch>
                  <GuardedRoute
                    path="/admin/dashboard"
                    exact
                    component={Dashboard}
                    meta={{ role: ["admin"] }}
                  />
                  <GuardedRoute
                    path="/admin/sample-admin-page"
                    exact
                    component={SampleAdminPage}
                    meta={{ role: ["admin"] }}
                  />
                  <Redirect exact from="/admin" to="/admin/dashboard" />
                </Switch>
              </Admin>
            </GuardedRoute>
            <GuardedRoute path="/">
              <Front>
                <Switch>
                  <GuardedRoute path="/home" exact component={Home} />
                  <GuardedRoute path="/login" exact component={Login} />
                  <GuardedRoute
                    path="/sample-redux"
                    exact
                    component={SampleRedux}
                  />
                  <Redirect exact from="/" to="/home" />
                  <GuardedRoute path="*" exact component={Page404} />
                </Switch>
              </Front>
            </GuardedRoute>
          </Switch>
        </GuardProvider>
      </BrowserRouter>
    </>
  );
}
