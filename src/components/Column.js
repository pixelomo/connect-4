import React from "react";
import styled from "styled-components";

class Column extends React.Component {

    render() {
        return (
            <Col >

            </Col>
        );
    }
}

export default Column;

////////////////////////// CSS //////////////////////////
const Col = styled.div`
    width: 140px;
    padding: 5px 0;
    background: dodgerblue;
    display: inline-block;
    vertical-align: top;
`;
