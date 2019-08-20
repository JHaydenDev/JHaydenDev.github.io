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
          <div>
            <h2>Work Experience</h2>
            <h3>All Quality Inc.</h3>
            <h4>Chicago, IL —Project Manager</h4>
            <div>January 2018 - PRESENT</div>
            <p>
              Duties included writing estimates and scopes of work, managing the
              subcontractors, overseeing job sites, interacting with clients,
              etc.
            </p>
          </div>
          <div>
            <h3>MakeSpace Labs</h3>
            <h4>Chicago, IL —Team Captain</h4>
            <div>July. 2017 - January 2018</div>
            <p>
              Responsibilities here involved job tracking, route tracking and
              planning, and transportation of customer's inventory.
            </p>
          </div>
          <div>
            <h3>Fabian and Son Heating and Cooling</h3>
            <h4>Chicago, IL —Office Manager</h4>
            <div>June 2016 - July 2017</div>
            <p>
              Responsibilities included scheduling for everyone in the company,
              ordering supplies and parts, new hire onboarding, managing the
              company’s advertising portfolio, social media outreach, and a
              variety of other managerial duties.
            </p>
          </div>
          <div>
            <h3>Feld Entertainment</h3>
            <h4>Chicago, IL—Assistant Sales Manager</h4>
            <div>Dec. 2014 - Nov. 2016</div>
            <p>
              Duties included tracking inventory of merchandise, supervising
              vendors, working out logistics of arenas for loading in and out,
              coordinating flights and hotels, handling customer issues, quality
              control, coordinating strategies to meet sales goals, training new
              hires, handling mass quantities of cash going in and out of the
              office, and data entry.
            </p>
          </div>
        </ResumeBox>
        <ResumeBox>
          <div>
            <h2> SKILLS</h2>
            <ul>
              <li>
                Experience with HTML5, CSS, SASS, Javascript, ReactJS, Redux,
                Axios.
              </li>
              <li>Social Media advertising and profile management.</li>
              <li>Proficiency in Microsoft and Google suit.</li>
              <li>Experience with Git.</li>
              <li>Event planning and schedule making.</li>
              <li>Extensive Managerial and customer service skills.</li>
            </ul>
            <h2> GOALS</h2>
            <ul>
              <li>Grow more in Python</li>
              <li>Help nonprofits with web development.</li>
              <li>Grow in UI/UX skills.</li>
            </ul>
            <div>
              <h2>EDUCATION</h2>
              <h3>Lambda School Chicago</h3>
              <div>Chicago IL</div>
              <div>Front End Development</div>
              <div>2018-Present</div>
              <h3>Chicago Python User Group Mentorship Program</h3>
              <div>Chicago, IL</div>
              <div>Python Development</div>
              <div> 2019-Present</div>
            </div>
          </div>
        </ResumeBox>
      </Wrapper>
    );
  }
}

export default Resume;
