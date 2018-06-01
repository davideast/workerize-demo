import worker from 'workerize-loader!./worker';

async function init() {
  const instance = worker();
  const count = await instance.expensive(1000);
  console.log(`Ran ${count} loops`);
  const doubled = await instance.double(2);
  console.log(`doubled 2 to ${doubled}`);
}

init();