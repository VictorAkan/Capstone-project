export const Login = ({ loginEmail,message,forgotPassword,loginPassword,login,onEmailChanged,onPasswordChanged }) => {
    const canSave = Boolean(loginEmail) && Boolean(loginPassword) === true
    const canSend = Boolean(loginEmail) === true
    return (
        <div className="flex mt-10 justify-center">
            <div>
                <form onSubmit={(e) => e.preventDefault()} className="bg-white drop-shadow-md w-96 rounded-md p-4" action="">
                    <div className="heading flex justify-center">
                        <h2 className="text-red-500 font-bold text-4xl">Welcome Back !🤝</h2>
                    </div>
                    <div className="mt-7">
                        <label htmlFor="email">Email:</label>
                        <div>
                            <input type="email" name="email" 
                                className="w-full mt-3 p-3 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-red-400"
                                placeholder="email"
                                value={loginEmail}
                                onChange={onEmailChanged}
                                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="password">Password:</label>
                        <div>
                            <input type="password" name="password" 
                                className="w-full mt-3 p-3 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-red-400"
                                placeholder="password"
                                value={loginPassword}
                                onChange={onPasswordChanged}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            />
                        </div>
                    </div>
                    <div className="mt-9 flex justify-center">
                        <button type="submit"
                            onClick={login}
                            disabled={!canSave}
                            className="text-white bg-red-500 hover:bg-red-600 px-10 p-3 rounded-md"
                        >
                            Login
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-sky-500">{message}</p>
                    </div>
                </form>
                <div className="forgot--password flex justify-center mt-5">
                    <button disabled={!canSend} onClick={forgotPassword} className="hover:text-red-400">
                        Forgot Password...?
                    </button>
                </div>
            </div>
        </div>
    )
}