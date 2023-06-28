import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  promises.push(signUpUser(firstName, lastName));
  promises.push(uploadPhoto(fileName));

  return Promise.allSettled(promises)
    .then((settledPromises) => {
      const results = [];
      for (let i = 0; i < settledPromises.length; i += 1) {
        const result = settledPromises[i];
        results.push({
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason,
        });
      }
      return results;
    });
}
