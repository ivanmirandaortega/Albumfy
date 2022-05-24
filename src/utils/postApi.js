import tokenService from './tokenService'

const BASE_URL = '/api/posts'

export function create(post) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: post,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
}

// export function getAll() {
//     return fetch(BASE_URL, {
//         headers: {
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         }
//     }).then(res => {
//         if (res.ok) return res.json();
//         throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
//     })
// }