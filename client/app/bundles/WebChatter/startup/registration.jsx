import ReactOnRails from 'react-on-rails'
import Home from '../components/Home'
import RouterApp from './ClientRouterApp';
import routerCurrentUserStore from '../store/routerCurrentUserStore';
import currentUserStore from '../store/currentUserStore';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Home, RouterApp
});

ReactOnRails.registerStore({
  routerCurrentUserStore,
  currentUserStore,
});
