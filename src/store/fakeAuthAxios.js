// fakeAuth is a function supposed to imitate basic auth principles without
// sending auth request ot server but still returning response with a token.

import adminAccount from './adminAccount';
import { v4 as uuidv4 } from 'uuid'; 

const fakeAuthAxios = (passedUserData) =>
  new Promise((resolve, fail) => {
    if (!passedUserData) {
      fail({message: 'Fake Auth Error happened!'});
    } else {
      const {userName: auser, password: apass, token: atoken} = adminAccount;
      const {userName: uuser, password: upass} = passedUserData;
      const respData = (auser === uuser && apass === upass) ? {
        data: {
          token: atoken, 
          roles: ["ADM"],
          expiresIn: 1800,
          user: auser,
        }
      } : {
        data: {
          token: uuidv4(), 
          roles: ["RDR"],
          expiresIn: 1800,
          user: uuser,
        }
      };
      resolve(respData);
    }
  });

export default fakeAuthAxios;
