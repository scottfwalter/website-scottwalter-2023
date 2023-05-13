import { onCLS, onFID, onLCP, onFCP } from 'web-vitals';

(async () => {
  const { MY_COLOR } = await import('./colors');
  console.log('COLOR', MY_COLOR);
})();

export const startWebVitals = () => {
  onCLS((r) => {
    console.log('Cumlative Layout Shift', r);
  });
  onFID((r) => {
    console.log('Embedded First Input Delay', r);
  });
  onLCP((r) => {
    console.log('Largest Contentful Paint', r);
  });
  onFCP((r) => {
    console.log('First Contentful Paint', r);
  });
};

export const searchIndex = async () => {
  const response = await fetch('/search.json');
  const jsonData = await response.json();
  console.log(jsonData);
};

export const searchResults = (searchCriteria, _searchIndex) => {
  console.log('filtering', searchCriteria);
};

export const MY_NAME = 'SCOTT Frederick WALTER 1234567';
