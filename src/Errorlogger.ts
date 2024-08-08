export default class Errorlogger extends Error {
  constructor(error: any) {
    const currentDateTime = new Date();

    const utcTime = new Intl.DateTimeFormat('default', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(currentDateTime);

    console.log(super(`${utcTime} | ${error?.message ?? error}`));
  }
}
