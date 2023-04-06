import { Form, redirect, useActionData } from "react-router-dom";

export const Contact = () => {
    const errors= useActionData();
    return (
        <div className="contact">
             <h3>İletişim</h3>
           <Form method="post" action="/help/contact">
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" />
                    {errors?.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message"></textarea>
                    {errors?.message && <p className="error">{errors.message}</p>}

                </div>
                <button type="submit">Submit</button>
           </Form>
        </div>
    );
}

export const contactAction = async ({request}) => {
    const data = await request.formData();
    
    const email = data.get("email");
    const message = data.get("message")
    const errors={};
    if(typeof email!=="string" ||  !email.includes("@")) {

        errors.email="email girmelisiniz";
    }
    if(typeof message!== "string" || (message.length<10  || message.length>100)) {
        errors.message="mesaj için en az 10 en fazla 100 karakter girmelisiniz";

    } 
    if(Object.keys(errors).length) {
        return errors;
    }
    return redirect("/");
}