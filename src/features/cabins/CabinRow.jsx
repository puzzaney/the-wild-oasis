import CreateCabinForm from './CreateCabinForm';
import { useCabinDelete } from './useDeleteCabin';
import { useCreateCabin } from './useCreateCabin';
import { useGetCabins } from './useGetCabins';

import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import {
  HiOutlinePencil,
  HiOutlineSquare2Stack,
  HiOutlineTrash,
} from 'react-icons/hi2';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    id: cabinId,
    description,
  } = cabin;

  const { isDeleting, deleteCabin } = useCabinDelete();

  const { isCreating, createCabin } = useCreateCabin();

  const isDuplicating = isCreating;

  function handleDuplicateCabin() {
    console.log(cabin);
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="table">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits upto {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button>
            <HiOutlineSquare2Stack
              disabled={isDuplicating}
              onClick={handleDuplicateCabin}
            />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiOutlinePencil />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiOutlineTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
export default CabinRow;
