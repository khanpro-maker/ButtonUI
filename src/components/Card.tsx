import { createRoot } from "react-dom/client"
import { flushSync } from "react-dom"
import { useState } from "react"
import check from "/check.svg"
import copyIcon from '/copy.svg'
const Card = ({children}:any) => {
    const [copyBtn,setCopyBtn] = useState(false);
    type ChildrenProps = {
        children:React.ReactNode
    }
    function getCode(){
        const div = document.createElement("div");
        const root = createRoot(div)
        flushSync(()=>{
            root.render(children)
        })
        const code = div.innerHTML;
        return code;
    }
    function copy(){
        const code  = getCode();
        navigator.clipboard.writeText(code).then(()=>{
            setCopyBtn(true)
            setTimeout(()=>{
                setCopyBtn(false)
            },1000)
        })
        
    }
  return (

    <>
    
          <div className="flex items-center justify-center min-h-screen leading-tight">
            <div className="relative w-[300px] h-[380px] p-6 bg-white flex items-center rounded-lg text-white
            ">
                <button
                    onClick={copy}
                    className="absolute top-2 right-2 p-1 bg-transparent"
                >
                    <img
                        src={copyBtn ? check : copyIcon}
                        alt={copyBtn ? "Check icon" : "Copy icon"}
                        className="h-5 w-5"
                    />
                </button>
                <div className="grid place-content-center w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}

export default Card