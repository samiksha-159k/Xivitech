import React from 'react'
import tile1 from '../../src/tile1.png'
import tile2 from '../../src/tile2.png'

function Cloud() {
  return (
    <div>
        <div class="services-hero jumbotron jumbotron-fluid sa-cloud" ><div class="overlay text-color-light container-fluid"><h1 class="display-3">Cloud Transition = Business Outcomes</h1><p class="lead">Rapidly - Rehost, Refactor, Rearchitect, Rebuild and Replace applications to transform and achieve business goals.</p></div></div>
        <div class="service-action__container"><div class="flex-container"><div class="title1">On-Demand</div><div class="title2">Transformation</div><div class="title3">Utilization</div></div><div class="service-action__jumbotron jumbotron jumbotron-fluid"><div class=""><p class="service-action-description">Achieve business outcomes by transforming to cloud. Our unique capabilities allow us to help you,  Discover New Revenue Streams, Reduce Cycle Time, Bring Scale and Reliability, Decrease Time to Market, Future Proof your Digital Estate.
        Why stop here? Go beyond with adopting cloud to integrate new forms of technologies to speed up, automate and improve your business. Cloud Computing integrates technologies such as Artificial Intelligence (AI), Machine Learning, Big Data Analytics, and the Internet of Things (IoT), helping you to achieve your business goals.</p><div><button type="button" variant="primary" class="touchInButton cloudServicesHome btn btn-secondary">Get in touch</button></div></div></div></div>
        <div class="container"><div class="row"><div class="col"><div><div class="row"><div class="col-md-12"><h1 class="card-list-header" align="left">Capabilities</h1></div></div><div class="row"><div class="col-12 col-md-4"><div class="card-deck"><div class="mt-4"><a href="/services/cloud/microsoft-azure" style={{cursor: "pointer"}}><div class="card"><img width="100%" src={tile1} alt="Card image cap" class="card-img-top"/><div class="card-body"><div class="card-title">Cloud Services for Microsoft Azure </div><div class="card-subtitle">Innovation, Scale, DevOps, Security &amp; Compliance with Azure Cloud</div><p class="card-text"></p></div></div></a></div></div></div><div class="col-12 col-md-4"><div class="card-deck"><div class="mt-4"><a href="/services/cloud/aws" style={{cursor: "pointer"}}><div class="card"><img width="100%" src={tile2} alt="Card image cap" class="card-img-top"/><div class="card-body"><div class="card-title">Cloud Services for AWS </div><div class="card-subtitle">Innovation, Scale, DevOps, Security &amp; Compliance with AWS</div><p class="card-text"></p></div></div></a></div></div></div></div></div></div></div></div>
    </div>
  )
}

export default Cloud