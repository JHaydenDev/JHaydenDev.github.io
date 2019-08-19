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
 width:45%;
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
              My duties include writing estimates and scopes of work, managing
              the subcontractors, overseeing job sites, interacting with
              clients, etc.
            </p>
          </div>
          <div>
            <h3>MakeSpace Labs</h3>
            <h4>Chicago, IL —Team Captain</h4>
            <div>July. 2017 - January 2018</div>
            <p>
              My experience here involves job tracking, route tracking and
              planning, and transportation of customer's inventory.
            </p>
          </div>
          <div>
            <h3>Fabian and Son Heating and Cooling</h3>
            <h4>Chicago, IL —Office Manager</h4>
            <div>June 2016 - July 2017</div>
            <p>
              I have a variety of responsibilities including, but not limited
              to: scheduling for everyone in the company, ordering supplies and
              parts, new hire onboarding, managing our advertising portfolio,
              social media outreach, and a variety of other managerial duties.
            </p>
          </div>
          <div>
            <h3>Feld Entertainment</h3>
            <h4>Chicago, IL—Assistant Sales Manager</h4>
            <div>Dec. 2014 - Nov. 2016</div>
            <p>
              I kept inventory of merchandise, supervised vendors, worked out
              logistics of arenas for loading in and out, coordinated flights
              and hotels, handled customer issues, performed quality control,
              coordinated strategies to meet sales goals, trained new hires,
              worked with the books to maintain correct numbers, handled mass
              quantities of cash going in and out of the office, made deposits
              for the show and various data entry tasks.
            </p>
          </div>
        </ResumeBox>
        <ResumeBox>
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
            <li>Work more in Python and C#.</li>
            <li>Help nonprofits with web development.</li>
            <li>Grow my UI/UX skills.</li>
          </ul>
        </ResumeBox>
      </Wrapper>
    );
  }
}

export default Resume;
