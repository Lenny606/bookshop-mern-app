import {Link} from "react-router-dom";
import {useState} from "react";

const Login = () => {

    const [message, setMessage] = useState('')

    return (
        <div className={"h-[calc(100vh-120px)] flex justify-center items-center"}>
            <div className={'w-full max-w-sm mx-auto rounded-md shadow-md bg-light-grey px-8 py-8 mb-4'}>
                <h2 className={'text-2xl font-medium mb-4'}>Please Login</h2>
                {/*<input type={'text'} placeholder={"name"} className={"border rounded"}></input>*/}

                <form>
                    <div className={'mb-4'}>
                        <label htmlFor={'email'}
                               className={'block text-gray-700 text-sm font-medium mb-2'}>Email</label>
                        <input type={'email'} name={"email"} id={'email'} placeholder={"Email"}
                               className={"shadow appearance-none border-gray w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-primary "}/>
                    </div>
                    <div className={'mb-4'}>
                        <label htmlFor={'password'}
                               className={'block text-gray-700 text-sm font-medium mb-2'}>Password</label>
                        <input type={'password'} name={"password"} id={'password'} placeholder={"Password"}
                               className={"shadow appearance-none border-gray w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-primary "}/>
                    </div>
                    {
                        message && <p className={'text-red text-xs italic'}>{message}</p>
                    }
                    <button className={'p-1 sm:px-6 px-2 w-full sm:w-1/2 rounded-md bg-primary hover:bg-secondary font-medium mb-2'}>Login</button>
                </form>
                <p className={'font-medium text-sm align-baseline'}>Haven't an account? Register <Link to={'/register'}  className={'text-dark-blue hover:underline'}>here.</Link> </p>

            {/*    GOOGLE LOGIN */}
            </div>
        </div>
    )
}
export default Login;