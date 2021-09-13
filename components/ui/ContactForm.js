import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(3, "Name must be at least 3 characters"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters")
});

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input placeholder="Name" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}

            <input placeholder="Mail"{...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            
            <textarea placeholder="Message" {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <input type="submit" />
        </form>
    );
}

export default Form;