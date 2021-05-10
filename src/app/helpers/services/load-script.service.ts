import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Scripts {
    name: string;
    src: string;
}

interface StyleSheet {
    name: string;
    src: string;
}

export const ScriptStore: Scripts[] = [
    { name: 'jq-coll', src: 'assets/js/jquery-plugin-collection.js' },
    { name: 'jq-theme-tool', src: 'assets/js/revolution-slider/js/jquery.themepunch.tools.min.js' },
    { name: 'jq-theme-revo', src: 'assets/js/revolution-slider/js/jquery.themepunch.revolution.min.js' },
    { name: 'custom', src: 'assets/js/custom.js' },

];

export const StyleSheetStore: StyleSheet[] = [
    { name: 'apexchart', src: '../../../app-assets/vendors/css/charts/apexcharts.css' },
];

declare var document: any;

@Injectable({
    providedIn: 'root'
})
export class LoadScriptsService {

    private scripts: any = {};
    private styleSheet: any = {};

    // tslint:disable-next-line: no-shadowed-variable
    constructor(@Inject(DOCUMENT) private document: Document) {
        ScriptStore.forEach((script: any) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });

        StyleSheetStore.forEach((script: any) => {
            this.styleSheet[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }

    load(...scripts: string[]) {
        const promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    loadStyle(...scripts: string[]) {
        const promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadStyleSheets(script)));
        return Promise.all(promises);
    }

    loadStyleSheets(name: string) {
        return new Promise((resolve, reject) => {
            if (!this.styleSheet[name].loaded) {
                const head = this.document.getElementsByTagName('head')[0];
                const style = this.document.createElement('link');
                style.rel = 'stylesheet';
                style.href = `${this.styleSheet[name].src}`;

                head.appendChild(style);
                resolve({ script: name, loaded: true, status: 'Loaded' });
            } else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }

    loadScript(name: string) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scripts[name].src;
            if (script.readyState) {
                script.onreadystatechange = () => {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    }
                };
            } else {
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    resolve({ script: name, loaded: true, status: 'Loaded' });
                };
            }
            script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
}
