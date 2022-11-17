export default function Navigation({Children}) {
    return (
        <div>
            <Children />
            <div>
                <span>Back to Portfolio</span>
                <div>
                   <span>prev/</span>
                   <span>next</span>
                </div>
                
            </div>
        </div>
    )
}