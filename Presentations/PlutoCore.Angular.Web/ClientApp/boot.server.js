import 'reflect-metadata';
import 'zone.js';
import 'rxjs/add/operator/first';
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, ApplicationRef, NgZone } from '@angular/core';
import { platformDynamicServer, PlatformState, INITIAL_CONFIG } from '@angular/platform-server';
import { createServerRenderer } from 'aspnet-prerendering';
import { AppModule } from './app/app.server.module';
enableProdMode();
export default createServerRenderer(function (params) {
    var providers = [
        { provide: INITIAL_CONFIG, useValue: { document: '<app></app>', url: params.url } },
        { provide: APP_BASE_HREF, useValue: params.baseUrl },
        { provide: 'BASE_URL', useValue: params.origin + params.baseUrl },
    ];
    return platformDynamicServer(providers).bootstrapModule(AppModule).then(function (moduleRef) {
        var appRef = moduleRef.injector.get(ApplicationRef);
        var state = moduleRef.injector.get(PlatformState);
        var zone = moduleRef.injector.get(NgZone);
        return new Promise(function (resolve, reject) {
            zone.onError.subscribe(function (errorInfo) { return reject(errorInfo); });
            appRef.isStable.first(function (isStable) { return isStable; }).subscribe(function () {
                // Because 'onStable' fires before 'onError', we have to delay slightly before
                // completing the request in case there's an error to report
                setImmediate(function () {
                    resolve({
                        html: state.renderToString()
                    });
                    moduleRef.destroy();
                });
            });
        });
    });
});
//# sourceMappingURL=boot.server.js.map