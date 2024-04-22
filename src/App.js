import './App.css';
import dalogo from './dalogo.png';
import spaceship from './spaceship.png';
import classSolar from './Solar.png';
import classArc from './Arc.png';
import classVoid from './Void.png';
import classStrand from './Strand.png';
import shaxx from './Shax.png';
import stphoto from './solartitan.png';
import vtphoto from './voidtitan.png';
import atphoto from './arctitan.png';
import strphoto from './strandtitan.png';
import nessus from './nessussky.png';
import neomuna from './neomunasky.png';
import raid1 from './raid1.png';
import raid2 from './raid2.png';
import voice2 from './shaxxvoicehammer.mp3';
//import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


const supabase = createClient("https://slkvzurbgjygllqmpdmi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsa3Z6dXJiZ2p5Z2xscW1wZG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NTM2MDEsImV4cCI6MjAyOTEyOTYwMX0.gsMQ6qBqZIUARj3cUgoJiC8h-zH7FqxHgAh5Cu1LExs");
//First Data Source
const supabase2 = createClient("https://mlohftoczndvnmicvjbd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sb2hmdG9jem5kdm5taWN2amJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NDEwMjEsImV4cCI6MjAyOTMxNzAyMX0.i5KF9RR1fmTAPRScaVnIpHzKLTBP4nArKWN37po7rhg");
//Second Data Source
async function getBounty(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(1)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty');
    d2bounty.innerHTML += `<tr>${bounty.Bounty1}<tr>`;
  }
}

getBounty();

async function getBounty2(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(1)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty2');
    d2bounty.innerHTML += `<tr>${bounty.Bounty2}<tr>`;
  }
}

getBounty2();

async function getBounty3(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(1)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty3');
    d2bounty.innerHTML += `<tr>${bounty.Bounty3}<tr>`;
  }
}

getBounty3();

async function getBounty4(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(1)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty4');
    d2bounty.innerHTML += `<tr>${bounty.Bounty4}<tr>`;
  }
}

getBounty4();

async function getBounty5(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(2)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty5');
    d2bounty.innerHTML += `<tr>${bounty.Bounty1}<tr>`;
  }
}

getBounty5();

async function getBounty6(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(2)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty6');
    d2bounty.innerHTML += `<tr>${bounty.Bounty2}<tr>`;
  }
}

getBounty6();

async function getBounty7(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(2)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty7');
    d2bounty.innerHTML += `<tr>${bounty.Bounty3}<tr>`;
  }
}

getBounty7();

async function getBounty8(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(2)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty8');
    d2bounty.innerHTML += `<tr>${bounty.Bounty4}<tr>`;
  }
}

getBounty8();

async function getBounty9(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(3)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty9');
    d2bounty.innerHTML += `<tr>${bounty.Bounty1}<tr>`;
  }
}

getBounty9();

async function getBounty10(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(3)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty10');
    d2bounty.innerHTML += `<tr>${bounty.Bounty2}<tr>`;
  }
}

getBounty10();

async function getBounty11(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(3)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty11');
    d2bounty.innerHTML += `<tr>${bounty.Bounty3}<tr>`;
  }
}

getBounty11();

async function getBounty12(){
  let { data: Bounties } = await supabase2
  .from('bountie')
  .select('*')
  .filter('id', 'in', '(3)')

  for (let bounty of Bounties) {
    let d2bounty = document.getElementById('display_bounty12');
    d2bounty.innerHTML += `<tr>${bounty.Bounty4}<tr>`;
  }
}

getBounty12();


async function getLoadout(){
  let { data: loadouts } = await supabase
  .from('loadouts')
  .select('*')
  .filter('id', 'in', '(1)')

  for (let loadout of loadouts) {
    let d2loadout = document.getElementById('display_loadout');
    d2loadout.innerHTML += `<li>${loadout.Helment}</li><li>${loadout.Gauntlets}</li><li>${loadout.Chest}</li><li>${loadout.Boots}</li><li>${loadout.ClassItem}</li>`;
  }
}

getLoadout();

async function getLoadout2(){
  let { data: loadouts } = await supabase
  .from('loadouts')
  .select('*')
  .filter('id', 'in', '(2)')

  for (let loadout of loadouts) {
    let d2loadout = document.getElementById('display_loadout2');
    d2loadout.innerHTML += `<li>${loadout.Helment}</li><li>${loadout.Gauntlets}</li><li>${loadout.Chest}</li><li>${loadout.Boots}</li><li>${loadout.ClassItem}</li>`;
  }
}

getLoadout2();


