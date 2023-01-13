WL.registerComponent('planetSpawner', {
    mesh: {type: WL.Type.Mesh},
    material: {type: WL.Type.Material},
}, {
    init: function() {
        console.log('init() with param', this.param);
    },
    start: function() {
        var cursor = this.object.getComponent("cursor-target");
        cursor.addClickFunction( o=>{
            var newObj = WL.scene.addObject();
            var newMesh = newObj.addComponent("mesh");
            newMesh.mesh = this.mesh;
            newMesh.material = this.material;
            newObj.transformWorld = this.object.transformWorld;
            console.log(newObj.transformLocal);
        })
    },
    update: function(dt) {
    },
});
