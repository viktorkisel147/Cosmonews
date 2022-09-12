import React, {useCallback, useState,useEffect} from "react";

import Header from "../../Components/Header/Header";
import Search from "../../Components/Header/Search";
import Body from "../../Components/Body/Body";



type RootActionTypesListType = {
    [key: string]: string | null,
}

const users:RootActionTypesListType = {'admin':'123'}


export const Login = () => {
  const [inputValue, getInputValue] = useState<string>('');
    const [log,setLog] = useState<string>('admin')
    const [pass,setPass] = useState<string>('')


    const [isLogged,setisLogged] = useState('false')
    useEffect(()=>{setisLogged(String(localStorage.getItem('auth')));},[])


    const pass_c = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }

    const log_c = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLog(e.target.value)
    }

    const auth = () =>{
        users[log] == String(pass) ? localStorage.setItem('auth','true') : localStorage.setItem('auth', 'false')
    }

    return(
  <Body>
        <Header>
          <Search getInputValue={getInputValue}></Search>
        </Header>
        <div className='grid_section animation-1'>

            <form>
                {isLogged == 'true'? <h2>Вы успешно авторизованы</h2>:<h2>Попробуйте ещё раз!</h2>}
                <div className="content">
                    <div className="input-field">
                        <input onChange={log_c} placeholder="Логин" autoComplete="nope" value={log}/>
                    </div>
                    <div className="input-field">
                        <input onChange={pass_c} type="password" placeholder="Пароль" autoComplete="new-password" value={pass}/>
                    </div>

                </div>
                <div className="action">
                    <button onClick={auth}>Войти</button>
                </div>
            </form>
        </div>


    </Body>
    )
}