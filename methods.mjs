export const getMethod = async url => {
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }).then(r => r.json());
}

export const postMethod = async (url, body) => {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*"
        },
        body
    }).then(r => r.json());
}

export const putMethod = async (url, body) => {
    return await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*"
        },
        body
    }).then(r => r.json());
}

export const patchMethod = async (url, body) => {
    return await fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "mode": "no-cors",
            "Access-Control-Allow-Origin": "*"
        },
        body
    }).then(r => r.json());
}

export const deleteMethod = async url => {
    return await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    }).then(r => r.json());
}
