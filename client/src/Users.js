import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import axios from "axios";



const Users = () => {

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    const addUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name
        }
        axios.post('http://localhost:3001/api/addUser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name
        }
        axios.post('http://localhost:3001/api/updateUser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
        setIsEdit(false);
    }

    const deleteUser = (data) => {
        axios.post('http://localhost:3001/api/deleteUser', data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    return (
        <>
            <UserForm 
                addUser={addUser} 
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable 
                rows={users} 
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => {
                    window.confirm('Are you sure?') && deleteUser(data);
                }}
            />
        </>
    );
}

export default Users;