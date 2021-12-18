import React from 'react'
import styled from 'styled-components'
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
// import MenuIcon from '@mui/icons-material/Menu';
// import CancelIcon from '@mui/icons-material/Cancel';

function Header() {

    const [burgerOpen,setBurgerOpen] = React.useState(false);
    const cars = useSelector(selectCars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car,index)=> <a href="#" key={index}>{car}</a>)}
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={()=>setBurgerOpen(true) }>Menu</CustomMenu>
            </RightMenu>

            <BurgerNav show={burgerOpen} >
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerOpen(false) } >X</CustomClose>
                </CloseWrapper>
                {cars && cars.map((car,index)=> <li key={index}><a href="#">{car}</a></li> )}
                <li><a href="#">Existing Inventory</a> </li>
                <li><a href="#">Used Inventory</a> </li>
                <li><a href="#">Trade-In</a> </li>
                <li><a href="#">Roadaster</a> </li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const CloseWrapper = styled.div`
    display:flex;
    justify-content:end;
`
const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
    align-items:center;
    padding:0 20px;
    z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }

    @media (max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
display:flex;
align-items:center;

a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px; 
}
`

const CustomMenu = styled.div`
cursor: pointer;
    width:40px;
    font-weight:600;
`

const BurgerNav = styled.div`
    position:fixed;
    right:0;
    top:0;
    bottom:0;
    background-color:white;
    width:300px;
    z-index:10;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=> props.show?`translateX(0)` : `translateX(100%)`};
    transition:transform 0.2s ease-in;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);

        a{
            font-weight:600;
        }
    }

`
const CustomClose = styled.div`
cursor: pointer;
`