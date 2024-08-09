import React from 'react';
import { Provider, useSelector } from 'react-redux';
import App from './App';
import store from './redux/store';
import StoreProvider from './app/StoreProvider';

const AppWrapper = () => {
	return (
		<StoreProvider>
			<App />
		</StoreProvider>
	);
};

export default AppWrapper;
