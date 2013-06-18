﻿"use strict";
require(['app', 'Controller', 'RouteBinder', 'Shared/Footer/View'], function (App, Controller, RouteBinder, FooterView) {

    NzbDrone.Router = Backbone.Marionette.AppRouter.extend({

        controller: Controller,
        appRoutes : {
            ''                           : 'series',
            'series'                     : 'series',
            'series/index'               : 'series',
            'series/add'                 : 'addSeries',
            'series/add/:action(/:query)': 'addSeries',
            'series/details/:query'      : 'seriesDetails',
            'calendar'                   : 'calendar',
            'settings'                   : 'settings',
            'settings/:action(/:query)'  : 'settings',
            'missing'                    : 'missing',
            'history'                    : 'history',
            'logs'                       : 'logs',
            'rss'                        : 'rss',
            ':whatever'                  : 'notFound'
        }
    });

    NzbDrone.addInitializer(function () {

        NzbDrone.Router = new NzbDrone.Router();
        Backbone.history.start({ pushState: true });

        RouteBinder.bind();
        NzbDrone.footerRegion.show(new FooterView());
    });
});

