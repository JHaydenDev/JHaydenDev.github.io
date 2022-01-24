import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  padding-top: 2%;
  padding-bottom: 2%;
  min-height: 50vh;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

const Card = styled.div`
  margin-top:4%;
  border: 1px solid white;
  padding:7%;
  &:hover {
    border: 1px solid aqua;
    color: aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  }
`;

const ResumeBox = styled.div`
  width: 45%;
`;

class Resume extends Component {
  render() {
    return (
      <Wrapper>
        <ResumeBox>
          <Fade cascade>
            <h2>WORK EXPERIENCE</h2>
            <Card>
              <div>
                <div>
                  <h3>Syngenta</h3>
                  <h4>Chicago, IL —Fullstack Developer</h4>
                  <div>September 2021 - PRESENT</div>
                  <p>
                    Duties: Developing several digital products for the agriculture space.  
                  </p>
                </div>
                <h3>ThinkTank Development</h3>
                <h4>Chicago, IL —Fullstack Developer</h4>
                <div>July 2020 - PRESENT</div>
                <p>
                  Duties: Direct a team of developers for various freelance
                  projects for a variety of clients in several different
                  markets.
                </p>
              </div>
              <div>
                <h3>Lambda School</h3>
                <h4>Chicago, IL —Project Manager / Team Lead</h4>
                <div>August 2019 - September 2020</div>
                <p>
                  Duties: Managing students in an admin capacity, reviewing
                  code, leading stand ups, and running code challenges.
                </p>
              </div>
              <div>
                <h3>All Quality Inc.</h3>
                <h4>Chicago, IL —Project Manager</h4>
                <div>January 2018 - August 2019</div>
                <p>
                  Duties: Writing estimates / scopes of work, managing the
                  subcontractors, overseeing job sites, interacting with
                  clients, etc.
                </p>
              </div>
              <div></div>
            </Card>
            <h2>EDUCATION</h2>
            <Card>
              <div>
                <h3>Lambda School Chicago</h3>
                <div>Chicago IL</div>
                <div>Front End Development</div>
                <div>2018-2020</div>
              </div>
            </Card>
            <h2> GOALS</h2>
            <Card>
              <ul>
                <li>Build out a non-profit product and learn the business structure involved.</li>
                <li>Develop an exstensive GraphQL database.</li>
                <li>
                  Continue to learn new programming concepts along with UI/UX
                  design.
                </li>
              </ul>
            </Card>
          </Fade>
        </ResumeBox>
        <ResumeBox>
          <Fade cascade>
            <div>
              <h2>SKILLS / TECHNOLOGIES</h2>
              <Card>
                <ul>
                  <h2>LANGUAGES</h2>
                  <li>HTML5 / CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>PHP</li>
                  <h2>LIBRARIES AND FRAMEWORKS</h2>
                  <li>ReactJS / React Native</li>
                  <li>Node.JS / Express</li>
                  <li>GraphQL</li>
                  <li>CSS libraries</li>
                  <li>NPM / Yarn</li>
                  <li>Jest</li>
                  <h2>DATABASES</h2>
                  <li>S3</li>
                  <li>SQLite</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <h2>DEPLOYMENT</h2>
                  <li>Heroku</li>
                  <li>Zeit</li>
                  <li>Netlify</li>
                  <li>AWS</li>
                </ul>
              </Card>
              <h2>VOLUNTEER WORK</h2>
              <Card>
                <div>
                  <div>
                    <h3>Logan Squarist</h3>
                    <h4>Chicago, IL —Staff Web Developer</h4>
                    <div>April 2019 - PRESENT</div>
                    <p>
                      Duties: Managing user database issues. PHP, HTML editing.
                      Web design consulting.
                    </p>
                  </div>
                  <div>
                    <h3>Taproot Foundation</h3>
                    <h4>Chicago, IL —Web Dev Consultant</h4>
                    <div>April 2019 - PRESENT</div>
                    <p>
                      Duties: Consult with nonprofits on solutions for their web
                      development needs
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Fade>
        </ResumeBox>
      </Wrapper>
    );
  }
}

export default Resume;
