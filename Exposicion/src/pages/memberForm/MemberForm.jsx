import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MemberForm.css";
import MemberService from "../../services/firebase/members.service.js"

function MemberForm() {

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [members, setMembers] = useState([]);

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
        saveMember(a.target.name.value, a.target.nickname.value,
            a.target.email.value, a.target.date.value)
    }

    const removeMember = (key) => {
        MemberService.removeMember(key).then((res) => {
            getAllMembers();
        });
    }

    const saveMember = (name, nickname, email, date) => {
        MemberService.addMember(name, nickname, email, date).then((response) => {
            console.log("Guardado.")
        })
    }

    const getAllMembers = () => {
        MemberService.getMembers().then((items) => {
            let auxMembers = [];
            items.forEach((item) => {
                const key = item.key;
                const data = item.val();

                const auxMember = {
                    key: key,
                    name: data.name,
                    nickname: data.nickname,
                    email: data.email,
                    date: data.date
                }
                auxMembers.push(auxMember);
            })
            setMembers([...auxMembers]);
        });
    }

    useEffect(() => {
        getAllMembers();
    }, [])

    return (
        <>
            <Header />
            <form onSubmit={addNewMember}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={name} onChange={changeName} />
                <label htmlFor="nickname">Nickname: </label>
                <input type="text" id="nickname" name="nickname" value={nickname} onChange={changeNick} />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={email} onChange={changeEmail} />
                <label htmlFor="date">Birth date: </label>
                <input type="date" id="date" name="date" value={date} onChange={changeDate} />

                <button type="submit">Become a member</button>
            </form>

            <div className="members-container">
                {

                    members.map(m =>
                        <div className="member-item" key={m.key}>
                            <p><img src="./images/Heaven.png" alt="usu" /><span>User:</span> {m.nickname} <span>Email:</span> {m.email}</p>
                            <button className="delete-member" onClick={() => removeMember(m.key)}>Delete</button>
                        </div>
                    )
                }
            </div>

            <Footer />
        </>
    )
}

export default MemberForm;