import { useState } from "react"

function TextExp() {
  return (
    <div>
        <TextExpander>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium vel, cumque vero assumenda fugit sed facere dolor porro odit magnam vitae consequuntur reprehenderit tenetur delectus sint voluptatem ipsum consequatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit vero nulla commodi ipsam perspiciatis saepe vel quae, pariatur, cumque sequi impedit officia iste molestias dicta voluptatibus magnam quas veniam?
        </TextExpander>


        <TextExpander
            collapsedNumWords={20}
            expandButtonText="show text"
            collapseButtonText = "Collapse text"
            buttonColor = "#ff6622"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium vel, cumque vero assumenda fugit sed facere dolor porro odit magnam vitae consequuntur reprehenderit tenetur delectus sint voluptatem ipsum consequatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit vero nulla commodi ipsam perspiciatis saepe vel quae, pariatur, cumque sequi impedit officia iste molestias dicta voluptatibus magnam quas veniam?
        </TextExpander>


        <TextExpander
            expanded={true}
            className="box"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium vel, cumque vero assumenda fugit sed facere dolor porro odit magnam vitae consequuntur reprehenderit tenetur delectus sint voluptatem ipsum consequatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit vero nulla commodi ipsam perspiciatis saepe vel quae, pariatur, cumque sequi impedit officia iste molestias dicta voluptatibus magnam quas veniam?
        </TextExpander>
    </div>
  )
}

export default TextExp


function TextExpander({
    children,
    collapsedNumWords = 10,
    expandButtonText = "see more",
    collapseButtonText = "show less" ,
    buttonColor = "#1f09cd",
    expanded,
    className
    }){

    const [isExpanded, setIsExpanded] = useState(expanded)   
    
    const handClick =()=>{
        setIsExpanded(prev => !prev)
    }

    const displayText = isExpanded ? children : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

    const btnStyles = {
        background: "none",
        border: "none",
        font: "inherit",
        color: buttonColor,
        paddingLeft: "5px",
        cursor: "pointer"
    }
    return(
        <div className={className}>
            <span>{displayText}</span>
            <button onClick={handClick} style={btnStyles}>{isExpanded 
            ? collapseButtonText : expandButtonText}</button>
        </div>
    )
}
