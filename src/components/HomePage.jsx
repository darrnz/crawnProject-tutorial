import React from 'react'
import Directory from './directory/Directory'
import styled from 'styled-components'

export default function HomePage() {
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    )
}


const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`;