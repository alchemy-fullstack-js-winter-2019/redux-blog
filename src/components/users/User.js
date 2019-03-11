import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles1 from '../app/App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function User({ user }) {
  return (
    <div>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">
        </Typography>
        <div>
          <List>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img  src='../../../account.png' />
                  </Avatar>
                </ListItemAvatar>
                <Link to={`/users/${user.id}`} key={user.id} className={styles1.link}><ListItemText
                /><h2>{user.name}</h2></Link> 
              </ListItem>
            )}
          </List>
        </div>
      </Grid>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
