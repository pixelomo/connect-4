import React from "react";
import styled from "styled-components";

class Slot extends React.Component {
  render() {
    // const { name, img, gender, age, icon, programs, role, url, videoLink } = this.props;
    return (
      <SlotComponent>
        <div className="circle"></div>
      </SlotComponent>
    );
  }
}

export default Slot;

////////////////////////// CSS //////////////////////////
const SlotComponent = styled.div`
  background-color: dodgerblue;
  .circle{
    background: white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 10px;
    transition: .3s ease-in-out;
    margin: 14px auto;
    &:hover{cursor: pointer}
  }
`;