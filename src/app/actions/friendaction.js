var fetch = require('isomorphic-fetch');

export function fetchFriends(){
  return fetch('http://rest.learncode.academy/api/johnbob/friends', {
    method: 'GET',
    mode: 'CORS'
  }).then(res => res.json())
  .catch(err => err);
}

export function fetchfriend(id) {
  return fetch('http://rest.learncode.academy/api/johnbob/friends/' + id, {
    method: 'GET',
    mode: 'CORS'
  }).then(res => res.json())
  .catch(err => err);
}

export function addFriend(data) {
  return fetch('http://rest.learncode.academy/api/johnbob/friends', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
}

export function updateFriend(id, data){
  return fetch('http://rest.learncode.academy/api/johnbob/friends/' + id, {
    method: 'PUT',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err=> err);
}

export function deleteFriend(id) {
  return fetch('http://rest.learncode.academy/api/johnbob/friends/' + id, {
    method: 'DELETE',
    mode: 'CORS'
  }).then(res => {
    return res;
  }).catch(err => err);
}
