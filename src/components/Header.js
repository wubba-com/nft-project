import Logo from "./Logo";


export default function Header() {
    let leftMenu = [
        {text: 'the world', link: ''},
        {text: 'explore', link: ''},
        // {text: 'obelisk', link: ''},
        // {text: 'litepaper', link: ''},
        // {text: 'odk', link: ''}
    ]
    let rightMenu = [
        // {text: 'my otherdeeds', link: ''},
        {text: 'connect wallet', link: ''}
    ]
    return (
        <div className="container">
            <div className="row space-between pd-top-20">
                <ul className="list-menu left col-6">

                    {leftMenu.map(chunk => <li key={chunk.text}><a className="btn-menu" href={chunk.link}><span>{chunk.text}</span></a></li>)}
                </ul>
                <Logo/>
                <ul className="list-menu right col-6">
                    {rightMenu.map(chunk => <li key={chunk.text}><a className="btn-menu" href={chunk.link}><span>{chunk.text}</span></a></li>)}
                </ul>
            </div>
        </div>
    )
}