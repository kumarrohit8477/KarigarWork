import { ImageSourcePropType } from 'react-native';

export interface Category {
  id: string;
  title: string;
  icon: ImageSourcePropType;
}

export interface ServiceItem {
  id: string;
  name: string;
  rating: string;
  reviews: string;
  price: string;
  features: string[];
  image: ImageSourcePropType;
}

export interface ServiceSection {
  id: string;
  title: string;
  items: ServiceItem[];
}

/* ---------- ASSETS ---------- */

const ASSETS = {
  repair: require('@/assets/images/bed.png'),
};

/* ---------- CATEGORIES ---------- */

export const CATEGORIES: Category[] = [
  { id: 'furniture', title: 'Furniture\nRepair', icon: ASSETS.repair },
  { id: 'bed', title: 'Bed Repair', icon: ASSETS.repair },
  { id: 'door', title: 'Doors &\nWindows', icon: ASSETS.repair },
  { id: 'kitchen', title: 'Kitchen\nRepair', icon: ASSETS.repair },
  { id: 'drawer', title: 'Drawer &\nChannels', icon: ASSETS.repair },
  { id: 'polish', title: 'Polishing &\nFinishing', icon: ASSETS.repair },
];

/* ---------- SERVICE SECTIONS ---------- */

export const SECTIONS: ServiceSection[] = [
  {
    id: 'furniture',
    title: 'Furniture Repair Services',
    items: [
      {
        id: 'chair_structural',
        name: 'Chair Structural Repair',
        rating: '4.8',
        reviews: '324',
        price: '199',
        features: [
          'Loose joint reinforcement',
          'Leg replacement / tightening',
          'Glue & clamp treatment',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'table_restoration',
        name: 'Table Repair & Restoration',
        rating: '4.7',
        reviews: '218',
        price: '249',
        features: [
          'Surface damage correction',
          'Laminate re-fixing',
          'Structural stabilization',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'sofa_wood_fix',
        name: 'Wooden Sofa Frame Repair',
        rating: '4.9',
        reviews: '186',
        price: '349',
        features: [
          'Frame strengthening',
          'Support base repair',
          'Joint alignment',
        ],
        image: ASSETS.repair,
      },
    ],
  },

  {
    id: 'bed',
    title: 'Bed Repair Services',
    items: [
      {
        id: 'bed_noise_fix',
        name: 'Bed Noise & Stability Fix',
        rating: '4.8',
        reviews: '412',
        price: '299',
        features: [
          'Frame tightening',
          'Support board fixing',
          'Screw & bolt replacement',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'hydraulic_repair',
        name: 'Hydraulic Storage Bed Repair',
        rating: '4.9',
        reviews: '267',
        price: '399',
        features: [
          'Hydraulic lift replacement',
          'Storage panel alignment',
          'Safety inspection',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'headboard_fix',
        name: 'Headboard Repair',
        rating: '4.6',
        reviews: '138',
        price: '249',
        features: [
          'Panel reattachment',
          'Surface scratch fixing',
          'Alignment correction',
        ],
        image: ASSETS.repair,
      },
    ],
  },

  {
    id: 'door',
    title: 'Door & Window Repair',
    items: [
      {
        id: 'door_lock_service',
        name: 'Door Lock & Hinge Repair',
        rating: '4.8',
        reviews: '521',
        price: '249',
        features: [
          'Hinge replacement',
          'Lock mechanism repair',
          'Door alignment correction',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'door_polish_touch',
        name: 'Door Surface Repair',
        rating: '4.6',
        reviews: '174',
        price: '199',
        features: [
          'Scratch removal',
          'Minor dent correction',
          'Touch-up polishing',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'window_slide_service',
        name: 'Window Sliding & Roller Fix',
        rating: '4.7',
        reviews: '296',
        price: '199',
        features: [
          'Channel cleaning',
          'Roller replacement',
          'Smooth sliding adjustment',
        ],
        image: ASSETS.repair,
      },
    ],
  },

  {
    id: 'kitchen',
    title: 'Kitchen Repair Services',
    items: [
      {
        id: 'cabinet_hinge_replace',
        name: 'Cabinet Hinge Replacement',
        rating: '4.9',
        reviews: '638',
        price: '149',
        features: [
          'Soft-close hinge installation',
          'Cabinet door alignment',
          'Precision fitting',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'drawer_channel_service',
        name: 'Drawer Channel Repair / Replace',
        rating: '4.8',
        reviews: '483',
        price: '199',
        features: [
          'Heavy-duty channel fitting',
          'Smooth sliding guarantee',
          'Alignment correction',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'cabinet_door_fix',
        name: 'Cabinet Door Repair',
        rating: '4.7',
        reviews: '205',
        price: '179',
        features: [
          'Loose door fixing',
          'Panel reattachment',
          'Screw tightening',
        ],
        image: ASSETS.repair,
      },
    ],
  },

  {
    id: 'drawer',
    title: 'Drawer & Channel Services',
    items: [
      {
        id: 'premium_channel_install',
        name: 'Premium Channel Installation',
        rating: '4.8',
        reviews: '342',
        price: '229',
        features: [
          'High load-bearing channel',
          'Rust-resistant material',
          'Smooth movement calibration',
        ],
        image: ASSETS.repair,
      },
    ],
  },

  {
    id: 'polish',
    title: 'Polishing & Finishing Work',
    items: [
      {
        id: 'scratch_polish',
        name: 'Minor Scratch Removal',
        rating: '4.6',
        reviews: '190',
        price: '149',
        features: [
          'Surface restoration',
          'Shine enhancement',
          'Quick service turnaround',
        ],
        image: ASSETS.repair,
      },
      {
        id: 'full_furniture_polish',
        name: 'Full Furniture Re-Polishing',
        rating: '4.9',
        reviews: '276',
        price: '699',
        features: [
          'Complete sanding',
          'Premium polish coating',
          'Long-lasting gloss finish',
        ],
        image: ASSETS.repair,
      },
    ],
  },
];
