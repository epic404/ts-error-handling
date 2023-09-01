import { handleFetch } from './handler';

async function main() {
  const result = await handleFetch();
  console.log(result);
}

main();