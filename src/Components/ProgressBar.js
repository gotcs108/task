export default function ProgressBar({items}) {
    if (items!=null){
        const orange = items.filter(subtask => subtask.status === "Pending").length;
        const blue = items.filter(subtask => subtask.status === "Complete").length;
        const green = items.filter(subtask => subtask.status === "Verified").length;
        const red = items.filter(subtask => subtask.status === "Issue").length;
        const sum = orange + blue + green + red;
        return (
            <div>
                <div style={{backgroundColor:'orange', width:`${orange/sum*100}%`, height:'20px', display:'inline-block'}}></div>
                <div style={{backgroundColor:'blue', width:`${blue/sum*100}%`, height:'20px', display:'inline-block'}}></div>
                <div style={{backgroundColor:'green', width:`${green/sum*100}%`, height:'20px', display:'inline-block'}}></div>
                <div style={{backgroundColor:'red', width:`${red/sum*100}%`, height:'20px', display:'inline-block'}}></div>
            </div>
        )
    }
    else {
        return <div></div>
    }

}