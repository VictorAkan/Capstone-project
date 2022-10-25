import { Navbar } from '../../components/Navbar';
import { Login } from '../../components/login/Login';
import { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config.js';
import { AdminDashboard } from '../Dashboard/admin/AdminDashboard';
import { AuthorizedUser } from '../Dashboard/authUser/AuthorizedUser';

export const LoginPage = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [message, setMessage] = useState('')
    const [confirmAdmin, setConfirmAdmin] = useState(false)
    const [confirmUser, setConfirmUser] = useState(false)

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            )
            console.log(user)
            if (loginEmail === 'admin@gmail.com') {
                setConfirmAdmin(true)
            } else {
                setConfirmUser(true)
            }
        } catch (error) {
            console.log(error.message)
            setConfirmAdmin(false)
            setConfirmUser(false)
        }
    }

    const onEmailChanged = (e) => {
        setLoginEmail(e.target.value)
    }

    const onPasswordChanged = (e) => {
        setLoginPassword(e.target.value)
    }

    const forgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, loginEmail)
            console.log('Password reset email sent')
            setMessage('Password Reset email has been sent')
            setInterval(() => {
                setMessage('')
            }, 4000)
        } catch (error) {
            console.log(error.message)
        }
    }

    if (confirmAdmin === true) {
        return (
            <AdminDashboard />
        )
    } else if (confirmUser === true) {
        return (
            <AuthorizedUser />
        )
    }

    return (
        <main>
            <Navbar />
            <Login
                loginEmail={loginEmail}
                loginPassword={loginPassword}
                login={login}
                message={message}
                forgotPassword={forgotPassword}
                onEmailChanged={onEmailChanged}
                onPasswordChanged={onPasswordChanged}
            />
        </main>
    )
}