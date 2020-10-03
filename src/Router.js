import React, { Suspense, lazy } from 'react';
import { history } from './history';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from './Components/Spinner';
import { ContextLayout } from './Context/Layout';
import NotFound from './Page/404';

const Home = lazy(() => import('./Page/Home'));
const Trailer = lazy(() => import('./Page/Trailer'));
const MovieDescriptions = lazy(() => import('./Page/MovieDescription'))

const PageLayout = ({ component: Component, List, Player, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              List === true
                ? context.ListLayout
                : Player === true
                ? context.PlayerLayout
                : context.DescriptionLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PageLayout exact path='/' component={Home} List />
          <PageLayout exact path='/stream/movie/:id' component={Trailer} Player />
          <PageLayout exact path='/movie/:id' component={MovieDescriptions} />
          <PageLayout exact path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
