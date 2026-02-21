import Gestor_Rutas_Principal from './views/Gestor_Rutas_Principal';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Gestor_Rutas_Principal />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
