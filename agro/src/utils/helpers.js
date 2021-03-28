export const sendCatalogue = (email) =>{
    const fetchOptions = {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({email:email})
    };
    return fetch("http://localhost:8080/send-catalog",fetchOptions).then(response=>{
        if(response.ok){
            return "Catalog sent";
        }
        else{
            return "Not sent";
        }
    })
}

export const sendQuery = (name,email,query) =>{
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name:name,email:email,query:query})
    }
    return fetch("http://localhost:8080/send-query",fetchOptions).then(response =>{
        if(response.ok){
            return fetch("http://localhost:8080/send-reply",fetchOptions).then(response2 =>{
                if(response2.ok){
                    return "message sent";
                }
                else{
                    return "not sent";
                }
            })
        }
        else{
            return "not sent";
        }
    })
}