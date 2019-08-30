import store from '../store/index';
import {addValue, subtractValue} from '../actions/index';

window.store = store;
window.addValue = addValue;
window.subtractValue = subtractValue;
