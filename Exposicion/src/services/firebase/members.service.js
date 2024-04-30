import { get, push, ref } from "firebase/database";
import db from "./firebase.config.js";

const refMembers = ref(db, "/members");

const getMembers = () => {
    return get(refMembers);
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
    addMember,
    getMembers
}