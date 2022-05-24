import React from 'react'
import tile1 from '../../src/tile1.png'

function Automation() {
  return (
    <div>
        <div class="services-hero jumbotron jumbotron-fluid sa-enterprise"><div class="overlay text-color-light container-fluid"><h1 class="display-3">DevOps with Azure</h1><p class="lead">Greater Agility, Resilience and Portability by building and deploying apps rapidly.</p></div></div>
        <div class="service-action__container"><div class="flex-container"><div class="title1">Collaborate</div><div class="title2">Speed</div><div class="title3">Innovate</div></div><div class="service-action__jumbotron jumbotron jumbotron-fluid"><div class=""><p class="service-action-description">We help you get to market quicker by integrating DevOps Automation leveraging Containers, CICD and Microservices.
        Achieve business outcomes by adopting DevOps. Our unique capabilities allow us to help you build continuous delivery pipeline, enhance reliability &amp; resilience, balance agility &amp; consistency at scale.
        
        </p><div><button type="button" variant="primary" class="touchInButton deliveryPipeline btn btn-secondary">Get in touch</button></div></div></div></div>
        <div class="container"><div class="row"><div class="col"><div><div class="row"><div class="col-md-12"><h1 class="card-list-header" align="left">Capabilities</h1></div></div><div class="row"><div class="col-12 col-md-4"><div class="card-deck"><div class="mt-4"><a href="/services/simplify-cloud-ops/cicd" style={{cursor: 'pointer'}}><div class="card"><img width="100%" src={tile1} alt="Card image cap" class="card-img-top"/><div class="card-body"><div class="card-title">Continuous Integration and Continuous Deployment</div><div class="card-subtitle"></div><p class="card-text">Build, Integration and Testing process automation</p></div></div></a></div></div></div></div></div></div></div></div>
    </div>
  )
}

export default Automation