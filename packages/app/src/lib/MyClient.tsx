import {
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';
import { entries,rings,quadrants } from './data';

  
  export class MyOwnClient implements TechRadarApi {
    async load(): Promise<TechRadarLoaderResponse> {
      // if needed id prop can be used to fetch the correct data
    
      return {entries,rings,quadrants};
    }
  }
