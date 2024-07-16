import http from "./config";

const auth = {
    sign_in: () => http.post('/login', data)
}
export default auth