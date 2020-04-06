import React, { Component } from "react";
import styled from "styled-components";

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
const ResumeBox = styled.div`
  width: 45%;
`;

class Resume extends Component {
  render() {
    return (
      <Wrapper>
        <ResumeBox>
          <h2>Work Experience</h2>
          <div>
            <h3>Lambda School</h3>
            <h4>Chicago, IL —Project Manager / Team Lead</h4>
            <div>August 2019 - PRESENT</div>
            <p>
              Duties: Managing students in an admin capacity, reviewing code,
              leading stand ups, and running code challenges.
            </p>
          </div>
          <div>
            <h3>All Quality Inc.</h3>
            <h4>Chicago, IL —Project Manager</h4>
            <div>January 2018 - August 2019</div>
            <p>
              Duties: Writing estimates / scopes of work, managing the
              subcontractors, overseeing job sites, interacting with clients,
              etc.
            </p>
          </div>
          <div>
            <h3>MakeSpace Labs</h3>
            <h4>Chicago, IL —Team Captain</h4>
            <div>July. 2017 - January 2018</div>
            <p>
              Duties: Job tracking, route tracking and planning, and
              transportation of customer's inventory.
            </p>
          </div>
          <div>
            <h3>Fabian and Son Heating and Cooling</h3>
            <h4>Chicago, IL —Office Manager</h4>
            <div>June 2016 - July 2017</div>
            <p>
              Duties: Scheduling for everyone in the company, ordering supplies
              and parts, new hire onboarding, managing the company’s advertising
              portfolio, social media outreach, and a variety of other
              managerial duties.
            </p>
          </div>
          <div>
            <h3>Feld Entertainment</h3>
            <h4>Chicago, IL—Assistant Sales Manager</h4>
            <div>Dec. 2014 - Nov. 2016</div>
            <p>
              Duties: Tracking inventory of merchandise, supervising vendors,
              working out the logistics of arenas for loading in and out,
              coordinating flights and hotels, handling customer issues, quality
              control, coordinating strategies to meet sales goals, training new
              hires, handling mass quantities of cash going in and out of the
              office, and data entry.
            </p>
          </div>
        </ResumeBox>
        <ResumeBox>
          <div>
            <h2>SKILLS/TECHNOLOGIES</h2>
            <ul>
              <li>HTML5, CSS, SASS, Javascript, ReactJS, Redux, Axios.</li>
              <li>NodeJS, SQL, Express.</li>
              <li>Proficiency in Microsoft and Google suit.</li>
              <li>Experience with Git workflow.</li>
              <li>Event planning and schedule making.</li>
              <li>Extensive Managerial and customer service skills.</li>
            </ul>
            <h2> GOALS</h2>
            <ul>
              <li>Learn new front end libraries and frameworks.</li>
              <li>Develop a Python based backend.</li>
              <li>
                Continue to learn new programming concepts along with UI/UX
                design.
              </li>
            </ul>
            <div>
              <h2>EDUCATION</h2>
              <h3>Lambda School Chicago</h3>
              <div>Chicago IL</div>
              <div>Front End Development</div>
              <div>2018-Present</div>
            </div>
          </div>
        </ResumeBox>
      </Wrapper>
    );
  }
}

export default Resume;
