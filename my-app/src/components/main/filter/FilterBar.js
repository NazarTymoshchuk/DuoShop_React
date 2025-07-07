import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import products from '../../../data/products';

function FilterBar({filters, setFilters, maxPriceProduct}) {

    const uniqueCategories = [...new Set(products.map(p => p.category))]

    return (
        <div>
            <Form.Range 
                    max={maxPriceProduct}
                    min="0"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}
            />

            <h3>{filters.maxPrice}</h3>

            {uniqueCategories.map(c => (
                <div key={c}>
                    <Link to={`/products/${c}`}>{c}</Link>
                </div>
            ))}

            
            
        </div>
    )
}

export default FilterBar;