async function getLoadout3(){
  let { data: loadouts } = await supabase
  .from('loadouts')
  .select('*')
  .filter('id', 'in', '(3)')

  for (let loadout of loadouts) {
    let d2loadout = document.getElementById('display_loadout3');
    d2loadout.innerHTML += `<li>${loadout.Helment}</li><li>${loadout.Gauntlets}</li><li>${loadout.Chest}</li><li>${loadout.Boots}</li><li>${loadout.ClassItem}</li>`;
  }
}

getLoadout3();

async function getLoadout4(){
  let { data: loadouts } = await supabase
  .from('loadouts')
  .select('*')
  .filter('id', 'in', '(4)')

  for (let loadout of loadouts) {
    let d2loadout = document.getElementById('display_loadout4');
    d2loadout.innerHTML += `<li>${loadout.Helment}</li><li>${loadout.Gauntlets}</li><li>${loadout.Chest}</li><li>${loadout.Boots}</li><li>${loadout.ClassItem}</li>`;
  }
}

getLoadout4();


function App() {
  function output() {
    new Audio(voice2).play()
  }


  return (
    <div class="bg-success-subtle bg-opacity-50">
      <div class="container-fluid">
        <div class="row g-0">
          <div class="col-10">
            <h1 class="display-1 mb-0">
              Destiny Account Viewer
            </h1>
            <p class="lead ms-4 fw-normal fst-italic text-black-50">May the light shine through you Guardian ~Unknown</p>
          </div>
          <div class="col-2">
            <img src={dalogo} class="img-fluid mt-3 me-2 float-end" width="80" alt="Created DA logo from figma"></img>
          </div>
        </div>
        <div class="w-100 mh-50">
          <div class="row">
            <img src={spaceship} class="h-50 p-0 img-fluid" alt='sapceship from destiny 2'></img>
          </div>
        </div>
        <div class="row">
          <h2 class="display-4 text-center fw-bold mt-4">Welcome Guardian</h2>
        </div>
        <div class="row mt-5">
          <h1 class="display-3">This Weeks News:</h1>
          <div class="col-4 me-0 pe-0">
              <div class="card ms-5 mt-5">
                <h1 class="card-header bg-dark-subtle">The Cabal</h1>
                  <div class="card-body bg-body-secondary">
                    <h1 class="card-title">Cabal Touch Down on Mars to Collect Mine Depots</h1>
                    <img src={nessus} class="h-50 p-0 img-fluid" alt='sapceship from destiny 2'></img>
                    <p class="card-text">In recent turn of events, the Cabal have decided to make an advancedment onto our mining depots on Mars.
                    They plan to run our mines dry and then destroy them to negate any future use. Guardian its up to you to join in the fight
                    to proctect our mines.</p>
                  </div>

              </div>
          </div>
          <div class="col-4 me-0 pe-0">
            <div class="card mt-5 ms-0">
                <h1 class="card-header bg-dark-subtle">The Tormented</h1>
                  <div class="card-body bg-body-secondary">
                    <h1 class="card-title">Tormentors Strike Neomuna, Neptune</h1>
                    <img src={neomuna} class="h-50 p-0 img-fluid" alt='sapceship from destiny 2'></img>
                    <p class="card-text">After the Veil opened, Tormentors started their assult on Neomuna. The wish to continue to hinder our progress to finding the Whitness. Join the Cloud Strikers on the front lines and 
                    show them what us guardians are made of.</p>
                  </div>

              </div>
          </div>
          <div class="col-4 ms-0 ps-0">
              <button onClick={output} class="btn float-end mb-5 w-50">
                <img src={shaxx} class="h-50 p-0 img-fluid float-end" alt='Lord Shaxx from D2'></img>
              </button>
          </div>
        </div>

        <div class="row text-center">
         <h1 class="display-2">This Weeks Raids</h1>
        </div>

      <div class="row mb-5">
      <div class="col-6">
          <div class="position-relative">
            <img src={raid1} class="mt-5 img-fluid opacity-50" alt='Screenshot taken ingame from D2'></img>
            <div class="position-absolute top-50 start-50 translate-middle">
              <h1 class="fst-italic text-center mt-5">Root of Nightmares</h1>
              <p class="text-center">Travers the Pyramid and fight off against your foes to find more informaiton about the Traveler</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="position-relative">
            <img src={raid2} class="mt-5 img-fluid opacity-50" alt='Screenshot taken ingame from D2'></img>
            <div class="position-absolute top-50 start-50 translate-middle">
              <h1 class="fst-italic text-center mt-5">Crotas End</h1>
              <p class="text-center">Enter the Pits and face off against Crota to secure the moon</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
         <h1 class="display-2 mt-5">Weekly Bounties:</h1>
      </div>
      <div class="row">
        <div class="col-4">
          <table class="table w-75 text-center ms-5 mt-5 bg-body-secondary">
            <thead>
              <tr>
                <th scope="col" class="p-0">
                  <h5 class="display-6 fw-bold bg-dark-subtle m-0">Gunsmith</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="display_bounty"></td>
              </tr>
              <tr>
                <td id="display_bounty2"></td>
              </tr>
              <tr>
                <td id="display_bounty3"></td>
              </tr>
              <tr>
                <td id="display_bounty4"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-4">
          <table class="table w-75 text-center ms-5 mt-5 bg-body-secondary">
          <thead>
              <tr>
                <th scope="col" class="p-0">
                  <h5 class="display-6 fw-bold bg-dark-subtle m-0">EDZ</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="display_bounty5"></td>
              </tr>
              <tr>
                <td id="display_bounty6"></td>
              </tr>
              <tr>
                <td id="display_bounty7"></td>
              </tr>
              <tr>
                <td id="display_bounty8"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-4">
        <table class="table w-75 text-center ms-5 mt-5 bg-body-secondary">
          <thead>
              <tr>
                <th scope="col" class="p-0">
                  <h5 class="display-6 fw-bold bg-dark-subtle m-0">Raids/Dungeons</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="display_bounty9"></td>
              </tr>
              <tr>
                <td id="display_bounty10"></td>
              </tr>
              <tr>
                <td id="display_bounty11"></td>
              </tr>
              <tr>
                <td id="display_bounty12"></td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>

      <div class="row text-center">
         <h1 class="display-2 mt-5">Current Loadouts</h1>
        </div>
        
        <div class="row text-center mt-5">
          <div class="col-3">
            <div class="card mb-3 bg-body-secondary">
              <div class="row g-0">
                <div class="collapse" id="collapse1">
                  <div class="col-md-5">
                    <img src={stphoto} class="h-50 p-0 img-fluid float-start" alt='Subclass Solar titan from D2'></img>
                  </div>
                  <div class="col-md-12">
                    <div class="card card-body border-0 bg-body-secondary">
                      <ul id="display_loadout" class="list-group fs-4 list-unstyled">
                
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
              <img src={classSolar} class="h-50 p-0 img-fluid" alt='Subclass Solar from D2'></img>
            </button>
            <p class="fst-italic  fs-4">Solar</p>
          </div>

          <div class="col-3">
            <div class="card mb-3 bg-body-secondary">
              <div class="row g-0">
                <div class="collapse" id="collapse2">
                  <div class="col-md-5">
                    <img src={atphoto} class="h-50 p-0 img-fluid float-start" alt='Subclass Arc titan from D2'></img>
                  </div>
                  <div class="col-md-12">
                    <div class="card card-body border-0 bg-body-secondary">
                      <ul id="display_loadout2" class="list-group fs-4 list-unstyled">
                
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
              <img src={classArc} class="h-50 p-0 img-fluid" alt='Subclass Arc from D2'></img>
            </button>
              <p class="fst-italic  fs-4">Arc</p>
          </div>

          <div class="col-3">
            <div class="card mb-3 bg-body-secondary">
              <div class="row g-0">
                <div class="collapse" id="collapse3">
                  <div class="col-md-5">
                    <img src={vtphoto} class="h-50 p-0 img-fluid float-start" alt='Subclass Void titan from D2'></img>
                  </div>
                  <div class="col-md-12">
                    <div class="card card-body border-0 bg-body-secondary">
                      <ul id="display_loadout3" class="list-group fs-4 list-unstyled">
                
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
              <img src={classVoid} class="h-50 p-0 img-fluid" alt='Subclass Void from D2'></img>
            </button>
              <p class="fst-italic  fs-4">Void</p>
          </div>

          <div class="col-3">
            <div class="card mb-3 bg-body-secondary">
              <div class="row g-0">
                <div class="collapse" id="collapse4">
                  <div class="col-md-5">
                    <img src={strphoto} class="h-50 p-0 img-fluid float-start" alt='Subclass Strand titan from D2'></img>
                  </div>
                  <div class="col-md-12">
                    <div class="card card-body border-0 bg-body-secondary">
                      <ul id="display_loadout4" class="list-group fs-4 list-unstyled">
                
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <button class="btn w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
            <img src={classStrand} class="h-50 p-0 img-fluid" alt='Subclass Void from D2'></img>
          </button>
              <p class="fst-italic  fs-4">Strand</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
