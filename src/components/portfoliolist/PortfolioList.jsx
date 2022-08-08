import './portfoliolist.scss'

const PortfolioList = ({ title, id, active, setSelected }) => {
    return (
        <li className={active ? 'active' : ''} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList