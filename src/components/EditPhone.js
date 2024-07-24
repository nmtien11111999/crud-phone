
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {updatePhone} from "../redux/PhoneAxios";
import {validationSchema} from "./AddPhone";
import {useFormik} from "formik";


function EditPhone() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const phones = useSelector(state => state.phones.phones);

    const phone = phones.find(p => p.id === id);

    const formPhone = useFormik({
        initialValues: {
            id: phone?.id || '',
            name: phone?.name || '',
            price: phone?.price || '',
            descript: phone?.descript || ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
           let isConfirm = window.confirm("ban co muon sua");
           if (isConfirm) {
               dispatch(updatePhone(values));
               navigate('/');
               alert("ban da sua thanh cong")
           }else {
               alert("may dua t a")
           }

        }
    });

    return (
        <>
            <h1>Edit Phone</h1>
            <form onSubmit={formPhone.handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formPhone.values.name}
                    onChange={formPhone.handleChange}
                />
                <small>{formPhone.errors.name && formPhone.touched.name ? formPhone.errors.name : ''}</small>

                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={formPhone.values.price}
                    onChange={formPhone.handleChange}
                />
                <small>{formPhone.errors.price && formPhone.touched.price ? formPhone.errors.price : ''}</small>

                <input
                    type="text"
                    placeholder="Description"
                    name="descript"
                    value={formPhone.values.descript}
                    onChange={formPhone.handleChange}
                />
                <small>{formPhone.errors.descript && formPhone.touched.descript ? formPhone.errors.descript : ''}</small>

                <button type="submit">Edit</button>
            </form>
        </>
    );
}

export default EditPhone;