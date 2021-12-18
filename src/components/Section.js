import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section(props) {
    return (
        <Wrap bgImg={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p> Order Online for Touchless Delivery.</p>
                </ItemText>
            </Fade>
            <Fade bottom>

                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftButtonText}
                        </LeftButton>
                        {props.RightButtonText && <RightButton>
                            {props.RightButtonText}
                        </RightButton>}

                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Buttons>
            </Fade>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height:100vh;
    widht:100vw;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props => `url("/images/${props.bgImg}")`};
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`
const Buttons = styled.div``

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    font-size:12px;
    border-radius:100px;
    opacity:0.85;
    cursor:pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`
