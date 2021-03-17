import { useSelector, useDispatch } from 'react-redux';
// import { setClose, setOpen } from 'store/modules/mainAddform';

export const useAddform = addformStore => {
  const dispatch = useDispatch();
  const open = useSelector(state => state[addformStore].open, []);
  const { setOpen, setClose } = import(`store/modules/${addformStore}`);
  return {
    open,
    setOpen: () => dispatch(setOpen),
    setClose: () => dispatch(setClose),
  };
};
