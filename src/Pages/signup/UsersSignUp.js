import { UsersForm } from "../../components/signup/user/UserForm"
import { QuickInfo } from "../../components/signup/user/QuickInfo"

export const UsersSignUp = () => {
    return (
        <div>
            <div className="flex">
                <QuickInfo />
                <UsersForm />
            </div>
        </div>
    )
}