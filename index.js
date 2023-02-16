function App(){
    const [state, setState] = React.useState(false)
    function toggle(){
        setState(prev => !prev)
    }

    return(
        <div className="con">
            { state && <input type="text" placeholder="Search..."/> }
            <span onClick={toggle}><i className="bi bi-search"></i></span>

        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))




// const span = document.querySelectorAll('span')
// const input = document.querySelectorAll('input')

// span.addEventListener('click', () => span.clasList.add(''))