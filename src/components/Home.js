import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
            title="Model S" 
            backgroundImg="model-s.jpg" 
            leftButtonText="Custom Order" 
            RightButtonText="Existing Inventory"
           />
            <Section 
            title="Model X" 
            backgroundImg="model-x.jpg" 
            leftButtonText="Custom Order" 
            RightButtonText="Existing Inventory"
           />

            <Section 
            title="Model Y" 
            backgroundImg="model-y.jpg" 
            leftButtonText="Custom Order" 
            RightButtonText="Existing Inventory"
           />
            <Section 
            title="Model 3" 
            backgroundImg="model-3.jpg" 
            leftButtonText="Custom Order" 
            RightButtonText="Existing Inventory"
           />
            <Section 
            title="Accessories" 
            backgroundImg="accessories.jpg" 
            leftButtonText="Custom Order" 
           />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    widht:100vw;
`