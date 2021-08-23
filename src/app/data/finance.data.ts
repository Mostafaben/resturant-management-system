import { Data } from '@angular/router';

const data: any[] = new Array(12).fill(null).map((_, index) => {
  return {
    count: Math.floor(Math.random() * index * 100 + 20),
  };
});

console.log(data);
export { data as DATA };
