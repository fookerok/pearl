import components from '../components/UI/index.js';

export default (app) => {
    components.forEach(component => {
        if (component.name) {
            app.component(component.name, component);
        }
    });
};