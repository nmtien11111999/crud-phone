import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createPhone} from "../redux/PhoneAxios";
import * as Yup from 'yup';
import {useFormik} from "formik";

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    price: Yup.number()
        .required('Price is required')
        .positive('Price must be a positive number')
        .min(0.01, 'Price must be at least $0.01'),
    descript: Yup.string().required('Description is required')  // Giữ nguyên 'descript'
});

function AddPhone() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formPhone = useFormik({
        initialValues: {
            name: '',
            price: '',
            descript: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(createPhone(values));
            navigate('/');
            alert("ban da them thanh cong")
        }
    });

    return (
        <>
            <h1>Add Phone</h1>
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

                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default AddPhone;