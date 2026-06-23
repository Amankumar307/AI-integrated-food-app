import React,{useState} from "react";
import axios from "axios";
import "./FoodAI.css";

const FoodAI=()=>{

const [msg,setMsg]=useState("");

const [messages,setMessages]=useState([
{
type:"bot",
text:"👋 Hello! Ask me anything about food"
}
]);

const [loading,setLoading]=useState(false);

const askAI=async(customMsg)=>{

const input=customMsg || msg;

if(!input.trim()) return;

setMessages((prev)=>[
...prev,
{
type:"user",
text:input
}
]);

setMsg("");

setLoading(true);

try{

const res=
await axios.post(
"http://localhost:4000/api/ai/chat",
{
message:input
}
);

setMessages((prev)=>[
...prev,
{
type:"bot",
text:
res.data.reply
}
]);

}catch{

setMessages((prev)=>[
...prev,
{
type:"bot",
text:
"⚠️ Unable to connect to AI"
}
]);

}

setLoading(false);

};

return(

<div className="ai">

{/* HEADER */}

<div className="ai-top">

<div className="left">

<div className="bot">
🤖
</div>

<div>

<h3>
AI Food Assistant
</h3>

<p>
Your smart food companion
</p>

</div>

</div>

<button>

✕

</button>

</div>

{/* CHAT */}

<div className="chat-body">

{

messages.map(
(item,index)=>(

<div
key={index}

className={
item.type==="user"
?

"reply"

:

"bot-msg"

}

>

{

item.text

}

</div>

)

)

}

{

loading && (

<div
className="bot-msg"
>

Typing...

</div>

)

}

</div>

{/* QUICK ACTIONS */}

<div className="quick">

<button
onClick={()=>
askAI(
"Suggest dinner under ₹300"
)
}
>

₹300 Dinner

</button>

<button
onClick={()=>
askAI(
"Healthy food"
)
}
>

Healthy

</button>

<button
onClick={()=>
askAI(
"Spicy food"
)
}
>

Spicy

</button>

<button
onClick={()=>
askAI(
"Best pizza"
)
}
>

Pizza

</button>

</div>

{/* INPUT */}

<div className="chat-input">

<input

type="text"

value={msg}

onChange={(e)=>
setMsg(
e.target.value
)
}

placeholder=
"Type your message..."

onKeyDown={(e)=>{

if(
e.key==="Enter"
){

askAI();

}

}}

></input>

<button
onClick={askAI}
>

<svg
width="22"
height="22"
viewBox="0 0 24 24"
fill="white"
>

<path
d="M3 20L21 12L3 4L3 10L16 12L3 14Z"
/>

</svg>

</button>

</div>

</div>

);

};

export default FoodAI;