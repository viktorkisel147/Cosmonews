import React, {useState} from "react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Header/Search";
import Body from "../../Components/Body/Body";

export const ArticleView = (props:any) => {
  const [inputValue, getInputValue] = useState<string>('');
    return(<>
    <Body>
        <Header>
          <Search getInputValue={getInputValue}></Search>
        </Header>
        <div className='grid_section animation-1'>
            <img style={{width:'50%'}} src={props.data.data?.imageUrl}/>
            <h2>{props.data.data?.title}</h2>
            <div>{props.data.data?.summary}</div>
        </div>
    </Body>
    </>)
}