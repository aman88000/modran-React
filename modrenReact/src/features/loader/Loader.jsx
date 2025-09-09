
import './style.css'

const Size = {
    Small: 'small',
    Medium: 'medium',
    Larger: 'large'
}
function Loader(props= {}){
    const {size = Size.Medium} = props
    let className = 'my-loader'
    className+= ` my-loader-${size}`

    return (<div className={className}></div>)
}

export default Loader