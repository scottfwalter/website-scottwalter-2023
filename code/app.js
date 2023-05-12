import { onCLS, onFID, onLCP, onFCP } from 'web-vitals';

(async () => {
  const { MY_COLOR } = await import('./colors');
  console.log('COLOR1', MY_COLOR);
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

export const MY_NAME = 'SCOTT Frederick WALTER 1234567';
