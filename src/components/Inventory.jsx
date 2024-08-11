function Inventory({ item1Count, item2Count, item3Count, item4Count, item5Count }) {

    return (
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Inventaire</h1>
        <table className="table" style={{ width: '100%', fontSize: '1.2rem' }}>
            <tbody>
            <tr>
                <td>Kit maison : </td>
                <td>{item1Count}</td>
            </tr>
            <tr>
                <td>Kit pro : </td>
                <td>{item2Count}</td>
            </tr>
            <tr>
                <td>Microbrasserie : </td>
                <td>{item3Count}</td>
            </tr>
            <tr>
                <td>Brasserie : </td>
                <td>{item4Count}</td>
            </tr>
            <tr>
                <td>Usine : </td>
                <td>{item5Count}</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
}

export default Inventory;
