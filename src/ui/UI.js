import $ from 'jquery';
import Phaser from 'phaser';

export default class UI {
    /**
     * @param {Phaser.Scene} scene
     */
    constructor (scene) {
        /**
         * @type {Phaser.Scene}
         */
        this.scene = scene;

        /**
         * @type {*|jQuery|HTMLElement}
         */
        this.coinSelector = $('.coins');
    }

    show () {
        $('#ui').show();
    }
}
