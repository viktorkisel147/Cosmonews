import React, {useState} from "react";
import Body from "../../Components/Body/Body";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Header/Search";


export const ErrAuth = () => {
    const [inputValue, getInputValue] = useState<string>('');
    return(
        <>
      <Body>
        <Header>
          <Search getInputValue={getInputValue}></Search>
        </Header>
        <div className='grid_section animation-1'>
            <h2>Тут должен быть личный кабинет, но он не доступен из за того что вы не прошли авторизацию</h2>
        </div>
      </Body>
        </>
    )
}