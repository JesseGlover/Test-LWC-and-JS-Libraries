import {LightningElement, track} from 'lwc';

// To test Javascript Libraries and Frameworks. Add them to your org as a static resource.
// Mine below are separate js files and not set up as zip files.

import jqueryResource from '@salesforce/resourceUrl/jquery';
import babylonResource from '@salesforce/resourceUrl/babylonjs';
import threeJSResource from '@salesforce/resourceUrl/threejs';
import jasmineResource from '@salesforce/resourceUrl/jasminetesting';
import animeResource from '@salesforce/resourceUrl/anime';
import xlsxResource from '@salesforce/resourceUrl/xlsx';
import particlesResource from '@salesforce/resourceUrl/particles';
import tensorflow from '@salesforce/resourceUrl/tensorflow';
import apexcharts from '@salesforce/resourceUrl/apexcharts';
import annyang from '@salesforce/resourceUrl/annyang';
import crytoscape from '@salesforce/resourceUrl/crytoscape';
import vue from '@salesforce/resourceUrl/vue';
import react from '@salesforce/resourceUrl/react';
import mithril from '@salesforce/resourceUrl/mithril';
import jforce from '@salesforce/resourceUrl/jforce';
import handlebars from '@salesforce/resourceUrl/handlebars';
import d3 from '@salesforce/resourceUrl/d3';
import chartjs from '@salesforce/resourceUrl/chartjs';
import angularjs from '@salesforce/resourceUrl/angularjs';

// untested imports



import { loadScript } from 'lightning/platformResourceLoader';

export default class PhaserLwc extends LightningElement {

    renderedCallback() {
        // Change the name from angularjs to any library you are testing's name.
            loadScript(this, angularjs)
            .then(() => {
                alert('Files loaded.');
            })
            .catch(error => {
                alert(error.body.message);
            });
    }
}
