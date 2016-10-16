if ("undefined" == typeof jQuery)throw new Error("SwallowJS requires jQuery");
/**
 * The main Controller for handling all system required
 * SwallowJs(tm) : SwallowJs Framework (http://docs.swallow.js)
 *
 * For full copyright and license information, please see the LICENSE.txt
 *
 * @link          http://docs.swallow.js SwallowJs(tm) Project
 * @package       swallowJs.boot.js
 * @since         SwallowJs(tm) v 0.2.9
 */

$('<link>')
    .appendTo('head')
    .attr({type: 'text/css', rel: 'stylesheet'})
    .attr('href', '/swallowJs/utility/css/swallow_inner_loading.css');

$().ready(function () {
    $.when(
        /**
         * SwallowJs (utility/bootstrap)
         * SwallowJs config (config.js)
         * SwallowJs (utility/helper)
         */
        $.getScript('/swallowJs/utility/helper.js'),
        $.getScript('/swallowJs/utility/bootstrap.js'),
        $.getScript('/config.js'),

        /**
         * @mustache   **https://github.com/janl/mustache.js**
         * @pathjs     **https://github.com/mtrpcic/pathjs**
         */
        $.getScript('/swallowJs/plugins/mustache/mustache.min.js'),
        $.getScript('/swallowJs/plugins/path/path.min.js'),

        /**
         * Data Source connection
         * Firebase / Serve side
         * SwallowJs system config (config.js)
         * SwallowJs (utilities)
         */
        $.getScript('/swallowJs/service/initializeFirebaseConnection.js'),
        $.getScript('/swallowJs/service/initializeServerSideConnection.js'),

        /**
         * SwallowJs (layout)
         * SwallowJs (routes)
         */
        $.getScript('/swallowJs/utility/layout.js'),
        $.getScript('/routes.js')

    ).done(function (s) {
        $(initPath);
        logMessage('**** SwallowJs is working perfectly ****');

        /**
         * your javascript codes here
         */




        // save
        // FirebaseService.saveData({
        //     path: '/posts', data: ({author:"John Deauthor", body: "post body content.", title: "Another post title "})
        // }, function(data) {
        //     if(!data.error) {
        //         logMessage(data);
        //     } else {
        //         logMessage(data);
        //     }
        // });

        // update
        // FirebaseService.updateData({
        //    path: 'see/-KSniAXFZJVrFIAg3gli', data: ({been:'s34567654wacqw', been2:'sadv3456765qw'})
        // }, function(data) {
        //     if(!data.error) {
        //         logMessage(data);
        //     } else {
        //         logMessage(data);
        //     }
        // });

        // findOne
        // FirebaseService.findOne({
        //     path: 'posts/post_one'
        // }, function(data) {
        //     if(!data.error) {
        //         logMessage(data);
        //     } else {
        //         logMessage(data);
        //     }
        // });


        // FirebaseService.findAll({
        //    path: 'posts'
        // }, function(data) {
        //     if(!data.error) {
        //         logMessage(data);
        //     } else {
        //         logMessage(data);
        //     }
        // });


        /**
         * your javascript codes here
         */
    });
});