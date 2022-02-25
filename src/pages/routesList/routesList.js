import Handlebars from 'handlebars';
import template from './routesList.tmpl';
import './routesList.scss';
import '../../partials/floatingContainer'
import { ERROR_404, ERROR_500 } from '../../const/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    const links = [
        {
            href: ERROR_500,
            title: "500",
        },
        {
            href: ERROR_404,
            title: "404",
        },
      ];

    let html = compiled(links);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html });

    return htmlContainer;
};

// let page = getPageHtml();

// export default page;