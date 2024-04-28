import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MemberForm.css";
import MemberService from "../../services/firebase/members.service.js"

function MemberForm() {
    
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const[members, setMembers] = useState([]);

    const changeName = (a) => {
        setName(a.target.value)
    }

    const changeNick = (a) => {
        setNickname(a.target.value)
    }

    const changeEmail = (a) => {
        setEmail(a.target.value)
    }

    const changeDate = (a) => {
        setDate(a.target.value)
    }
    
    const addNewMember = (a) => {
        a.preventDefault();
        saveMember(a.target.name.value, a.target.nickname.value, 
            a.target.email.value, a.target.date.value)
    }

    const saveMember = (name, nickname, email, date) => {
        MemberService.addNewMember(name, nickname, email, date).then((response) => {
            console.log("guardado")
        })
    }

    return (
        <>
            <Header />
            <form onSubmit={addNewMember}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={name} onChange={changeName}/>
                <label htmlFor="nickname">Nickname: </label>
                <input type="text" id="nickname" name="nickname" value={nickname} onChange={changeNick}/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={email} onChange={changeEmail}/>
                <label htmlFor="date">Birth date: </label>
                <input type="date" id="date" name="date" value={date} onChange={changeDate}/>

                <button type="submit">Become a member</button>
            </form>

            {
                members.map((m, index) => (
                    <p key={index}>{m.name} {m.nickname} {m.email} {m.date}</p>
                ))
            }

            <Footer />
        </>
    )
}

export default MemberForm;