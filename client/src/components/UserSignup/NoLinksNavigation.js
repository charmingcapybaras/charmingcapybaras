import React, { Component } from 'react';

const NoLinksNavigation = () => {
  return(
       <div class="col-lg-4 col-md-12 col-sm-12 navigation animated fadeIn">
         <a class="navbar-brand" href="#">Friday Hero</a>

         <h4 class="promo">Be a Friday Hero</h4>

         <ul class="nav flex-column">
           <li class="nav-item">
             <a class="nav-link active">Receive your weekly Friday Hero agenda</a>
           </li>
           <li class="nav-item">
             <a class="nav-link">Personalize your Friday experiences</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" >No more wonering what to do with your friends on Friday</a>
           </li>
           <li class="nav-item">
             <a class="nav-link">Make reservations, buy concert tickets and more</a>
           </li>
         </ul>
       </div>
      )
};

export default NoLinksNavigation;
