import { get, push, ref, remove, set } from "firebase/database";
import db from "./firebase.config.js";

const refMembers = ref(db, "/members");

const getMembers = () => {
    return get(refMembers);
};

const addMember = (name, nickname, email, date) => {
    return push(refMembers, {
        name: name,
        nickname: nickname,
        email: email,
        date: date
    });
};

const removeMember = (key) => {
    const dbRefMember = ref(db, `/members/${key}`);
    return remove(dbRefMember);
};

const updateMember = (key, name, nickname, email, date) => {
    const dbRefMember = ref(db, `/members/${key}`);
    return set(dbRefMember, {
        name: name,
        nickname: nickname,
        email: email,
        date: date
    });
};

export default {
    addMember,
    getMembers,
    removeMember,
    updateMember
};