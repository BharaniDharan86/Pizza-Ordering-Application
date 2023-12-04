import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { getCartQuantity } from '../features/cart/cartSlice';
function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  const totalQuantity = useSelector(getCartQuantity);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      {/* <Loader /> */}
      <Header />
      <div className="overflow-scroll">
        <main className="my-10 ml-auto mr-auto max-w-3xl  ">
          <Outlet />
        </main>
      </div>
      {!totalQuantity ? null : <CartOverview />}
    </div>
  );
}

export default AppLayout;
