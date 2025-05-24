import React from "react";
import { Card, Button , Row , Col} from "react-bootstrap";
import { Link } from "react-router-dom"
import scholarshipimage4 from "../../images/scholarshipimage4.jpeg";
import need from "../../images/need.jpg";
import scholarshipimage2 from "../../images/scholarshipimage2.jpeg";
import minority from "../../images/minority.jpg";
import research from "../../images/research.jpg";
import scholarshipimage1 from "../../images/scholarshipimage1.jpeg";

const ScholarshipTypes = () => {



  return (
    <>
      <section id="services">
        <div className="container service-section">
          <br />
          <Row>
          <div
            className="grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Merit Based Scholarship</span>
                    <img src={scholarshipimage4} alt="scholarshipimage4" />
                    
                    <p>
                    Rewarding academic excellence. 
                    Scholarships for high-achieving students.
                    </p>
                    <Link to={"/merit-based-scholarships"}>
                      <Button variant="primary" style={{ width: "200px" }}>
                        View Scholarships
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Need Based Scholarship</span>
                    <img src={need} alt="need" />
                    <p>
                    Financial support for deserving students. 
                    Overcoming financial barriers to education.
                    </p>
                    <Link to={"/need-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>International Scholarships</span>
                    <img src={scholarshipimage2} alt="scholarshipimage2" />
                    <p>
                    Global opportunities, local impact. 
                    Funding for international students.
                    </p>
                    <Link to={"/international-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div></Row>
          <Row>
          <div
            className="grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Minority Scholarship</span>
                    <img src={minority} alt="minority" />
                    <p>
                    Empowering diverse voices. 
                    Scholarships for underrepresented groups.
                    </p>
                    <Link to={"/minority-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Research Scholarship</span>
                    <img src={research} alt="research" />
                    <p>
                    Fueling innovation, shaping the future. 
                    Scholarships for research-oriented students.
                    </p>
                    <Link to={"/research-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }}>
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>All Scholarships</span>
                    <img src={scholarshipimage1} alt="scholarshipimage1" />
                    <p>
                    Your journey, your future. 
                    Explore all funding opportunities.
                    </p>
                    <Link to="/view-scholarships">
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div></Row>
        </div>
      </section>
    </>
  );
};

export default ScholarshipTypes;
