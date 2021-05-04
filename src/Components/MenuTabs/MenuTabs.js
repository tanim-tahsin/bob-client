import React from 'react';
import Bobase from '../Bobase/Bobase';
import Zoobase from '../ZooBase/Zoobase';

const MenuTabs = () => {
  return (
    <div className="container mt-4">
      <ul  class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Zoology</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Botany</button>
  </li>
  {/* <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li> */}
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <table class="table text-start">
  <thead>
    <tr>
      <th className='text-start' scope="col">অধ্যায়</th>
      <th className='text-start' scope="col">বিষয়</th>
      <th className='text-end' scope="col">ক্লাস</th>
      <th className='text-center' scope="col">এক্সাম</th> 
    </tr>
  </thead>
  </table>
    <Zoobase/>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <table class="table text-start">
  <thead>
    <tr>
      <th className='text-start' scope="col">অধ্যায়</th>
      <th className='text-start' scope="col">বিষয়</th>
      <th className='text-end' scope="col">ক্লাস</th>
      <th className="text-center" scope="col">এক্সাম</th> 
    </tr>
  </thead>
  </table>
  <Bobase/>
  </div>
  {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
</div>
    </div>
  );
};

export default MenuTabs;