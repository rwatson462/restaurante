export interface BrandColors {
  primary: string;
  gradient: string;
}

export const brandColors: Record<string, BrandColors> = {
  reservations: {
    primary: '#15803d',
    gradient: 'linear-gradient(135deg, #000000 0%, #15803d 100%)'
  },
  'front-of-house': {
    primary: '#1e3a8a',
    gradient: 'linear-gradient(135deg, #000000 0%, #1e3a8a 100%)'
  },
  kitchen: {
    primary: '#991b1b',
    gradient: 'linear-gradient(135deg, #000000 0%, #991b1b 100%)'
  },
  'back-office': {
    primary: '#c2410c',
    gradient: 'linear-gradient(135deg, #000000 0%, #c2410c 100%)'
  }
};

export function getBrandColors(appName: string): BrandColors {
  const colors = brandColors[appName];
  if (!colors) {
    throw new Error(`Brand colors not defined for app: ${appName}`);
  }
  return colors;
}