import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useSelector } from 'react-redux';

/**
 * Verifica se o estado do usuário está como autenticado
 * Caso esteja autenticado será chamado as rodas do arquivo app.routes.js
 * Se não, será exibido as rotas dos arquivos auth.routes.js
 */
export default function Routes() {
    const selector = useSelector(state => state);
    console.log('Redux Data: ', selector);
    const { authenticated } = selector.auth.authenticated;
    return authenticated ? <AppRoutes /> : <AuthRoutes />;
}
