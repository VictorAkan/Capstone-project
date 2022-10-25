import { AdminForm } from "../../components/signup/admin/AdminForm";
import { QuickInfo } from "../../components/signup/user/QuickInfo";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { Confirmation } from "../../components/Confirmation";

export const AdminSignUp = () => {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [name, setName] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState(false)

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword,
            )
            console.log(user)
            setRegisterSuccess(true)
        } catch(error) {
            console.log(error.message)
            setRegisterSuccess(false)
        }
    }

    const onEmailChanged = (e) => {
        setRegisterEmail(e.target.value)
    }

    const onNameChanged = (e) => {
        setName(e.target.value)
    }

    const onPasswordChanged = (e) => {
        setRegisterPassword(e.target.value)
    }

    return (
        <div>
            {registerSuccess ? <Confirmation name={name} /> : <div className="flex">
                <QuickInfo />
                <AdminForm 
                    registerEmail={registerEmail}
                    registerPassword={registerPassword}
                    register={register}
                    name={name}
                    onNameChanged={onNameChanged}
                    onEmailChanged={onEmailChanged}
                    onPasswordChanged={onPasswordChanged}
                />
            </div>}
        </div>
    )
}