export interface BranchMapMarker {
  branch: Branch;
  // Branch
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  options: {
    animation: google.maps.Animation;
  };
  label: string;
  click?: () => void;
}
export interface Branch {
  // Define your properties here
  id: number;
  name: string;
  lat: number; // Add this property
  lng: number;
  postCode: string;
  canton: string;
  loca: string;
  // Add other properties as needed
}
