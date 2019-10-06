import AbstractItem from 'entity/items/AbstractItem';

export default class HarvestedCrop extends AbstractItem {
    constructor (scene, x, y) {
        super(scene, x, y, 'Crops', 'Crop');
        this.body.setCircle(12, 0, -12);
    }

    explode (initY = false) {
        if (!initY) {
            initY = Phaser.Math.RND.integerInRange(-400, -150);
        }
        this.body.setVelocity(
            Phaser.Math.RND.integerInRange(-60, 60),
            Phaser.Math.RND.integerInRange(initY - 50, initY + 50)
        );

        this.body.angularVelocity = Phaser.Math.RND.integerInRange(0, 100);
    }
}