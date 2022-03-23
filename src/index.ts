/// <reference types="@types/google.maps" />
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const customMap = new CustomMap('map');
const user = new User();
const comapny = new Company();

customMap.addMarker(user);
customMap.addMarker(comapny);