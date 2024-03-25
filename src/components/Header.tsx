import { AppBar,Toolbar, Typography, Tabs,Tab, Button } from '@mui/material'
import { NavbarWrapper } from '../styles/Styles.modules.ts'


const menuItems = [
  {name: "Home"},
  {name: "Now Playing"},
  {name: "Popular"},
  {name: "Tv Shows"},
]

const Header = () => {
  return (
    <NavbarWrapper>
    <AppBar sx={{padding:"10px", background:"#063970" }} >
      <Toolbar>
        <Typography className='logo' >
          ToditoStream
          </Typography>
        <Tabs className='navLinks' >
          {menuItems.map((item, index) => (
            <Tab className='links' key={index} label={item.name} />
          ))}
        </Tabs>
        <Button className='loginBtn' variant='contained' color='secondary'>Login</Button>
      </Toolbar>
    </AppBar>
    </NavbarWrapper>
  )
}

export default Header