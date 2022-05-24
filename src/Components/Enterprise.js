import React from 'react'
import tile1 from '../../src/tile1.png'
import tile2 from '../../src/tile2.png'

function Enterprise() {
  return (
    <div>
        <div class="services-hero jumbotron jumbotron-fluid sa-enterprise"><div class="overlay text-color-light container-fluid"><h1 class="display-3">Cloud Native = Future Proof</h1><p class="lead">Achieve Competitive Advantage with Agility, Reliability, Responsiveness and Speed.</p></div></div>
        <div class="service-action__container"><div class="flex-container"><div class="title1">Speed</div><div class="title2">Agility</div><div class="title3">Cost-Effective</div></div><div class="service-action__jumbotron jumbotron jumbotron-fluid"><div class=""><p class="service-action-description">We know cloud. We help unlock real value by helping you transform your business by virtue of cloud transformation. 
         Being Cloud-Native enables Rapid Responsiveness, Innovative Features, and Zero Downtime. We help you accelerate business velocity and growth by embracing rapid change, large scale and resilence. Our expertise and focus on the Twelve-Factor App and the API First principles allow us to build true cloud-native apps.
        </p><div><button type="button" variant="primary" class="touchInButton enterpriseApps btn btn-secondary">Get in touch</button></div></div></div></div>
        <div class="container"><div class="row"><div class="col"><div><div class="row"><div class="col-md-12"><h1 class="card-list-header" align="left">Capabilities</h1></div></div><div class="row"><div class="col-12 col-md-4"><div class="card-deck"><div class="mt-4"><a href="/services/enterprise-apps/application-development" style={{cursor: 'pointer'}}><div class="card"><img width="100%" src={tile1}alt="Card image cap" class="card-img-top"/><div class="card-body"><div class="card-title">Build Apps - Deliver New apps Users Love</div><div class="card-subtitle"></div><p class="card-text"></p></div></div></a></div></div></div><div class="col-12 col-md-4"><div class="card-deck"><div class="mt-4"><a href="/services/enterprise-apps/application-modernization"  style={{cursor: 'pointer'}}><div class="card"><img width="100%" src={tile2} alt="Card image cap" class="card-img-top"/><div class="card-body"><div class="card-title">Modernize Apps - Rearchitect Valuable Legacy Apps</div><div class="card-subtitle"></div><p class="card-text"></p></div></div></a></div></div></div></div></div></div></div></div>
    </div>
  )
}

export default Enterprise