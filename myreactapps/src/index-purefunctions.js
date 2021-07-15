

//pure or not? - PUre means dont modify original memeory

//impure
// function updateProfile(city, profile) {
//    profile.city = city
//    return profile;
// }

//ways to implement pure;immutablity
//way-1
// function updateProfile(city, profile) {
//     //return new object
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }

//way -2
// function updateProfile(city, profile) {
//     //return new object
//     return Object.assign({}, profile, { city: city })
// }

//Way -3 -es 7 spread operator
function updateProfile(city, profile) {
    //return new object
    return { ...profile, city };
}
let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}

Object.freeze(profile);

const res = updateProfile('Coimbatore', profile)
console.log(res);