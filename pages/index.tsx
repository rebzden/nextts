import React from 'react';
import styled from 'styled-components';

export default class extends React.Component {
  render() {
    const StyledHeader = styled.div`
      color: red;
    `
    return (
      <div>
        <StyledHeader>Hello Net.js</StyledHeader>
      </div>
    )
  }
}