import GAnalytics from 'ganalytics';
import App from '@components/App';
import './index.scss';
import focusVisible from 'focus-visible';

window.app = new App({
	target: document.querySelector('#app')
});

console.log('@process.env.NODE_ENV: ', process.env.NODE_ENV);


if (process.env.NODE_ENV === 'production') {
	window.ga = new GAnalytics('UA-XXXXXXXX-X');

	// Additional production-specific code...
}
