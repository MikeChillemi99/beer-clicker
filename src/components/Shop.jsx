import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

function Shop({ handleClickItem1,
                handleClickItem2,
                handleClickItem3,
                handleClickItem4,
                handleClickItem5,
                item1Price,
                item2Price,
                item3Price,
                item4Price,
                item5Price}) {

    return (
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Shop</h1>
        <table className='table' style={{ width: '100%', fontSize: '1.2rem', backgroundColor: '#F6C101' }}>
            <thead>
                <tr>
                    <th>Matériel</th>
                    <th></th>
                    <th>Prix</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Kit maison</td>
                <td>
                    <button className="btn btn-secondary btn-sm" onClick={handleClickItem1}>Acheter</button>
                </td>
                <td>{item1Price}</td>
                <td>Rapporte 1<FontAwesomeIcon icon={faBeer} />/8s</td>
            </tr>
            <tr>
                <td>Kit pro</td>
                <td>
                    <button className="btn btn-secondary btn-sm" onClick={handleClickItem2}>Acheter</button>
                </td>
                <td>{item2Price}</td>
                <td>Rapporte 1<FontAwesomeIcon icon={faBeer} />/4s</td>
            </tr>
            <tr>
                <td>Microbrasserie</td>
                <td>
                    <button className="btn btn-secondary btn-sm" onClick={handleClickItem3}>Acheter</button>
                </td>
                <td>{item3Price}</td>
                <td>Rapporte 1<FontAwesomeIcon icon={faBeer} />/1s</td>
            </tr>
            <tr>
                <td>Brasserie</td>
                <td>
                    <button className="btn btn-secondary btn-sm" onClick={handleClickItem4}>Acheter</button>
                </td>
                <td>{item4Price}</td>
                <td>Rapporte 2<FontAwesomeIcon icon={faBeer} />/1s</td>
            </tr>
            <tr>
                <td>Usine</td>
                <td>
                    <button className="btn btn-secondary btn-sm" onClick={handleClickItem5}>Acheter</button>
                </td>
                <td>{item5Price}</td>
                <td>Rapporte 4<FontAwesomeIcon icon={faBeer} />/1s</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
}

export default Shop;
