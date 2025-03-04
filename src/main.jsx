import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

/*import { HooksApp } from './HooksApp.jsx';
import { CounterApp } from './01-useState/CounterApp.jsx';
import { CounterCustomHook } from './01-useState/CounterCustomHook.jsx';
import { SimpleForm } from './02-useEffect/simpleForm.jsx';
import { FormCustomHook } from './02-useEffect/FormCustomHook.jsx';
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks.jsx';
import { FocusScreen } from './04-useRef/FocusScreen.jsx';
import { Layout } from './05-useLayoutEffect/Layout.jsx';
import { Memorize } from './06-memo/Memorize.jsx';
import { MemoHook } from './06-memo/MemoHook.jsx';
import { CallbackHook } from './06-memo/CallbackHook.jsx';
import { Padre } from './07-tarea-memo/Padre.jsx';

import './08-reducer/intro-reducer.js'*/

import { TodoApp } from './08-reducer/TodoApp';



createRoot(document.getElementById('root')).render(
	//<StrictMode>
        < TodoApp/>
		//<FormCustomHook />
	//</StrictMode>
);
