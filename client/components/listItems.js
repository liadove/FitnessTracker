import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import PersonIcon from '@material-ui/icons/Person'
import LayersIcon from '@material-ui/icons/Layers'
import DashboardIcon from '@material-ui/icons/Dashboard'
import {Link} from 'react-router-dom'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <FitnessCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Fitness Tracker" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Your Progress" />
    </ListItem>
    <ListItem button component={Link} to="/home/recipes">
      <ListItemIcon>
        <EmojiFoodBeverageIcon />
      </ListItemIcon>
      <ListItemText primary="Recipes" />
    </ListItem>
    <ListItem button component={Link} to="/home/profile">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
  </div>
)
