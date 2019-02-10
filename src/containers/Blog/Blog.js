import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="Blog">
          <header>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName="my-active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post" exact activeClassName="my-active">
                  New post
                </NavLink>
              </li>
            </ul>
          </header>
          <Switch>
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/posts" component={Posts} />
            <Redirect from="/" to="/posts"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Blog;
