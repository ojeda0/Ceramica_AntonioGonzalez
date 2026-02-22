import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Vista_Principal_Inicio from './Vista_Principal_Inicio';
import Vista_Coleccion_Bordes from './Vista_Coleccion_Bordes';
import Vista_Coleccion_Obsequios from './Vista_Coleccion_Obsequios';
import Vista_Coleccion_Cuartetos from './Vista_Coleccion_Cuartetos';
import Vista_Coleccion_Letreros from './Vista_Coleccion_Letreros';
import Galeria_General_Articulos from './Galeria_General_Articulos';
import Vista_Pagina_Carrito from './Vista_Pagina_Carrito';
import Vista_Pagina_Finalizar_Compra from './Vista_Pagina_Finalizar_Compra';
import Vista_Pagina_Pedido_Completado from './Vista_Pagina_Pedido_Completado';

export default function Gestor_Rutas_Principal() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Vista_Principal_Inicio />} />
                <Route path="/categoria-producto/cenefas" element={<Vista_Coleccion_Bordes />} />
                <Route path="/categoria-producto/regalos" element={<Vista_Coleccion_Obsequios />} />
                <Route path="/categoria-producto/motivos-de-4" element={<Vista_Coleccion_Cuartetos />} />
                <Route path="/categoria-producto/rotulos" element={<Vista_Coleccion_Letreros />} />
                <Route path="/tienda" element={<Galeria_General_Articulos />} />
                <Route path="/carrito" element={<Vista_Pagina_Carrito />} />
                <Route path="/finalizar-comprar" element={<Vista_Pagina_Finalizar_Compra />} />
                <Route path="/pedido-completado" element={<Vista_Pagina_Pedido_Completado />} />
            </Routes>
        </BrowserRouter>
    );
}
