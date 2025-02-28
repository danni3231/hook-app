import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { HooksApp } from './HooksApp.jsx';
import { CounterApp } from './01-useState/CounterApp.jsx';
import { CounterCustomHook } from './01-useState/CounterCustomHook.jsx';
import { SimpleForm } from './02-useEffect/simpleForm.jsx';
import { FormCustomHook } from './02-useEffect/FormCustomHook.jsx';
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks.jsx';

createRoot(document.getElementById('root')).render(
	//<StrictMode>
    <MultipleCustomHooks/>
		//<FormCustomHook />
	//</StrictMode>
);
