import {
    RadarRing,
    RadarQuadrant,
    RadarEntry,
  } from '@backstage/plugin-tech-radar';

import dataEntries from './entries.json'

export const quadrants = new Array<RadarQuadrant>();
quadrants.push({ id: 'infrastructure', name: 'Infrastructure' });
quadrants.push({ id: 'frameworks', name: 'Frameworks' });
quadrants.push({ id: 'languages', name: 'Languages' });
quadrants.push({ id: 'process', name: 'Process' });

export const rings = new Array<RadarRing>();
rings.push({ id: 'use', name: 'USE', color: '#93c47d' });
rings.push({ id: 'trial', name: 'TRIAL', color: '#93d2c2' });
rings.push({ id: 'assess', name: 'ASSESS', color: '#fbdb84' });
rings.push({ id: 'hold', name: 'HOLD', color: '#efafa9' });

  
export const entries = new Array<RadarEntry>();

  for(const [key,value] of Object.entries(dataEntries)){
    entries.push({
      timeline: [
      {
        moved: value.timeline[0].moved,
        ringId: value.timeline[0].ringId,
        date: new Date(value.timeline[0].date),
        description: value.timeline[0].description
      },
      ],
      url: value.url,
      key: key,
      id: key,
      title: key.charAt(0).toUpperCase() + key.slice(1),
      quadrant: value.quadrant
    });
  }

  
 

  





  

 

 

 

  



 

 

 








  
      
