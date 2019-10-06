export default class GameControls {
    /**
     * @param {GameScene} scene
     */
    constructor (scene) {
        /**
         * @type {GameScene}
         * @private
         */
        this.scene = scene;

        /**
         * @type {{up: Phaser.Input.Keyboard.Key}}
         * @private
         */
        this.keys = {
            interact: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
        };
    }

    update () {
        if (Phaser.Input.Keyboard.JustDown(this.keys.interact)) {
            this.scene.interactiveControler.interact();
        }
    }
}