// import cookie from 'js-cookie';

// export const updateUserFavorites = async (userToken: string, homeId: string, action: 'add' | 'remove') => {
//   const url = `https://dinmaegler.onrender.com/users/${userToken}`;
//   const userData = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${userToken}`,
//       'Content-Type': 'application/json',
//     },
//   }).then((res) => res.json());

//   let updatedHomes = [...userData.homes];
  
//   if (action === 'add') {
//     updatedHomes.push(homeId);  // Tilføj boligen til favoritter
//   } else {
//     updatedHomes = updatedHomes.filter(id => id !== homeId);  // Fjern boligen fra favoritter
//   }

//   // Opdater brugerens favoritter
//   await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Authorization': `Bearer ${userToken}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       homes: updatedHomes,
//     }),
//   });
// };
