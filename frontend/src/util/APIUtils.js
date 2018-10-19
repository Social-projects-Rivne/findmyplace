import {API_BASE_URL, ACCESS_TOKEN, TOKEN_TYPE} from '../constants';

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', TOKEN_TYPE + " " + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                 if (!response.ok) {
                     return Promise.reject(json);
                 }
                return json;
            })
        );
};

export const deleteRequest = (options) => {
    const headers = new Headers();

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', TOKEN_TYPE + " " + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => {
            return response;
        }).catch(error => error);
};

export const uploadFileRequest = (options) => {
    const headers = new Headers();

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', TOKEN_TYPE + " " + localStorage.getItem(ACCESS_TOKEN));
    }

    const defaults = {headers: headers};

    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => {
                return response;
        })
};

export function setUserAvatar(avatarImage) {
    const formData = new FormData();
    formData.append('file', avatarImage, 'a.png');
    return uploadFileRequest({
        url: API_BASE_URL + '/set-avatar',
        method: 'POST',
        body: formData
    });
}


export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function getApprovePlaces() {
    return request({
        url: API_BASE_URL + "/places/not-approved",
        method: 'GET',
    });
}

export function getAllMyPlaces() {
    return request({
        url: API_BASE_URL + "/places/my-places",
        method: 'GET',
    })
}

export function rejectPlace(rejectPlaceRequest) {
    return request({
        url: API_BASE_URL + "/places/reject",
        method: 'POST',
        body: JSON.stringify(rejectPlaceRequest)
    })

}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function resendEmail(usernameOrEmail) {
    return request({
        url: API_BASE_URL + "/auth/resendEmail?usernameOrEmail=" + usernameOrEmail,
        method: 'GET',
    });
}

export function forgotPassword(forgotRequest) {
    return request({
        url: API_BASE_URL + "/auth/forgotPassword",
        method: 'POST',
        body: JSON.stringify(forgotRequest)
    });
}

export function restorePassword(restoreRequest, param) {
    return request({
        url: API_BASE_URL + "/auth/restore/" + param,
        method: 'POST',
        body: JSON.stringify(restoreRequest)
    });
}

export const getProfile = (nickname) => request({
    url: API_BASE_URL + `/users/nick/${nickname}`,
    method: 'GET'
});


export const approvePlace = (id) => request({
    url: API_BASE_URL + `/places/approve/${id}`,
    method: 'PUT'
});

export const updateProfile = profile => request({
    url: API_BASE_URL + "/users/update",
    method: 'POST',
    body: JSON.stringify(profile)
});

export const getAvatar = () => request({
    url: API_BASE_URL + '/get-avatar',
    method: 'GET'
});

export function filterPlace(filterRequest) {
    return request({
        url: API_BASE_URL + "/map/filter",
        method: 'POST',
        body: JSON.stringify(filterRequest)
    });
}

export function searchPlace(searchRequest) {
    return request({
        url: API_BASE_URL + "/map/search",
        method: 'POST',
        body: JSON.stringify(searchRequest)
    });
}

export function showAllPlaces() {
    return request({
        url: API_BASE_URL + "/map/all",
        method: 'POST',
    });
}

export function registerPlace(registerPlaceRequest) {
    return request({
        url: API_BASE_URL + "/places/register",
        method: 'POST',
        body: JSON.stringify(registerPlaceRequest)
    });
}

export function checkUserAvailability(username, email) {
    return request({
        url: API_BASE_URL + "/auth/checkUserAvailability?username=" + username + "&email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile() {
    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function deleteUserPlace(id) {
    return deleteRequest({
        url: API_BASE_URL + '/user/delete-place/' + id,
        method: 'DELETE'
    });
}
export function deleteManagers(ownerId, managerId) {
    return request({
        url: API_BASE_URL + "/user/" + ownerId + "/delete-manager/" + managerId,
        method: 'POST'
    });
}

export function deletePlaceManager(id) {
    return request({
        url: API_BASE_URL + '/places/delete-manager/' + id,
        method: 'POST'
    });
}

export function deleteManagerByPlace(placeId, managerId) {
    return request({
        url: API_BASE_URL + "/places/" + placeId + "/delete-manager/" + managerId,
        method: 'POST'
    });
}

export function getCurrentPlaces(managerId, ownerId) {
    return request({
        url: API_BASE_URL + "/manager/" + managerId + "/places-by-owner/" + ownerId,
        method: 'GET'
    });
}

export function addPlaceManager(id, value) {
    return request({
        url: API_BASE_URL + "/places/" + id + "/add-manager/" + value,
        method: 'POST'
    });
}
export function changeCountFreePlaces(id, count) {
    return request({
        url: API_BASE_URL + "/places/" + id + "/free-places/" + count,
        method: 'POST'
    });
}



export function deleteUserFeedback(id) {
    return deleteRequest({
        url: API_BASE_URL + '/user/delete-feedback/' + id,
        method: 'DELETE'
    });
}

export function deleteUser(id) {
    return deleteRequest({
        url: API_BASE_URL + '/user/delete/' + id,
        method: 'DELETE'
    });
}

export const updateUserProfile = profile => request({
    url: API_BASE_URL + "/user/update-profile",
    method: 'POST',
    body: JSON.stringify(profile)
});

export const updateUserPassword = password => request({
    url: API_BASE_URL + "/user/update-password",
    method: 'POST',
    body: JSON.stringify(password)
});

export function addComment(commentRequest) {
    return request({
        url: API_BASE_URL + "/places/feedback",
        method: 'POST',
        body: JSON.stringify(commentRequest)
    });
}

export function addMark(markRequest) {
    return request({
        url: API_BASE_URL + "/places/mark",
        method: 'POST',
        body: JSON.stringify(markRequest)
    });
}
export const bookPlace = (bookRequest) => request({
    url: API_BASE_URL + "/booking/place",
    method: "POST",
    body: JSON.stringify(bookRequest)
});

export const getBookings = () => request({
    url: API_BASE_URL + `/booking/me`,
    method: "GET"
});

export const cancelBooking = (bookingId) => request({
    url: API_BASE_URL + `/booking/${bookingId}/delete`,
    method: "DELETE"
});

