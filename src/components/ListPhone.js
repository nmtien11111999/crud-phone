import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deletePhone, listPhones} from "../redux/PhoneAxios";
import {Link, useNavigate, useParams} from "react-router-dom";


function ListPhone() {
    const dispatch = useDispatch();
    const phones = useSelector((state) => state.phones.phones)
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(listPhones());
    }, [dispatch])

    const handleDelete = (phone) => {
        const isConfirm =  window.confirm("ban co chac muon xoa");
        if (isConfirm) {
            dispatch(deletePhone(phone));
            navigate('/')
            alert("ban da xoa thanh cong")
        } else {
            alert("cut")
        }
    }

    return (
        <>
            <h1>List Phone</h1>
            <Link to='/add'>Add Phone</Link>
            <ul>
                {phones.map(phone => (
                    <li key={phone.id}>
                        {phone.name} - {phone.price} - {phone.descript}
                        <Link to={`/edit/${phone.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(phone)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListPhone;