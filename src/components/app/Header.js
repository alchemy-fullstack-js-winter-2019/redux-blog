import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeContainer from '../../containers/Home';
import FilterPosts from '../../containers/FilterPosts';
import PostDetailContainer from '../../containers/PostDetailContainer';
import UsersContainer from '../../containers/UsersContainer';
import UserDetailContainer from '../../containers/UserDetailContainer';
import styles1 from './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

};

function Header(props) {
  const { classes } = props;
  
  return (
    <>
      <h1 className={styles1.title}>Confessions of an Influencer</h1>
      <Router>
        <div>
          <div className={styles1.nav}>
            <AppBar position="static">
              <Toolbar>
                <Link to='/' className={styles1.headerLink}><Typography variant="h6" color="inherit" className={classes.grow}>
              Home
                </Typography></Link>
                <Link to='/users' className={styles1.headerLink}><Typography variant="h6" color="inherit" className={classes.grow}>
              Users
                </Typography></Link>
                <Link to='/posts' className={styles1.headerLink}><Typography variant="h6" color="inherit" className={classes.grow}>
              Posts
                </Typography></Link>
              </Toolbar>
            </AppBar>
          </div>

          <Switch>
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/posts' component={FilterPosts}/>
            <Route exact path='/posts/:id' component={PostDetailContainer}/>
            <Route exact path='/users' component={UsersContainer}/>
            <Route exact path='/users/:id' component={UserDetailContainer}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Header);
