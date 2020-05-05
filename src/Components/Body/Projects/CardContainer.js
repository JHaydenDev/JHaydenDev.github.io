import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const CardBox = styled.div`
  align-self: center;
  width: 30%;
  margin: 1% 1%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid white;
  @media (max-width: 850px) {
    width: 95%;
    height:auto;
  }
`;

const ImageBox = styled.div`
padding:3%;
@media (max-width: 850px) {
  width: 95%;
  
  
}
  }
`;

const Image = styled.img`
max-width: -webkit-fill-available;
height:230px;
@media (max-width: 850px) {
  height: auto
  width:95%
  margin:2%
}
  }
`;

const TextBox = styled.div`
  height: 250 px;
  padding: 4%;
  text-overflow: ellipsis;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space Around;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  margin:2%
  padding: 2%;
  border: 1px solid white;
  width:45%;
  &:hover{
    border: 1px solid aqua;
    color:aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,1);
  }
  
  @media (max-width: 850px) {
    width:90%;
    margin: 1% auto;
  }
`;

const CardContainer = (props) => {
  console.log(props);
  return (
    <CardBox>
      <Fade cascade>
        <ImageBox>
          <Image src={props.project.image} alt="" className="project-thumb" />
        </ImageBox>
        <TextBox>
          <h3>{props.project.heading}</h3>
          <div>{props.project.description}</div>
        </TextBox>
        <LinkBox>
          <StyledLink href={props.project.github}>Code</StyledLink>
          <StyledLink href={props.project.hosted}>Hosted</StyledLink>
        </LinkBox>
      </Fade>
    </CardBox>
  );
};

export default CardContainer;
