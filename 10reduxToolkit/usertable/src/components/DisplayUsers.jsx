import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }


    return <Wrapper>
        {
            data.map((user, id) => {
                return <li key={id}>
                    {user}
                    <button className="delete-button" onClick={() => deleteUser(id)}>Delete</button>
                </li>
            })
        }
    </Wrapper>
}

const Wrapper = styled.section
`/* styles.css */


/* Style for the list items */
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    width: 100%;
    transition: background-color 0.3s;
}

li:hover {
    background-color: #e0e0e0;
}

/* Style for the delete button */
.delete-button {
    background-color: #ff4d4d;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.delete-button:hover {
    background-color: #ff1a1a;
}

`

export default DisplayUsers;