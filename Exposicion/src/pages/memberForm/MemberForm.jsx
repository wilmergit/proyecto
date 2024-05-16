import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MemberForm.css";
import MemberService from "../../services/firebase/members.service.js";

function MemberForm() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [members, setMembers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(-1);

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeNick = (e) => {
        setNickname(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeDate = (e) => {
        setDate(e.target.value);
    }

    const addNewMember = (e) => {
        e.preventDefault();
        saveMember(name, nickname, email, date);
    }

    const removeMember = (key, index) => {
        setEditingIndex(-1);
        MemberService.removeMember(key).then(() => {
            getAllMembers();
        });
    }

    const saveMember = (name, nickname, email, date) => {
        MemberService.addMember(name, nickname, email, date).then(() => {
            console.log("Guardado.");
            getAllMembers();
        });
    }

    const editMember = (index) => {
        setEditingIndex(index);
        const member = members[index];
        setName(member.name);
        setNickname(member.nickname);
        setEmail(member.email);
        setDate(member.date);
    }

    const updateMember = () => {
        if (editingIndex !== -1) {
            const member = members[editingIndex];
            MemberService.updateMember(member.key, name, nickname, email, date).then(() => {
                getAllMembers();
                setEditingIndex(-1);
            });
        }
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
            <h1 id="form-h1">Enjoy the heaven..</h1>
            <form onSubmit={addNewMember}>
                <div className="input-wrapper">
                    <input type="text" id="name" name="name" value={name} placeholder="Name" onChange={changeName} />
                    <label className="input-label" htmlFor="name">Name</label>
                </div>
                <div className="input-wrapper">
                    <input type="text" id="nickname" name="nickname" value={nickname} placeholder="Nickname" onChange={changeNick} />
                    <label className="input-label" htmlFor="nickname">Nickname</label>
                </div>
                <div className="input-wrapper">
                    <input type="email" id="email" name="email" value={email} placeholder="Email" onChange={changeEmail} />
                    <label className="input-label" htmlFor="email">Email</label>
                </div>
                <div className="input-wrapper">
                    <input type="date" id="date" name="date" value={date} placeholder="Birth date" onChange={changeDate} />
                </div>

                {editingIndex === -1 ? (
                    <button id="become" type="submit">Become a member</button>
                ) : (
                    <button id="save" type="button" onClick={updateMember}>Save changes</button>
                )}
            </form>

            <div className="members-container">
                {
                    members.map((m, index) => {
                        const min = 1;
                        const max = 5;
                        const random = Math.floor(Math.random() * (max - min + 1)) + min;

                        return (
                            <div id="list" className="member-item" key={m.key}>
                                <p><img className="user" src={`./images/${random}.png`} alt="usu" /><span>User:</span> {m.nickname} <span>Email:</span> {m.email}</p>
                                <div className="buttons">
                                    <button className="delete-member" onClick={() => removeMember(m.key, index)}>Delete</button>
                                    <button className="edit-member" onClick={() => editMember(index)}>Edit</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <Footer />
        </>
    )
}

export default MemberForm;
