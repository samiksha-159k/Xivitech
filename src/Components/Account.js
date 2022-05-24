import React from 'react'
import '../index.css'
import rp2 from '../../src/rp2.png'
import p1 from '../../src/p1.png'
import p2 from '../../src/p2.jpg'
import p3 from '../../src/p3.jpg'
import Arrow from '../../src/Arrow.svg'

function Account() {
  return (
    <div>
      <div class="servicesBannerComponent">
      <div class="collaborate">
      <h4>Let's Collaborate</h4>
      </div>
      <div class="servicesMainDiv">
      <div class="react-reveal" >
      <div class="row">
        <div class="col-md-6">
          <div class="servicesDescription">
            <div class="servicesH2">
              <h2>AI + RPA is what we do</h2>
              </div>
              <div class="servicesH3">
                <h3>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</h3>
              </div>
              <div class="servicesP">
                <a href="/services/AIandRPAautomation"><p>AI + RPA Automation</p>
                <img src={Arrow} alt="arrow-black"/></a>
                </div>
                </div>
                </div>
                <div class="col-md-6">
                  <img src={rp2} className="serviceImage" alt="servicesimage"/>
                </div>
                </div>
                </div>
                <div class="react-reveal" style={{animationDuration: "1000ms",animationDelay: "0ms", animationIterationCount: "1",opacity: "1",animationName: "react-reveal-726174618053309-1"}}>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="servicesDescription">
                        <div class="servicesH2">
                          <h2>Make Bolder Choices</h2>
                          </div>
                          <div class="servicesH3">
                            <h3>Digital focused strategies to realize market-changing ideas</h3>
                            </div>
                            <div class="servicesP"><a href="/services/enterprise-apps"><p>Build Better Apps</p>
                            <img src={Arrow} alt="arrow-black"/></a>
                            </div>
                            </div>
                            </div>
                            <div class="col-md-6"><img class="serviceImage" src={p1} alt="servicesimage"/>
                            </div>
                            </div>
                            </div>
                            <div class="react-reveal" >
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="servicesDescription">
                                    <div class="servicesH2">
                                      <h2>Innovate with Speed</h2>
                                      </div>
                                      <div class="servicesH3">
                                        <h3>Create higher quality software, deliver on customer expectations and business goals</h3>
                                        </div>
                                        <div class="servicesP">
                                          <a href="/services/delivery-pipeline-automation">
                                            <p>DevOps</p>
                                            <img src={Arrow} alt="arrow-black"/></a>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                              <img class="serviceImage" src={p2} alt="servicesimage"/>
                                              </div>
                                              </div>
                                              </div>
                                              <div class="react-reveal" >
                                                <div class="row">
                                                  <div class="col-md-6">
                                                    <div class="servicesDescription">
                                                      <div class="servicesH2">
                                                        <h2>Embrace Cloud</h2>
                                                        </div>
                                                        <div class="servicesH3">
                                                          <h3>With Cloud-First accelerate innovation and optimize performance</h3>
                                                          </div>
                                                          <div class="servicesP"><a href="/services/cloud"><p>Cloud Services</p> <img src={Arrow} alt="arrow-black"/></a>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          <div class="col-md-6">
                                                            <img class="serviceImage" src={p3} alt="servicesimage"/>
                                                            </div>
                                                            </div>
                                                            </div>
               </div>
               </div>
               </div>
               )
}

export default Account