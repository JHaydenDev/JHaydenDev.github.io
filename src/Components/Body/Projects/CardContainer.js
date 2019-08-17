import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
width:30%;

@media (max-width: 760px) {
    width:100%
  }
  }
`;

const ImageBox = styled.div`
height: 40%;
padding:5%;
  }
`;

const Image = styled.img`
width: 90%;
height: auto;
  }
`;

const TextBox = styled.div`
height: 40%;
padding-top:5%
    >p{
        overflow:hidden;
    }
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space Around;
  @media (max-width: 760px) {
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
  
  @media (max-width: 760px) {
    width:90%;
    margin: 1% auto;
  }
`;

const CardContainer = props => {
  console.log(props);
  return (
    <CardBox>
      <ImageBox>
        <Image src={props.project.image} alt="" className="project-thumb" />
      </ImageBox>
      <TextBox>
        <h3>{props.project.heading}</h3>
        <p>{props.project.description}</p>
      </TextBox>
      <LinkBox>
        <StyledLink href={props.project.github}>code</StyledLink>
        <StyledLink href={props.project.hosted}>hosted</StyledLink>
      </LinkBox>
    </CardBox>
  );
};

export default CardContainer;
