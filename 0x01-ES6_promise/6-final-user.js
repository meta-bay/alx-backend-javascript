import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((ans) => {
    const response = [];

    for (const an of ans) {
      if (an.status === 'fulfilled') {
        response.push({
          status: an.status,
          value: an.value,
        });
      } else {
        response.push({
          status: an.status,
          value: an.reason.toString(),
        });
      }
    }

    return response;
  });
}
