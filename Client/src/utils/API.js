import axios from "axios";

export default {
    getArt: function () {
        return axios.get("/API/art");
    },
    // getArtID: function (id) {
    //     return axios.get("/API/art/" + id);
    // },
    // deleteArt: function (id) {
    //     return axios.delete("/API/art/" + id);
    // },
    saveArt: function (artData) {
        return axios.post("/API/art", artData);
    }
};