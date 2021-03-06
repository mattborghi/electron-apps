import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import UniversalMCOrange from './img/universal-mc-logo-orange.png'
import UniversalMCBlue from './img/universal-mc-logo-blue.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
// import TLogo from './icons/nyt-logo'
import OpenFolder from './icons/open-folder.jsx'
import FolderList from './components/left-pane.jsx'
// import { Link } from "react-router-dom"
import MenuListComposition from './components/menu-button.jsx'
import FormDialog from './components/newProduct/popup.jsx'
// import CustomizedSwitches from './components/switch/on-off-button.jsx'
import UniversalText from './img/universal-text.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogUser from './Components/Avatar/avatar.jsx'
import Icon from '@mdi/react'
// Icons
import { mdiLightbulb, 
         mdiLightbulbOn, 
         mdiFile, 
         mdiHelpBox, 
         mdiFormatListBulletedSquare, 
         mdiAlertCircle
        } from '@mdi/js'



const white = '#ffffff'
const orange = '#ff5722'
const black = '#303030'
const green = 'rgb(150,200,150)'
const black2 = '#424242'
const blue = '#4b6eaf'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});


function PageTwo(props) {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           turnedOn: true,
  //           themeColor: 'dark',
  //       }
  //   }  
  const [turnedOn, setTurnedOn] = useState(true)
  const [themeColor, setThemeColor] = useState('dark')

  function onChange () {
    let turnedState = turnedOn;
    if (turnedState){
        setTurnedOn(!turnedState)
        setThemeColor('light')
    } else {
        setTurnedOn(!turnedState)
        setThemeColor('dark')
    }  
  }

let theme = createMuiTheme({
  palette: {
      type: themeColor,
      primary: {
        light: green,
        main: white,
        dark: black2,
        contrastText: white,
      },
      secondary: {
        light: black2,
        main: black2,
        dark: black,
        contrastText: black2,
      },
      error: {
        light: green,
        main: green,
        dark: green,
        contrastText: green,
      },
    },
  // props.themeColor
  typography: { 
      useNextVariants: true
  }
});


const logoClass = theme => ({
  height: 24,
  width: 24,
  marginRight: theme.spacing.unit,
})

const style = {
  button: {
    color: white,
    width: 250,
    height: 50,
    fontSize: 16,
  },
  div: {
    paddingRight: 25, 
    marginTop: theme.spacing.unit,
  }
}

// const { classes } = props;
  return (

    <MuiThemeProvider theme = { theme }>
    <div style={{margin:0, backgroundColor: black2}}>
    
    {/* <div onChange={() => this.onChange()}>
      <CustomizedSwitches />
    </div> */}

    {/* AppBar */}
    <div style={{flexGrow: 1, width: 200, position: 'absolute', margin: 0, top: 0, right: 100,}}>
      {/* position: 'absolute', margin: 0, top: 0, right: 0,  */}
      <AppBar position="static" color="secondary">
      <Toolbar>
      
      <Button onClick={onChange} >
        <Icon 
            path={ turnedOn ? mdiLightbulb : mdiLightbulbOn }
            size={1.5}
            color={turnedOn ? 'white' : 'black'}
        /> 
      </Button>

      <div style={{position: 'absolute', margin: 0, top: 0, right: 50,}}>
          <LogUser />
      </div>
      </Toolbar>
      </AppBar>
    </div>

    <Grid container >

    <Grid item id="root" style={{backgroundColor: black2, height: '100vh', }} xs={3}>
    {/* height: '100vh', */}
      <FolderList />
    </Grid>

    <Grid item xs={9} style={{backgroundColor: themeColor === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.main,}}>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <div style={{paddingTop: 100}} >
      {/* onMouseEnter={() => this.changeColor('enter')} onMouseLeave={() => this.changeColor('leave')} */}
        {/* {!this.state.overImage &&  */}
          <img src={UniversalMCOrange} alt="universal-mc-logo" height={100}></img>
        {/* }
        {this.state.overImage &&  */}
           {/* <img src={UniversalMCBlue} alt="universal-mc-logo" height={100}></img>
         } */}
        
        
      </div>
      {/* <Typography style={{color: 'white', fontSize:30}}>Universal MC</Typography> */}
      <img src={UniversalText} alt="universal-text" height={50} width={250}></img>
      <Typography style={{color:'grey', fontSize:18, fontStyle: 'italic', fontFamily: 'Roboto'}} >Version 2019.0.1</Typography>
    </Grid>


      <Grid container
        justify="center"
        alignItems="center"
        direction="column"
        style={{paddingTop: 50}}
        id="button-container"
      >

        <FormDialog fill={orange} logoClass={logoClass} style={style}  />
        
        <Button  style={{marginLeft: -130}} >
        {/* className={classes.margin} */}
        <div style={{marginTop: theme.spacing.unit, paddingRight: 25,}}><OpenFolder fill={orange} style={logoClass} /></div>
          <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Open</Typography>
        </Button >

        {/* <div style={{bottom:10, left: 500, position: "absolute",}}>
        <Link to='/second'>
            <Button size="large">
              <TLogo fill={orange} style={logoClass} />
              Checkout version 1!
            </Button>
        </Link>
        </div> */}
      
      <div style={{bottom:10, right: 30, position: "absolute",}}>
      <Grid container>
        <MenuListComposition logo='Information'/>
        <MenuListComposition logo='Settings'/>
      </Grid>
      </div>
      
      </Grid>       
      
      {/* End grid item */}
      </Grid>
      {/* End row container */}
      </Grid>
      </div>
    </MuiThemeProvider>
  );
}

PageTwo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PageTwo);
