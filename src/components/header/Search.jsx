import { useState, useEffect } from 'react';
import { InputBase, Box, List, ListItem, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: white;
    width: 38%;
    border-radius: 2px;
    margin-left: 90px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: black;
    padding: 5px;
`;

const ListWrapper = styled(List)`
    position: absolute;
    color: #000;
    background: #ffffff;
    margin-top: 36px;
`;


const Search = () => {
    const [text, setText] = useState();
    const [open, setOpen] = useState(true);

    const getText = (text) => {
        setText(text);
        setOpen(false);
    };

    const getProducts = useSelector((state) => state.getProducts);
    const products = getProducts?.products ?? []; // Use optional chaining and nullish coalescing

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products,brands..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => getText(e.target.value)}
            />
            <SearchIconWrapper>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIconWrapper>
            {text && (
                <ListWrapper hidden={open}>
                    {products &&
                        products
                            .filter((product) =>
                                product.title.longTitle.toLowerCase().includes(text.toLowerCase())
                            )
                            .map((product) => (
                                <ListItem key={product.id}>
                                    <Link
                                        to={`/product/${product.id}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={() => setOpen(true)}
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))}
                </ListWrapper>
            )}
        </SearchContainer>
    );
};

export default Search;
