import { push, ref } from "firebase/database";
import db from "./firebase.config.js";

const refMembers = ref(db, "/members");

const getAllMembers = ref(db, "/members");

const getMembers = () => {
    return get(getAllMembers);
}

const addMember = (name, nickname, email, date) => {
    return push(refMembers, {
        name: name,
        nickname: nickname,
        email: email,
        date: date
    })
}

export default {
    getAllMembers,
    addMember,
    getMembers
}